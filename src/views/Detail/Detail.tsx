import { useLocation, useNavigate } from "react-router-dom";
import { useGetPokemonDetailQuery } from "../../services/pokemonApi";
import Navbar from "../../components/Navbar/Navbar";
import { DetailCardContainer, DetailPageContainer } from "./Detail.styled";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = useGetPokemonDetailQuery(location?.state);
  return (
    <>
      <Navbar />
      <DetailPageContainer>
        <DetailCardContainer>
        <h1>{data?.name.toUpperCase()}</h1>
        <img src={data?.sprites?.front_default} alt="pokemon-detail-image" />
        <button onClick={() => navigate(-1)}>Go Back</button>
        </DetailCardContainer>
      </DetailPageContainer>
    </>
  );
};

export default Detail;
