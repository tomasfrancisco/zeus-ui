import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Icon } from "./icon";

export const defaultStory = () => <Icon name="bicycle" />;

storiesOf("✨ Atoms/Icon", module).add("default", defaultStory, {
  info: { inline: true }
});
