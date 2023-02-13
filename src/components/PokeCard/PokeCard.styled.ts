import styled, { css } from "styled-components";
import {
  GiBroadsword,
  GiCheckedShield,
  GiGuardedTower,
  GiHealthNormal,
  GiStarSkull,
} from "react-icons/gi";
import { RiSpeedMiniFill } from "react-icons/ri";
import { theme } from "../../styles/themeVariables";
import banner from "../../assets/banner.jpg";
import pokeBall from "../../assets/pokeball.png";

type PokeCardProps = {
  isDarkMode: boolean;
};

type ItemsColorProps = {
  itemsColor: string;
};

const StatIcons = css`
  font-size: 1rem;
`;

const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

const PokeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fcf1ffcc;
  height: 25rem;
  width: 18rem;
  border-radius: 1rem;
  position: relative;
  padding: 0.5rem;
  > h2 {
    color: ${theme.pokeCardNameColor};
    margin: 0;
  }
`;

const PokeCardButton = styled.button<PokeCardProps>`
  border: none;
  background-color: ${(props) =>
    props.isDarkMode ? theme.pokeCardButtonDark : theme.pokeCardButtonLight};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#242424")};
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 0.8rem;
  width: 15rem;
  margin-top: 0.8rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.isDarkMode
        ? theme.pokeCardButtonDarkHover
        : theme.pokeCardButtonLightHover};
    transition: 300ms ease-in-out;
  }
`;

const PokeCardImage = styled.img<PokeCardProps>`
  height: 20%;
  background-color: #ffffff;
  background: url(${pokeBall});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 45%;
  padding: 2.2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 1;
`;

const PokeCardBanner = styled.img<PokeCardProps>`
  width: 100%;
  height: 22%;
  opacity: 0.8;
  position: absolute;
  top: 0;
  background: url(${banner});
  background-size: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom: 0.2rem solid
    ${(props) => (props.isDarkMode ? "#5e34d1" : "#f6c501")};
`;

const PokeCardMovesSelect = styled.select`
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-color: #e7dffd;
  font-weight: 600;
`;

const PokeCardStatsContainer = styled.div`
  display: flex;
  background-color: #e2e2e2;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const PokeCardSingleStats = styled.div`
  ${FlexColumn};
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  > p {
    margin: 0;
    font-weight: 600;
  }
`;

const PokeCardStatsHealthIcon = styled(GiHealthNormal)`
  ${StatIcons};
  color: #640808;
`;

const PokeCardStatsAttackIcon = styled(GiBroadsword)`
  ${StatIcons};
`;

const PokeCardStatsDefenseIcon = styled(GiCheckedShield)`
  ${StatIcons};
  color: #2e0a4d;
`;
const PokeCardStatsSpecialAttackIcon = styled(GiStarSkull)`
  ${StatIcons};
  color: #963b12;
`;

const PokeCardStatsSpecialDefenseIcon = styled(GiGuardedTower)`
  ${StatIcons};
  color: #125696;
`;

const PokeCardStatsSpeedIcon = styled(RiSpeedMiniFill)`
  ${StatIcons};
  color: #064b0b;
`;

const HeldItemsContainer = styled.div<ItemsColorProps>`
  ${FlexColumn};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  label {
    margin-top: 0.5rem;
    font-weight: 600;
  }
  div {
    display: flex;
    gap: 0.3rem;
  }
  p {
    font-size: 0.62rem;
    background-color: ${(props) =>
      props.itemsColor === "white" ? "#93d7da" : props.itemsColor};
    border-radius: 0.3rem;
    padding: 0.2rem;
    color: ${(props) =>
      props.itemsColor === "yellow" ? "#4e4e47" : "#ffffff"};
    font-weight: 600;
    text-align: center;
    margin: 0;
  }
  h6 {
    margin: 0;
  }
`;

const PokeCardIconsContainer = styled.div`
  ${FlexColumn};
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 3;
  gap: 0.3rem;
  filter: drop-shadow(0 0 0.55rem black);
  img {
    height: 2rem;
  }
`;

export {
  PokeCardContainer,
  PokeCardMovesSelect,
  PokeCardButton,
  PokeCardImage,
  PokeCardBanner,
  PokeCardStatsContainer,
  PokeCardStatsHealthIcon,
  PokeCardStatsAttackIcon,
  PokeCardStatsDefenseIcon,
  PokeCardStatsSpecialAttackIcon,
  PokeCardStatsSpecialDefenseIcon,
  PokeCardStatsSpeedIcon,
  PokeCardSingleStats,
  HeldItemsContainer,
  PokeCardIconsContainer,
};
