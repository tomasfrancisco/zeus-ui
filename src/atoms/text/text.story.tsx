import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Text, HeavyText } from "./text";

storiesOf("Atoms/Typography/Paragraph", module).add(
  "default",
  () => (
    <>
      <Text>Text</Text>
      <HeavyText>Heavy Text</HeavyText>
    </>
  ),
  {
    info: { inline: true }
  }
);
