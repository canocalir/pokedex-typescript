import { MdDarkMode, MdLightMode } from "react-icons/md";
import styled, { css } from "styled-components";

const IconStyle = css`
    font-size: 1.8rem;
    cursor: pointer;
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #301793ff;
    height: 4rem;
    color: #ffffff;
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