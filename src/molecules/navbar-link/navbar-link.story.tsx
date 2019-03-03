import { storiesOf } from "@storybook/react";
import * as React from "react";

import { NavbarLink } from "./navbar-link";

storiesOf("🎩 Molecules/NavbarLink", module)
  .add(
    "default",
    () => (
      <>
        <NavbarLink>Menu #1</NavbarLink>
      </>
    ),
    {
      info: { inline: true }
    }
  )
  .add(
    "active",
    () => (
      <>
        <NavbarLink active={true}>Menu #1</NavbarLink>
      </>
    ),
    {
      info: { inline: true }
    }
  );
