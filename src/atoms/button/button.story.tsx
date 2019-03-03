import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Button } from "./button";

storiesOf("✨ Atoms/Button/All", module).add("default", () => (
  <>
    <Button>click me</Button>
    <Button type="outline">click me</Button>
    <Button sizeType="large">click me</Button>
    <Button type="outline" sizeType="large">
      click me
    </Button>
  </>
));

storiesOf("✨ Atoms/Button/Regular", module)
  .add("default", () => <Button>click me</Button>, {
    info: { inline: true }
  })
  .add("outline", () => <Button type="outline">click me</Button>, {
    info: { inline: true }
  })
  .add("icon", () => <Button icon="bicycle" />, {
    info: { inline: true }
  })
  .add("icon and text", () => <Button icon="bicycle">Bicycle</Button>, {
    info: { inline: true }
  });

storiesOf("✨ Atoms/Button/Large", module)
  .add("default", () => <Button sizeType="large">click me</Button>, {
    info: { inline: true }
  })
  .add(
    "outline",
    () => (
      <Button type="outline" sizeType="large">
        click me
      </Button>
    ),
    {
      info: { inline: true }
    }
  )
  .add("icon", () => <Button icon="bicycle" sizeType="large" />, {
    info: { inline: true }
  })
  .add(
    "icon and text",
    () => (
      <Button icon="bicycle" sizeType="large">
        Bicycle
      </Button>
    ),
    {
      info: { inline: true }
    }
  );
