import React from "react";
import { Global, css } from "@emotion/core";
import { addDecorator } from "@storybook/react";

const globalStyle = css`
  * {
    font-family: Open Sans;
  }
`;

export const addStyles = () =>
  addDecorator(storyFn => (
    <>
      <Global styles={globalStyle} />
      {storyFn()}
    </>
  ));
