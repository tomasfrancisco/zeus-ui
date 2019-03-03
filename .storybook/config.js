import { loadStories } from "./load-stories";
import { configure } from "@storybook/react";
import { addDecorators } from "./add-decorators";
import { addStyles } from "./add-styles";

addStyles();
addDecorators();
configure(loadStories, module);
