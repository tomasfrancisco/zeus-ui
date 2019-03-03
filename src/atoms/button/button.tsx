import { css } from "@emotion/core";
import * as React from "react";

import { boxShadows, colors, transforms } from "../../_shared/styles";

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  sizeType?: "default" | "large";
  outline?: boolean;
};

export class Button extends React.PureComponent<ButtonProps> {
  static defaultProps = {
    sizeType: "default"
  };

  public render() {
    const { outline, sizeType, ...props } = this.props;
    return (
      <button
        {...props}
        css={css`
          ${outline &&
            css`
              background: ${colors.WHITE};
              border: 2px solid ${colors.BRIGHT_SUN};
            `}
          ${!outline &&
            css`
              background: ${colors.BRIGHT_SUN};
              border: 2px solid transparent;
            `}

          ${sizeType === "default" &&
            css`
              height: 44px;
              font-size: 14px;
              padding: 12px 54px;
            `}
          
          ${sizeType === "large" &&
            css`
              height: 64px;
              font-size: 24px;
              padding: 15px 54px;
            `}

          color: ${colors.ZEUS};
          box-shadow: ${boxShadows.DEFAULT};
          border-radius: 50px;
          
          text-transform: uppercase;
          transition: ${transforms.DEFAULT};
          cursor: pointer;

          /* typography */
          font-family: Rajdhani;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
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
