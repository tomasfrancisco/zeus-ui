import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Link } from "./link";

export const defaultStory = () => (
  <Link href="mailto:hi@tomasfrancisco.com">hi@tomasfrancisco.com</Link>
);

storiesOf("✨ Atoms/Typography/Link", module).add("default", defaultStory, {
  info: { inline: true }
});
