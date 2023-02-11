import { createGlobalStyle } from "styled-components";
import { theme } from "./themeVariables";

type GlobalStyleProps = {
  isDarkMode: boolean;
};

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
    body{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        background-color: ${(props) =>
          props.isDarkMode
            ? theme.bodyBackgroundColorDark
            : theme.bodyBackgroundColorLight};        
    }
`;
