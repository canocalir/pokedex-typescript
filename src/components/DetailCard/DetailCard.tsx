import { useLocation, useNavigate } from "react-router-dom";
import useCapitalizeLetter from "../../hooks/useCapitalizeLetter";
import {
  useGetEvolutionDataQuery,
  useGetSpeciesDetailsQuery,
  useGetPokemonDetailQuery,
} from "../../services/pokemonApi";
import { useEffect, useState } from "react";
import { Spinner } from "../LoadingBar/LoadingBar.styled";
import {
  AbilitiesContainer,
  AbilitiesSpread,
  DetailCardContainer,
  EvoArrow,
  EvolutedPokemonContainer,
  EvolutionContainer,
  GoBackButton,
  GoBackContainer,
  MainPokemonContainer,
} from "./DetailCard.styled";

const DetailCard = () => {
  const [evolutionChain, setEvolutionChain] = useState<any>([]);
  const [evolutedPokemons, setEvolutedPokemons] = useState({
    prev: "",
    next: "",
  });
  const { data: prevSprite } = useGetPokemonDetailQuery(
    evolutedPokemons?.prev ?? ""
  );
  const { data: nextSprite } = useGetPokemonDetailQuery(
    evolutedPokemons?.next ?? ""
  );
  const location = useLocation();
  const navigate = useNavigate();
  const { sprites, name, abilities } = location?.state?.data ?? {};
  const { capitalized: pokemonName } = useCapitalizeLetter(name);
  const { data: species } = useGetSpeciesDetailsQuery(name);
  const url = species?.evolution_chain?.url;
  const { data: evolution } = useGetEvolutionDataQuery(url ?? "");

  const findEvolutedPokemons = () => {
    const currentIndex = evolutionChain?.findIndex(
      (species: any) => species?.name == name
    );
    setEvolutedPokemons({
      ...evolutedPokemons,
      prev: currentIndex > 0 && evolutionChain[currentIndex - 1]?.name,
      next:
        currentIndex < evolutionChain.length - 1 &&
        evolutionChain[currentIndex + 1]?.name,
    });
  };

  const prevAvatar = prevSprite?.sprites?.other?.dream_world?.front_default;
  const nextAvatar = nextSprite?.sprites?.other?.dream_world?.front_default;

  useEffect(() => {
    const getEvolutionChain = (data: any) => {
      const chain: any = [data?.species];
      let evolvesTo = data?.evolves_to;

      while (evolvesTo?.length) {
        chain.push(evolvesTo[0]?.species);
        evolvesTo = evolvesTo[0]?.evolves_to;
      }
      setEvolutionChain(chain);
    };

    if (evolution) {
      getEvolutionChain(evolution?.chain);
    }
  }, [evolution]);

  useEffect(() => {
    findEvolutedPokemons();
  }, [evolutionChain]);

  return (
    <DetailCardContainer>
      <GoBackContainer onClick={() => navigate(-1)}>
      <GoBackButton/>
      <p>Go Back</p>
      </GoBackContainer>
      <EvolutionContainer>
        <EvolutedPokemonContainer>
          {prevAvatar && (
            <>
              <h3>Previous Evolution</h3>
              {prevAvatar ? (
                <img src={prevAvatar} alt="prevEvo" />
              ) : (
                <Spinner />
              )}
              <p>{evolutedPokemons?.prev.toUpperCase()}</p>
              <EvoArrow />
            </>
          )}
        </EvolutedPokemonContainer>
        <MainPokemonContainer>
        <img
          src={sprites?.other?.dream_world?.front_default}
          alt="pokemon-detail-image"
        />
        <h1>{pokemonName}</h1>
        </MainPokemonContainer>
        <EvolutedPokemonContainer>
          {nextAvatar && (
            <>
              <EvoArrow />
              <h3>Next Evolution</h3>
              {nextAvatar ? (
                <img src={nextAvatar} alt="nextEvo" />
              ) : (
                <Spinner />
              )}
              <p>{evolutedPokemons?.next.toUpperCase()}</p>
            </>
          )}
        </EvolutedPokemonContainer>
      </EvolutionContainer>
      <AbilitiesContainer>
        <h3>Abilities</h3>
        <AbilitiesSpread>
          {abilities?.map((ability: any, index: number) => {
            return <p key={index}>{ability?.ability?.name}</p>;
          })}
        </AbilitiesSpread>
      </AbilitiesContainer>
    </DetailCardContainer>
  );
};

export default DetailCard;
