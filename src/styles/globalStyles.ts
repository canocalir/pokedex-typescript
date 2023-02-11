import { createGlobalStyle } from "styled-components";
import { theme } from "./themeVariables";

export const GlobalStyles = createGlobalStyle`
    body{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        background-color: ${theme.bodyBackgroundColor};
    }
`;
