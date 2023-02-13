import styled, { css } from "styled-components";
import { BiDownArrow } from "react-icons/bi";
import { TbArrowBack } from "react-icons/tb";

const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

type AbilityProps = {
  abilityColor: string;
};

const DetailCardContainer = styled.div<AbilityProps>`
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  height: fit-content;
  position: relative;
  border: 4px solid ${(props) => props.abilityColor};
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  > h1 {
    margin: 0;
  }
`;

const EvolutedPokemonContainer = styled.div`
  ${FlexColumn};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  > img {
    height: 5rem;
  }
  p {
    font-size: 0.8rem;
    font-weight: 600;
  }
  h3 {
    margin: 0;
  }
`;

const EvolutionContainer = styled.div`
  ${FlexColumn};
  gap: 1rem;
  > img {
    height: 12rem;
  }
`;

const MainPokemonContainer = styled.div<AbilityProps>`
  ${FlexColumn};
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border: 0.1rem solid ${(props) => props.abilityColor};
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  h1 {
    margin: 0;
  }
  img {
    width: 100%;
    height: 10rem;
  }
`;

const EvoArrow = styled(BiDownArrow)`
  font-size: 2rem;
`;

const GoBackButton = styled(TbArrowBack)`
  font-size: 2.5rem;
`;

const GoBackContainer = styled.div`
  ${FlexColumn};
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  &:hover {
    color: red;
  }
  > p {
    margin: 0;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;

const AbilitiesContainer = styled.div`
  ${FlexColumn};
  justify-content: center;
  align-items: center;
  h3 {
    margin: 0;
    font-size: 1.4rem;
  }
`;

const AbilitiesSpread = styled.div<AbilityProps>`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  p{
    background-color: ${(props) =>
      props.abilityColor === "white" ? "#93d7da" : props.abilityColor};
    border-radius: 0.4rem;
    padding: 0.2rem;
    text-align:center;
    font-weight: 600;
    color: ${(props) =>
      props.abilityColor === "yellow" ? "#4e4e47" : "#ffffff"};
    &:hover{
      background-color: grey;
      cursor: pointer;
      transition: 300ms ease-in;
    }
`;

export {
  EvoArrow,
  DetailCardContainer,
  EvolutedPokemonContainer,
  EvolutionContainer,
  AbilitiesContainer,
  AbilitiesSpread,
  MainPokemonContainer,
  GoBackButton,
  GoBackContainer,
};
