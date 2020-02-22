import styled from "@emotion/styled";
import { layout, space } from "styled-system";

import { darken, firstTruthy } from "utils";

export const ButtonEl = styled.button<any>(
  ({ theme, color, backgroundColor, hidden, ...otherProps }: any) => {
    const { colors, font } = theme;
    const _bgColor = firstTruthy(
      colors[backgroundColor],
      backgroundColor,
      colors.callToAction
    );
    const styledProps = {
      theme,
      ...otherProps
    };

    return {
      backgroundColor: _bgColor,
      borderRadius: "4px",
      height: "50px",
      color: firstTruthy(colors[color], color, colors.colorWhite),
      fontFamily: font,
      fontSize: "15px",
      fontWeight: 600,
      outline: "none",
      display: hidden ? "none" : "flex",
      border: "none",
      padding: "0px 24px",
      cursor: "pointer",
      width: "100%",
      justifyContent: "center",
      "&:hover": {
        backgroundColor: `${darken(_bgColor, 15)}`
      },
      "&:disabled": {
        backgroundColor: colors.disabledColor,
        cursor: "unset"
      },
      p: {
        textAlign: "center"
      },
      ...layout(styledProps),
      ...space(styledProps)
    };
  }
);
