import * as React from "react";
import css from "@emotion/css";
import { colors } from "src/global-styles";

const defaultStyle = css`
  font-family: Josefin Sans;
  font-style: normal;
  font-size: 24px;
  color: ${colors.ZEUS};
`;

export type TextProps = React.HTMLProps<HTMLParagraphElement> & {};

export const Text = ({ ...props }: TextProps) => (
  <p
    {...props}
    css={css`
      ${defaultStyle};

      font-weight: 300;
      line-height: normal;
      letter-spacing: 0.05em;
    `}
  />
);

export const HeavyText = ({ ...props }: TextProps) => (
  <p
    {...props}
    css={css`
      ${defaultStyle};

      font-weight: normal;
      line-height: 29px;
    `}
  />
);
