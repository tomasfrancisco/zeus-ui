import { css, Global } from "@emotion/core";

export const colors = {
  WHITE: "#ffffff",
  ANZAC: "#e1bc44",
  BRIGHT_SUN: "#ffd44a",
  ZEUS: "#1c1a17",
  FIORD: "#3c5266",
  FRENCH_GRAY: "#c3c3ca",
  SHADY_LADY: "#9F999F"
};

export const boxShadows = {
  DEFAULT: "4px 4px 24px rgba(159, 153, 159, 0.5)",
  ON_HOVER: "4px 10px 24px rgba(159, 153, 159, 0.5)"
};

export const transitions = {
  DEFAULT_TIME: "0.15s",
  DEFAULT_FUNCTION: "ease-in-out",
  LABEL: "all ease-in-out 0.25s"
};

export const fonts = {
  DEFAULT_FONT_FAMILY: "Rajdhani"
};

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Josefin+Sans:300,400|Rajdhani:400,700&display=swap");

  body {
    font-family: "Josefin Sans", sans-serif;
  }
`;

export const GlobalStyles: React.FC<{}> = props => (
  <Global styles={globalStyles} {...props} />
);
