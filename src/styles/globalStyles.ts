import { theme } from "./themeVariables";
import type { Theme } from "../types/types";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<Theme>`
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
