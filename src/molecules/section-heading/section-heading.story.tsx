import { storiesOf } from "@storybook/react";
import * as React from "react";

import { SectionHeading } from "./section-heading";

storiesOf("Molecules/Section Heading", module).add(
  "default",
  () => (
    <>
      <SectionHeading>Section Heading</SectionHeading>
    </>
  ),
  {
    info: { inline: true }
  }
);
