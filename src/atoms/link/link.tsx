import * as React from "react";
import css from "@emotion/css";
import { transitions, colors } from "src/global-styles";

export type LinkProps = React.HTMLProps<HTMLAnchorElement> & {};

export const Link = ({ children, ...props }: LinkProps) => (
  <a
    css={css`
      font-family: Josefin Sans;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 24px;

      transition: ${`all ${transitions.DEFAULT_FUNCTION} ${
        transitions.DEFAULT_TIME
      }`};
      color: ${colors.FIORD};

      &:hover {
        color: ${colors.BRIGHT_SUN};
      }
    `}
    {...props}
  >
    {children}
  </a>
);
