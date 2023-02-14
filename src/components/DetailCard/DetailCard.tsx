import { useLocation, useNavigate } from "react-router-dom";
import useCapitalizeLetter from "../../hooks/useCapitalizeLetter";
import {
  useGetEvolutionDataQuery,
  useGetSpeciesDetailsQuery,
  useGetPokemonDetailQuery,
} from "../../services/pokemonApi";
import { FC, useEffect, useState } from "react";
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
import type {
  Ability,
  EvoChain,
  EvolutedPokemonProps,
  Species,
} from "../../types/interfaces";

const DetailCard: FC = () => {
  const [evolutionChain, setEvolutionChain] = useState<any>([]);

  const [evolutedPokemons, setEvolutedPokemons] =
    useState<EvolutedPokemonProps>({
      prev: "",
      next: "",
    });

  //Fetch Evoluted Pokemon Sprites
  const { data: prevSprite } = useGetPokemonDetailQuery(evolutedPokemons?.prev);
  const { data: nextSprite } = useGetPokemonDetailQuery(evolutedPokemons?.next);

  const location = useLocation();
  const navigate = useNavigate();

  //Get Data From the React Router
  const { sprites, name, abilities, weight, height } = location?.state?.data;
  const { capitalized: pokemonName } = useCapitalizeLetter(name);
console.log(location)
  const { data: species } = useGetSpeciesDetailsQuery(name ?? "");
  const url = species?.evolution_chain?.url;
  const { data: evolution } = useGetEvolutionDataQuery(url ?? "");

  //Get evoluted pokemon sprites
  const prevAvatar = prevSprite?.sprites?.other?.dream_world?.front_default;
  const nextAvatar = nextSprite?.sprites?.other?.dream_world?.front_default;

  useEffect(() => {
    const getEvolutionChain = (data: EvoChain) => {
      const chain = [data?.species];
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

  //Find Evoluted Pokemons of current pokemon
  const findEvolutedPokemons = () => {
    const currentIndex = evolutionChain?.findIndex(
      (species: Species) => species?.name == name
    );
    setEvolutedPokemons({
      ...evolutedPokemons,
      prev: currentIndex > 0 && evolutionChain[currentIndex - 1]?.name,
      next:
        currentIndex < evolutionChain.length - 1 &&
        evolutionChain[currentIndex + 1]?.name,
    });
  };
  useEffect(() => {
    findEvolutedPokemons();
  }, [evolutionChain]);

  //Get Color Data by Pokemon
  const itemColor = species?.color?.name;

  return (
    <DetailCardContainer abilityColor={itemColor}>
      {!species ? <Spinner /> :
      <>
      <GoBackContainer onClick={() => navigate(-1)}>
        <GoBackButton data-testid="backbutton"/>
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
        <MainPokemonContainer abilityColor={itemColor}>
          <img
            src={sprites?.other?.dream_world?.front_default ?? ''}
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
        <AbilitiesSpread abilityColor={itemColor}>
          {abilities?.map((ability: Ability, index: number) => {
            return <p key={index}>{ability?.ability?.name}</p>;
          })}
        </AbilitiesSpread>
        <h3>Weight</h3>
        <p>{weight} Pounds</p>
        <h3>Height</h3>
        <p>{height} Feet</p>
      </AbilitiesContainer>
      </>
      }
      
    </DetailCardContainer>
  );
};

export default DetailCard;
