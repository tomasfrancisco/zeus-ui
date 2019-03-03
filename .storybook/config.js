import { loadStories } from "./load-stories";
import { configure } from "@storybook/react";
import { addDecorators } from "./add-decorators";

addDecorators();
configure(loadStories, module);
