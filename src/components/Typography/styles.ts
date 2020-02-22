import styled from "@emotion/styled";
import { variant, space, color, typography } from "styled-system";

export const variants: any = {
  variants: {
    hero: {
      as: "h1",
      fontSize: "28px",
      fontWeight: "bold",
      letterSpacing: "0.5px"
    },
    headline: {
      as: "h2",
      fontSize: "24px",
      fontWeight: "bold"
    },
    paragraph: {
      fontSize: "14px",
      as: "p"
    }
  }
};

export const StyledTypography = styled.div<any>(({ theme, as, direction, ...rest }) => ({
  direction,
  fontSize: "16px",
  fontFamily: theme.font,
  lineHeight: 1.8,
  letterSpacing: "normal",
  color: theme.colors.textDarkColor,
  margin: 0,
  textDecoration: "none",
  width: as === "div" ? "100%" : "auto",
  ...variant(variants),
  ...space({ theme, ...rest }),
  ...color({ theme, ...rest }),
  ...typography({ theme, ...rest })
}));
