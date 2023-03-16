import { ThemeProvider } from "styled-components";

export const getTheme = () => {
  return {
    colors: {
      blueLight1: "#25c6bc",
      lightNavyBlue: "#495865",
      blue: "#1e2e31",
      white: "#ffff",
      black: "#000000",
      pink: "#aa4b7e",
      violetLigth: "#3b164b",
      darkViolet: "#271f2c",
      darkGray: "#5E5E5E",
      lightGray: " #F2F2F2",
    },
    fonts: {
      mainSans: "'Open Sans', sans-serif",
      size14: "14px",
      size16: "16px",
    },
  };
};

type AppThemeProviderProps = {
  children: JSX.Element;
};

const AppThemeProvider = ({ children }: AppThemeProviderProps) => (
  <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
);

export default AppThemeProvider;
