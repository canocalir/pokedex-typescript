import Navbar from "../../components/Navbar/Navbar";
import DetailCard from "../../components/DetailCard/DetailCard";
import { DetailPageContainer } from "./Detail.styled";
const Detail = () => {
  return (
    <>
      <Navbar />
      <DetailPageContainer>
        
          <DetailCard/>
        
      </DetailPageContainer>
    </>
  );
};

export default Detail;
