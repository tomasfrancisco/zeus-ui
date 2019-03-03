import { css } from "@emotion/core";
import * as React from "react";

import { boxShadows, colors, transitions } from "../../_shared/styles";
import { Icon } from "../icon";

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type: "default" | "outline";
  sizeType?: "default" | "large";
  icon?: string;
};

export class Button extends React.PureComponent<ButtonProps> {
  static defaultProps = {
    type: "default",
    sizeType: "default"
  };

  public render() {
    const { type, sizeType, icon, children, ...props } = this.props;
    return (
      <button
        {...props}
        css={css`
          border-radius: 50px;
          color: ${colors.ZEUS};
          box-shadow: ${boxShadows.DEFAULT};
          text-transform: uppercase;
          transition: ${transitions.DEFAULT};
          cursor: pointer;

          /* typography */
          font-family: Rajdhani;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          text-align: center;
          text-transform: uppercase;
          vertical-align: middle;

          ${type === "default" &&
            css`
              background: ${colors.BRIGHT_SUN};
              border: 2px solid transparent;
            `}
          ${type === "outline" &&
            css`
              background: ${colors.WHITE};
              border: 2px solid ${colors.BRIGHT_SUN};
            `}

          ${sizeType === "default" &&
            css`
              height: 44px;
              min-width: 44px;
              font-size: 14px;
              padding: 12px 54px;
            `}
          
          ${sizeType === "large" &&
            css`
              height: 64px;
              min-width: 64px;
              font-size: 24px;
              padding: 15px 54px;
            `}

          ${icon &&
            !children &&
            css`
              border-radius: 50%;
              padding: 11px;
            `}

          &:hover {
            transform: translateY(-6px);
            box-shadow: ${boxShadows.ON_HOVER};
          }
        `}
      >
        {icon && (
          <Icon
            name={icon}
            css={css`
              vertical-align: top;
              
              ${sizeType === "default" &&
                css`
                  font-size: 18px;
                `}

              ${sizeType === "large" &&
                css`
                  font-size: 24px;
                `}

              ${children &&
                css`
                  margin-right: 12px;
                `}
            `}
          />
        )}
        {children}
      </button>
    );
  }
}
