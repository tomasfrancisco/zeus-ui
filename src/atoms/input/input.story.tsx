import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Input } from "./input";

export const defaultStory = () => <Input label="me@example.com" />;
export const withValueStory = () => (
  <Input label="Email address" value="me@example.com" />
);

storiesOf("✨ Atoms/Input", module)
  .add("default", defaultStory, {
    info: { inline: true }
  })
  .add("with value", withValueStory, {
    info: { inline: true }
  });
