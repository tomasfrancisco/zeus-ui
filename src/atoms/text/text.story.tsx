import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Text, HeavyText } from "./text";

export const defaultStory = () => (
  <>
    <Text>Text</Text>
    <HeavyText>Heavy Text</HeavyText>
  </>
);

storiesOf("✨ Atoms/Typography/Paragraph", module).add(
  "default",
  defaultStory,
  {
    info: { inline: true }
  }
);
