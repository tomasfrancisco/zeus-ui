import * as React from "react";
import css from "@emotion/css";

export type IconProps = React.HTMLProps<HTMLBaseElement> & {
  name: string;
  styleType?: "ios" | "md";
};

type IconState = React.HTMLProps<HTMLOrSVGElement> & {
  svgIcon: string;
};

export class Icon extends React.PureComponent<IconProps, IconState> {
  state: IconState = {
    svgIcon: ""
  };

  static defaultProps: Partial<IconProps> = {
    styleType: "ios"
  };

  public async componentDidMount() {
    const { name, styleType } = this.props;
    let svgIcon = "";

    try {
      const response = await fetch(
        require(`ionicons/dist/ionicons/svg/${styleType}-${name}.svg`)
      );

      svgIcon = await response.text();
    } catch (err) {
      console.error(err);
      svgIcon = "#";
    }

    this.setState({
      svgIcon
    });
  }

  public render() {
    const { styleType, name, ...props } = this.props;
    return (
      <i
        css={css`
          svg {
            width: 1em;
            height: 1em;
            fill: currentColor;
            vertical-align: middle;
          }
        `}
        dangerouslySetInnerHTML={{ __html: this.state.svgIcon }}
        {...props}
      />
    );
  }
}
