import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Link } from "./link";

storiesOf("Atoms/Typography/Link", module).add(
  "default",
  () => <Link href="mailto:hi@tomasfrancisco.com">hi@tomasfrancisco.com</Link>,
  {
    info: { inline: true }
  }
);
