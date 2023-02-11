import styled from "styled-components";
import { theme } from "../../styles/themeVariables";
import banner from "../../assets/banner.jpg"

type PokeCardButtonProps = {
    isDarkMode: boolean;
}

const PokeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fcf1ff;
  height: 25rem;
  width: 18rem;
  border-radius: 1rem;
  position: relative;
  > h2 {
    color: ${theme.pokeCardNameColor};
  }
`;

const PokeCardButton = styled.button<PokeCardButtonProps>`
  border: none;
  background-color: ${props => props.isDarkMode ? theme.pokeCardButtonDark : theme.pokeCardButtonLight};
  color: #ffffff;
  font-weight: 600;
  border-radius: 1rem;
  padding: 0.8rem;
  width: 15rem;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.isDarkMode ? theme.pokeCardButtonDarkHover : theme.pokeCardButtonLightHover};
    transition: 300ms ease-in-out;
  }
`;

const PokeCardImage = styled.img`
  height: 20%;
  width: 26%;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 1.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 1;
`;

const PokeCardBanner = styled.img`
  width: 100%;
  height: 25%;
  position: absolute;
  top: 0;
  background: url(${banner});
  background-size: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export { PokeCardContainer, PokeCardButton, PokeCardImage, PokeCardBanner };
