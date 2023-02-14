import { Link } from "react-router-dom";
import {
  HeldItemsContainer,
  PokeBallImage,
  PokeCardBanner,
  PokeCardButton,
  PokeCardContainer,
  PokeCardIconsContainer,
  PokeCardImage,
  PokeCardMovesSelect,
  PokeCardSingleStats,
  PokeCardStatsAttackIcon,
  PokeCardStatsContainer,
  PokeCardStatsDefenseIcon,
  PokeCardStatsHealthIcon,
  PokeCardStatsSpecialAttackIcon,
  PokeCardStatsSpecialDefenseIcon,
  PokeCardStatsSpeedIcon,
} from "./PokeCard.styled";

import useCapitalizeLetter from "../../hooks/useCapitalizeLetter";
import { Spinner } from "../LoadingBar/LoadingBar.styled";
import { urlCorrector } from "../../utils/utils";
import { useAppSelector } from "../../app/hooks";
import {
  useGetPokemonDetailQuery,
  useGetSpeciesDetailsQuery,
} from "../../services/pokemonApi";

import pokeBall from "../../assets/pokeball.png";

//Pokemon Icons by Types
import ground from "../../assets/icons/ground.svg";
import flying from "../../assets/icons/flying.png";
import electric from "../../assets/icons/electric.svg";
import poison from "../../assets/icons/poison.svg";
import normal from "../../assets/icons/normal.svg";
import fire from "../../assets/icons/fire.png";
import fairy from "../../assets/icons/fairy.svg";
import bug from "../../assets/icons/bug.png";
import psychic from "../../assets/icons/psy.svg";
import fighting from "../../assets/icons/fighting.svg";
import water from "../../assets/icons/water.svg";
import steel from "../../assets/icons/steel.svg";
import rock from "../../assets/icons/rock.svg";
import ice from "../../assets/icons/ice.svg";
import dark from "../../assets/icons/dark.svg";
import type {
  HeldItems,
  Moves,
  PokemonStats,
  PokemonType,
} from "../../types/interfaces";
import { AllResult } from "../../types/types";

const PokeCard = ({ name }: AllResult) => {
  const { capitalized } = useCapitalizeLetter(name);
  const { isDarkMode } = useAppSelector((state) => state.themeChanger);

  const { data } = useGetPokemonDetailQuery(name);
  const { stats, moves } = data ?? {};
  const { data: species } = useGetSpeciesDetailsQuery(name);

  //Get Pokemon Types
  const pokemonTypes = data?.types?.map(
    (pokemonType: PokemonType, index: number) => {
      const { type } = pokemonType;
      const iconsByPokemon = (iconUrl: string) => {
        return <img key={index} src={iconUrl} />;
      };
      switch (type?.name) {
        case "ground":
          return iconsByPokemon(ground);
        case "flying":
          return iconsByPokemon(flying);
        case "electric":
          return iconsByPokemon(electric);
        case "poison":
          return iconsByPokemon(poison);
        case "normal":
          return iconsByPokemon(normal);
        case "fire":
          return iconsByPokemon(fire);
        case "fairy":
          return iconsByPokemon(fairy);
        case "bug":
          return iconsByPokemon(bug);
        case "psychic":
          return iconsByPokemon(psychic);
        case "fighting":
          return iconsByPokemon(fighting);
        case "water":
          return iconsByPokemon(water);
        case "steel":
          return iconsByPokemon(steel);
        case "rock":
          return iconsByPokemon(rock);
        case "ice":
          return iconsByPokemon(ice);
        case "dark":
          return iconsByPokemon(dark);
      }
    }
  );

  //Get Items Background Color By Type
  const itemColor = species?.color?.name;

  //Stats by Icon Conditional
  const statsConditionalRender = stats?.map(
    (pokemonStat: PokemonStats, index: number) => {
      const { stat, base_stat } = pokemonStat;
      //Conditionally render icons by stats
      const iconsByStat = (icon: React.ReactNode) => {
        return (
          <PokeCardSingleStats key={index}>
            {icon}
            <p>{base_stat}</p>
          </PokeCardSingleStats>
        );
      };
      switch (stat?.name) {
        case "hp":
          return iconsByStat(<PokeCardStatsHealthIcon />);
        case "attack":
          return iconsByStat(<PokeCardStatsAttackIcon />);
        case "defense":
          return iconsByStat(<PokeCardStatsDefenseIcon />);
        case "special-attack":
          return iconsByStat(<PokeCardStatsSpecialAttackIcon />);
        case "special-defense":
          return iconsByStat(<PokeCardStatsSpecialDefenseIcon />);
        case "speed":
          return iconsByStat(<PokeCardStatsSpeedIcon />);
      }
    }
  );

  //Fix for Nidoran's dash in url
  const avatar =
    name === "mr-mime"
      ? `https://projectpokemon.org/images/normal-sprite/${urlCorrector(
          "mr.mime"
        )}.gif`
      : name === "nidoran-m" || name === "nidoran-f"
      ? `https://projectpokemon.org/images/normal-sprite/${urlCorrector(
          name === "nidoran-m" ? "nidoran_m" : "nidoran_f"
        )}.gif`
      : `https://projectpokemon.org/images/normal-sprite/${urlCorrector(
          name
        )}.gif`;

  //Held Items Parse Data
  const heldItemsData = data?.held_items?.map((item: HeldItems) => {
    const {
      item: { name },
    } = item;
    return name;
  });

  //Set moves into selectbox
  const movesSelectBox = (
    <PokeCardMovesSelect name="moves">
      {moves?.map((pokemonMoves: Moves, index: number) => {
        const { move } = pokemonMoves;
        return <option key={index}>{move?.name}</option>;
      })}
    </PokeCardMovesSelect>
  );

  return (
    <PokeCardContainer>
      {!data ? (
        <Spinner />
      ) : (
        <>
          <PokeCardIconsContainer>{pokemonTypes}</PokeCardIconsContainer>
          <PokeCardBanner isDarkMode={isDarkMode} />
          <PokeCardImage isDarkMode={isDarkMode} src={avatar} />
          <PokeBallImage src={pokeBall} alt="hello"/>
          <PokeCardStatsContainer>
            {statsConditionalRender}
          </PokeCardStatsContainer>
          <h2>{capitalized}</h2>
          <label htmlFor="moves">{capitalized}'s Moves</label>
          {movesSelectBox}
          <HeldItemsContainer itemsColor={itemColor}>
            <label htmlFor="items">Items</label>
            {data?.held_items?.length > 0 ? (
              <div>
                {heldItemsData?.map((item: any[], index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            ) : (
              <h6>No Held Items</h6>
            )}
          </HeldItemsContainer>
          <Link state={{ data }} to={`/detail/${name}`}>
            <PokeCardButton isDarkMode={isDarkMode}>
              Evolution of {capitalized}
            </PokeCardButton>
          </Link>
        </>
      )}
    </PokeCardContainer>
  );
};

export default PokeCard;
