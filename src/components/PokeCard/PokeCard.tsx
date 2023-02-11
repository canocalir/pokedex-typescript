import { Link } from "react-router-dom";
import { PokeCardButton, PokeCardContainer } from "./PokeCard.styled";
import useCapitalizeLetter from "../../hooks/useCapitalizeLetter";

type PokeCardProps = {
  name: string;
  url: string;
};

const PokeCard = ({ name }: PokeCardProps) => {
  const { capitalized } = useCapitalizeLetter(name);

  return (
    <PokeCardContainer>
      {name}
      <Link state={name} to={`/detail/${name}`}>
        <PokeCardButton>Details of {capitalized}</PokeCardButton>
      </Link>
    </PokeCardContainer>
  );
};

export default PokeCard;
