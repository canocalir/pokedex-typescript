import Navbar from "../../components/Navbar/Navbar";
import DetailCard from "../../components/DetailCard/DetailCard";
import { DetailPageContainer } from "./Detail.styled";
import { FC } from "react";
const Detail:FC = () => {
  return (
    <>
      <Navbar />
      <DetailPageContainer>
        <DetailCard />
      </DetailPageContainer>
    </>
  );
};

export default Detail;
