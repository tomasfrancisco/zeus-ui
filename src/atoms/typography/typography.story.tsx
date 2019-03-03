import { storiesOf } from "@storybook/react";
import { H1, H2, H3, H4, H5, H6 } from "../heading";
import * as React from "react";

import { HeavyText, Text } from "../text";
import { Link } from "../link";

storiesOf("Atoms/Typography/All", module).add(
  "default",
  () => (
    <>
      <H1>Heading H1</H1>
      <H2>Heading H2</H2>
      <H3>Heading H3</H3>
      <H4>Heading H4</H4>
      <H5>Heading H5</H5>
      <H6>Heading H6</H6>
      <Text>Text</Text>
      <HeavyText>Heavy Text</HeavyText>
      <Link href="mailto:hi@tomasfrancisco.com">hi@tomasfrancisco.com</Link>
    </>
  ),
  {
    info: { inline: true }
  }
);
