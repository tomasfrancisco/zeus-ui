import { configure } from "@storybook/react";
import { addDecorators } from "./add-decorators";
import { addStyles } from "./add-styles";

addStyles();
addDecorators();
configure(require.context("../src", true, /\.story\.tsx$/), module);
