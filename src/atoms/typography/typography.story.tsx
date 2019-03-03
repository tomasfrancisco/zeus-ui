import { storiesOf } from "@storybook/react";
import * as React from "react";

import { defaultStory as headingDefaultStory } from "../heading/heading.story";
import { defaultStory as linkDefaultStory } from "../link/link.story";
import { defaultStory as textDefaultStory } from "../text/text.story";

storiesOf("✨ Atoms/Typography/All", module).add(
  "default",
  () => (
    <>
      {headingDefaultStory()}
      {textDefaultStory()}
      {linkDefaultStory()}
    </>
  ),
  {
    info: { inline: true }
  }
);
