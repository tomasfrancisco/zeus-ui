import { storiesOf } from "@storybook/react";
import * as React from "react";

import { H1, H2, H3, H4, H5, H6 } from "./heading";

storiesOf("✨ Atoms/Typography/Heading", module).add(
  "default",
  () => (
    <>
      <H1>Heading H1</H1>
      <H2>Heading H2</H2>
      <H3>Heading H3</H3>
      <H4>Heading H4</H4>
      <H5>Heading H5</H5>
      <H6>Heading H6</H6>
    </>
  ),
  {
    info: { inline: true }
  }
);
