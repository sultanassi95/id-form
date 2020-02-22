import styled from "@emotion/styled";

export const InputEl = styled.input<any>(({ theme, error }: any) => ({
  backgroundColor: theme.colors.blueGrayLight,
  border: `1px solid ${error ? theme.colors.errorRed : theme.colors.accent}`,
  borderRadius: "4px",
  width: "100%",
  height: "45px",
  padding: "0px 8px",
  fontFamily: theme.font,
  fontSize: "15px",
  outline: "none"
}));
