import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./button";

storiesOf("Button", module)
  .add("default", () => <Button>click me</Button>, {
    info: { inline: true }
  })
  .add("outline", () => <Button outline={true}>click me</Button>, {
    info: { inline: true }
  });
