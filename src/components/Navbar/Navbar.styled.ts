import { MdDarkMode, MdLightMode } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../styles/themeVariables";
import type { Theme } from "../../types/types";
import { IconStyle } from "../../styles/mixins";

const NavbarContainer = styled.div<Theme>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) =>
    props.isDarkMode
      ? theme.navbarBackgroundColorDark
      : theme.navbarBackgroundColorLight};
  height: 4rem;
  color: #ffffff;
  position: fixed;
  width: 100%;
  z-index: 4;
`;

const NavbarLogo = styled.img`
  height: 3.5rem;
`;

const ThemeIconLight = styled(MdLightMode)`
  ${IconStyle};
  color: orange;
`;

const ThemeIconDark = styled(MdDarkMode)`
  ${IconStyle};
  color: #999fe9;
`;

export { 
  NavbarContainer, 
  ThemeIconDark, 
  ThemeIconLight, 
  NavbarLogo };
