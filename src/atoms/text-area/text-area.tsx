import css from "@emotion/css";
import * as React from "react";
import TextareaAutosize, {
  TextareaAutosizeProps
} from "react-textarea-autosize";

import { colors, transitions } from "../../_shared/styles";

export type TextAreaProps = TextareaAutosizeProps;
type TextAreaState = {
  focused: boolean;
  hasValue: boolean;
};

export class TextArea extends React.Component<TextAreaProps, TextAreaState> {
  constructor(props: TextAreaProps) {
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
      // Exclude incompatible input props
      ref,
      ...props
    } = this.props;
    const { focused, hasValue } = this.state;
    return (
      <div
        css={css`
          position: relative;
          height: auto;
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
              transition: ${`all ${transitions.DEFAULT_FUNCTION} ${
                transitions.DEFAULT_TIME
              }`};
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
                  transform: translateY(24px);

                  /* Typography */
                  font-size: 24px;
                `}
            `}
            htmlFor=""
          >
            {labelValue}
          </label>
        )}
        <TextareaAutosize
          css={css`
            width: 100%;
            min-height: 30px;
            border: none;
            border-bottom: 2px solid ${colors.ZEUS};
            outline: none;
            transition: ${`border-color ${transitions.DEFAULT_FUNCTION} ${
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

  private onFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    this.setState({
      focused: true
    });

    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(event);
    }
  };

  private onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    this.setState({
      focused: false
    });

    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(event);
    }
  };

  private onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
