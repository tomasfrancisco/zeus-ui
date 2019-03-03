import { storiesOf } from "@storybook/react";
import * as React from "react";
import { TextArea } from "./text-area";

export const defaultStory = () => <TextArea label="Type your message" />;
export const withValueStory = () => (
  <TextArea
    label="Type your message"
    value="Hey! Here's an example of what you can write."
  />
);

storiesOf("✨ Atoms/TextArea", module)
  .add("default", defaultStory, {
    info: { inline: true }
  })
  .add("with value", withValueStory, {
    info: { inline: true }
  });
