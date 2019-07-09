import * as React from "react";
import css from "@emotion/css";
import { colors, transitions } from "../../global-styles";

type NavbarLinkProps = React.HTMLProps<HTMLAnchorElement> & {
  active?: boolean;
};

export const NavbarLink = ({ active = false, ...props }: NavbarLinkProps) => (
  <a
    {...props}
    css={css`
      font-family: Rajdhani;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 24px;
      letter-spacing: 0.05em;
      cursor: pointer;

      color: ${colors.FRENCH_GRAY};
      transition: ${`all ${transitions.DEFAULT_FUNCTION} ${
        transitions.DEFAULT_TIME
      }`};

      &:hover {
        color: ${colors.BRIGHT_SUN};
      }

      ${active &&
        css`
          color: ${colors.ZEUS};
          cursor: text;

          &:hover {
            color: currentColor;
          }
        `}
    `}
  />
);
