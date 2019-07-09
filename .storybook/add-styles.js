import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyles } from "../src/global-styles";

export const addStyles = () =>
  addDecorator(storyFn => (
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  ));
