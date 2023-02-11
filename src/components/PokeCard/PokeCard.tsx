import { Link } from "react-router-dom";
import {
  PokeCardBanner,
  PokeCardButton,
  PokeCardContainer,
  PokeCardImage,
} from "./PokeCard.styled";
import useCapitalizeLetter from "../../hooks/useCapitalizeLetter";
import { Spinner } from "../LoadingBar/LoadingBar.styled";
import { urlCorrector } from "../../utils/utils";
import { useAppSelector } from "../../app/hooks";

type PokeCardProps = {
  name: string;
  url: string;
};

const PokeCard = ({ name }: PokeCardProps) => {
  const { capitalized } = useCapitalizeLetter(name);

  const {isDarkMode} = useAppSelector(state => state.themeChanger)
  
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

  return (
    <PokeCardContainer>
      <PokeCardBanner/>
      {<Spinner /> && <PokeCardImage src={avatar} />}
      <h2>{capitalized}</h2>
      <Link state={name} to={`/detail/${name}`}>
        <PokeCardButton isDarkMode={isDarkMode}>Details of {capitalized}</PokeCardButton>
      </Link>
    </PokeCardContainer>
  );
};

export default PokeCard;
