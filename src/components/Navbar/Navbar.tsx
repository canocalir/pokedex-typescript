import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setThemeMode } from "../../features/themeSlice";
import {
  NavbarContainer,
  NavbarLogo,
  ThemeIconDark,
  ThemeIconLight,
} from "./Navbar.styled";
import logo from "../../assets/pokemon-logo.png";
import { Link } from "react-router-dom";
import { FC } from "react";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector((state) => state.themeChanger);

  const conditionalThemeIcon = isDarkMode ? (
    <ThemeIconLight onClick={() => dispatch(setThemeMode())} />
  ) : (
    <ThemeIconDark onClick={() => dispatch(setThemeMode())} />
  );

  return (
    <NavbarContainer isDarkMode={isDarkMode}>
      <Link to={"/"}>
        <NavbarLogo src={logo} alt="logo" />
      </Link>
      {conditionalThemeIcon}
    </NavbarContainer>
  );
};

export default Navbar;
