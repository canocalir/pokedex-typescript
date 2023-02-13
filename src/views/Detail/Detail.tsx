import Navbar from "../../components/Navbar/Navbar";
import DetailCard from "../../components/DetailCard/DetailCard";
import { DetailCardContainer } from "../../components/DetailCard/DetailCard.styled";
import { DetailPageContainer } from "./Detail.styled";
const Detail = () => {
  return (
    <>
      <Navbar />
      <DetailPageContainer>
        <DetailCardContainer>
          <DetailCard/>
        </DetailCardContainer>
      </DetailPageContainer>
    </>
  );
};

export default Detail;
