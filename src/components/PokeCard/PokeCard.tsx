import { Link } from "react-router-dom";
import { PokeCardContainer } from "./PokeCard.styled";

type PokeCardProps = {
  name: string;
  url: string;
};

const PokeCard = ({ name }: PokeCardProps) => {
  
  return (
    <PokeCardContainer>
      {name}
      <Link state={name} to={`/detail/${name}`}>
        <button>Detail</button>
      </Link>
    </PokeCardContainer>
  );
};

export default PokeCard;
