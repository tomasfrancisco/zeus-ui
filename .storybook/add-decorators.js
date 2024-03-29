import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

export const addDecorators = () =>
  addDecorator(
    withInfo({
      styles: {
        body: {
          fontFamily: "Lato"
        },
        header: {
          h1: {
            marginRight: "20px",
            fontSize: "25px",
            display: "inline"
          },
          body: {
            paddingTop: 0,
            paddingBottom: 0
          },
          h2: {
            display: "inline",
            color: "#999"
          }
        },
        infoBody: {
          backgroundColor: "#eee",
          padding: "0px 5px",
          lineHeight: "2"
        }
      },
      inline: true,
      source: false
    })
  );
