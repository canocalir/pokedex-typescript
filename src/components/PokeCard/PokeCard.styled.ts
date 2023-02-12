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

const StatIcons = css`
  font-size: 1rem;
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
  border-radius: 1rem;
  padding: 0.8rem;
  width: 15rem;
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
  height: 25%;
  width: 30%;
  background-color: #ffffff;
  background: url(${pokeBall});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top-center;
  border-radius: 45%;
  padding: 1.2rem;
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
  display: flex;
  flex-direction: column;
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
};