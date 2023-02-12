import { createSlice } from "@reduxjs/toolkit";

type ThemeProps = {
  isDarkMode: boolean;
};

const initialState: ThemeProps = {
  isDarkMode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export default themeSlice.reducer
export const {setThemeMode} = themeSlice.actions