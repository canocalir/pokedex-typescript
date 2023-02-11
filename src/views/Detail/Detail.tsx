import { useLocation, useNavigate } from "react-router-dom";
import { useGetPokemonDetailQuery } from "../../services/pokemonApi";
import Navbar from "../../components/Navbar/Navbar";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = useGetPokemonDetailQuery(location?.state);
  return (
    <>
    <Navbar/>
    <div>
      <h1>{data?.name.toUpperCase()}</h1>
      <img src={data?.sprites?.front_default} alt="pokemon-detail-image" />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
    </>
  );
};

export default Detail;
