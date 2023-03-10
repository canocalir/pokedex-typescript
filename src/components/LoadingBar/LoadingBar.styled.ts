import styled from "styled-components";
import loadball from "../../assets/load_ball.png"

export const LoadingBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #383636;
  background-image: url(${loadball});
  background-size: contain;
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
