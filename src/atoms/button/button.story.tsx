import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Button } from "./button";

storiesOf("Atoms/Button/All", module).add("default", () => (
  <>
    <Button>click me</Button>
    <Button outline={true}>click me</Button>
    <Button size="large">click me</Button>
    <Button outline={true} size="large">
      click me
    </Button>
  </>
));

storiesOf("Atoms/Button/Regular", module)
  .add("default", () => <Button>click me</Button>, {
    info: { inline: true }
  })
  .add("outline", () => <Button outline={true}>click me</Button>, {
    info: { inline: true }
  });

storiesOf("Atoms/Button/Large", module)
  .add("default", () => <Button size="large">click me</Button>, {
    info: { inline: true }
  })
  .add(
    "outline",
    () => (
      <Button outline={true} size="large">
        click me
      </Button>
    ),
    {
      info: { inline: true }
    }
  );
