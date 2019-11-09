import { css } from "@emotion/core";
import * as React from "react";
import { boxShadows, colors, transitions } from "../../_shared/styles";
import { Icon } from "../icon";

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: "default" | "outline" | "no-style";
  sizeType?: "default" | "large";
  icon?: string;
};

export const Button = ({
  type = "default",
  sizeType = "default",
  icon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      css={css`
          border-radius: 50px;
          color: ${colors.ZEUS};
          box-shadow: ${boxShadows.DEFAULT};
          text-transform: uppercase;
          transition: ${`all ${transitions.DEFAULT_FUNCTION} ${transitions.DEFAULT_TIME}`};
          cursor: pointer;

          /* typography */
          font-family: Rajdhani;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          text-align: center;
          text-transform: uppercase;
          vertical-align: middle;

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

          &:hover {
            transform: translateY(-6px);
            box-shadow: ${boxShadows.ON_HOVER};
          }

          ${type === "no-style" &&
            css`
              height: auto;
              min-width: auto;
              border: none;
              background-color: transparent;
              padding: 0px;
              box-shadow: none;

              &:hover {
                transform: none;
                box-shadow: none;
                color: ${colors.BRIGHT_SUN};
              }
            `}
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
};
