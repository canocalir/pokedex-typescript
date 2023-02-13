import { useLocation, useNavigate } from "react-router-dom";
import useCapitalizeLetter from "../../hooks/useCapitalizeLetter";
import {
  useGetEvolutionDataQuery,
  useGetSpeciesDetailsQuery,
} from "../../services/pokemonApi";
import { useEffect, useRef, useState } from "react";

const DetailCard = () => {
  const [evolutionChain, setEvolutionChain] = useState<any>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { sprites, name, abilities } = location?.state?.data ?? {};
  const { capitalized: pokemonName } = useCapitalizeLetter(name);
  const { data: species } = useGetSpeciesDetailsQuery(name);
  const url = species?.evolution_chain?.url;
  const { data: evolution } = useGetEvolutionDataQuery(url ?? "");

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

  const currentIndex = evolutionChain?.findIndex(
    (species: any) => species?.name == name
  );

  const previousPokemon =
    currentIndex > 0 ? evolutionChain[currentIndex - 1]?.name : "Base Pokemon";
  const nextPokemon =
    currentIndex < evolutionChain.length - 1
      ? evolutionChain[currentIndex + 1]?.name
      : "None";

  return (
    <>
      <h1>{pokemonName}</h1>
      <img src={"avatar"} alt="prevEvo" />
      <h3>Previous Evolution</h3>
      <p>{previousPokemon}</p>
      <h3>Next Evolution</h3>
      <img src={"avatar"} alt="nextEvo" />
      <p>{nextPokemon}</p>
      <img
        src={sprites?.other?.dream_world?.front_default}
        alt="pokemon-detail-image"
      />
      <h3>Abilities</h3>
      {abilities?.map((ability: any, index: number) => {
        return <p key={index}>{ability?.ability?.name}</p>;
      })}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default DetailCard;
