import { Link } from "react-router-dom";
import {
  HeldItemsContainer,
  PokeCardBanner,
  PokeCardButton,
  PokeCardContainer,
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
import { useGetPokemonDetailQuery } from "../../services/pokemonApi";

type PokeCardProps = {
  name: string;
  url: string;
};

const PokeCard = ({ name }: PokeCardProps) => {
  const { capitalized } = useCapitalizeLetter(name);
  const { isDarkMode } = useAppSelector((state) => state.themeChanger);

  const { data } = useGetPokemonDetailQuery(name);
  const { stats, moves } = data ?? {};
console.log(data)
  const statsConditionalRender = stats?.map(
    (pokemonStat: any, index: number) => {
      const { stat, base_stat } = pokemonStat;
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

        const heldItemsConditional = data?.held_items?.map((item:any) => {
          const {item:{name}} = item
          return name 
        })

  return (
    <PokeCardContainer>
      {!data ? (
        <Spinner />
      ) : (
        <>
          <PokeCardBanner isDarkMode={isDarkMode} />
          <PokeCardImage isDarkMode={isDarkMode} src={avatar} />
          <PokeCardStatsContainer>
            {statsConditionalRender}
          </PokeCardStatsContainer>
          <h2>{capitalized}</h2>
          <label htmlFor="moves">{capitalized}'s Moves</label>
          <PokeCardMovesSelect name="moves">
            {moves?.map((pokemonMoves: any, index: number) => {
              const { move } = pokemonMoves;
              return <option key={index}>{move?.name}</option>;
            })}
          </PokeCardMovesSelect>
          {data?.held_items?.length > 0 && <HeldItemsContainer>
            <label htmlFor="items">Items</label>
            <div>
            {heldItemsConditional?.map((item:any) => <p>{item}</p>)}
            </div>
          </HeldItemsContainer>}
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
