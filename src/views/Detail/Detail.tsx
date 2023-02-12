import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { DetailCardContainer, DetailPageContainer } from "./Detail.styled";
import useCapitalizeLetter from "../../hooks/useCapitalizeLetter";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sprites, name } = location?.state?.data ?? {};
  const { capitalized } = useCapitalizeLetter(name);
  return (
    <>
      <Navbar />
      <DetailPageContainer>
        <DetailCardContainer>
          <h1>{capitalized}</h1>
          <img
            src={sprites?.other?.dream_world?.front_default}
            alt="pokemon-detail-image"
          />
          <button onClick={() => navigate(-1)}>Go Back</button>
        </DetailCardContainer>
      </DetailPageContainer>
    </>
  );
};

export default Detail;
