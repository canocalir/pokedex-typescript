import { MdDarkMode, MdLightMode } from "react-icons/md";
import styled, { css } from "styled-components";
import { theme } from "../../styles/themeVariables";

const IconStyle = css`
    font-size: 1.8rem;
    cursor: pointer;
`

type NavbarProps = {
    isDarkMode: boolean;
}

const NavbarContainer = styled.div<NavbarProps>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.isDarkMode ? theme.navbarBackgroundColorDark : theme.navbarBackgroundColorLight};
    height: 4rem;
    color: #ffffff;
    position: fixed;
    width: 100%;
    z-index: 2;
`

const NavbarLogo = styled.img`
    height: 3.5rem;
`

const ThemeIconLight = styled(MdLightMode)`
    ${IconStyle};
    color: orange;
`

const ThemeIconDark = styled(MdDarkMode)`
    ${IconStyle};
    color: #999fe9;
`
export {NavbarContainer, ThemeIconDark, ThemeIconLight, NavbarLogo}