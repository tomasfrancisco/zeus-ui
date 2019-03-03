import css from "@emotion/css";
import * as React from "react";

import { colors, transitions } from "../../_shared/styles";

export type InputProps = React.HTMLProps<HTMLInputElement> & {};
type InputState = {
  focused: boolean;
  hasValue: boolean;
};

export class Input extends React.PureComponent<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      focused: false,
      hasValue: !!props.value
    };
  }

  public render() {
    const {
      label: labelValue,
      onChange,
      onBlur,
      onFocus,
      ...props
    } = this.props;
    const { focused, hasValue } = this.state;
    return (
      <div
        css={css`
          position: relative;
          height: 57px;
        `}
      >
        {labelValue && (
          <label
            css={css`
              position: absolute;
              z-index: 1;
              display: block;
              color: ${colors.SHADY_LADY};
              pointer-events: none;
              transition: ${transitions.LABEL};
              margin-left: 1px;

              /* Typography */
              font-family: Rajdhani;
              font-style: normal;
              font-weight: normal;
              line-height: normal;
              font-size: 18px;

              ${!focused &&
                !hasValue &&
                css`
                  transform: translateY(25px);

                  /* Typography */
                  font-size: 24px;
                `}
            `}
            htmlFor=""
          >
            {labelValue}
          </label>
        )}
        <input
          css={css`
            width: 100%;
            border: none;
            border-bottom: 2px solid ${colors.ZEUS};
            outline: none;
            transition: ${`all ${transitions.DEFAULT_FUNCTION} ${
              transitions.DEFAULT_TIME
            }`};
            transform: translateY(24px);

            /* Typography */
            font-family: Rajdhani;
            font-style: normal;
            font-weight: normal;
            line-height: normal;
            font-size: 24px;

            &:focus {
              border-color: ${colors.BRIGHT_SUN};
            }
          `}
          id=""
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          {...props}
        />
      </div>
    );
  }

  private onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      focused: true
    });

    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(event);
    }
  };

  private onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      focused: false
    });

    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(event);
    }
  };

  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    this.setState({
      hasValue: !!value
    });

    const { onChange } = this.props;
    if (onChange) {
      onChange(event);
    }
  };
}
