import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const themes = {
  light: "autumn",
  dark: "business",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "gerwyn sim" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state, action) => {
      console.log("logout");
    },
    toggleTheme: (state, action) => {
      const { light, dark } = themes;
      state.theme = state.theme === light ? dark : light;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
