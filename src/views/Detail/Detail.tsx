import {Navbar, DetailCard} from "./index";
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
