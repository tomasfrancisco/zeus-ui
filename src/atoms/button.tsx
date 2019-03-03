import * as React from "react";
import { css } from "@emotion/core";
import { colors, boxShadows } from "../_shared/styles";

const defaultStyle = css`
  background: ${colors.BRIGHT_SUN};
  border: 2px solid transparent;
`;

const outlineStyle = css`
  background: ${colors.WHITE};
  border: 2px solid ${colors.BRIGHT_SUN};
`;

type ButtonSize = "default" | "large";
type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  size?: ButtonSize;
  outline?: boolean;
};

export class Button extends React.PureComponent<ButtonProps> {
  public render() {
    const { size, outline, ...props } = this.props;
    return (
      <button
        {...props}
        css={css`
          ${outline && outlineStyle}
          ${!outline && defaultStyle}

          color: ${colors.ZEUS};
          box-shadow: ${boxShadows.DEFAULT};
          height: 64px;
          border-radius: 50px;
          padding: 15px 54px;
          text-transform: uppercase;
          transition: all ease-in-out 0.15s;
          cursor: pointer;

          /* typography */
          font-family: Rajdhani;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          font-size: 24px;
          text-align: center;
          text-transform: uppercase;
          vertical-align: middle;

          &:hover {
            transform: translateY(-6px);
            box-shadow: ${boxShadows.ON_HOVER};
          }
        `}
      />
    );
  }
}
