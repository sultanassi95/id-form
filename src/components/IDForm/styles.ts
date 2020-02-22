import styled from "@emotion/styled";

import { flex } from "utils";

export const Container = styled.div<any>(({ theme }: any) => ({
  width: "80%",
  padding: "24px",
  position: "absolute",
  top: "5%",
  backgroundColor: theme.colors.blueGray,
  boxShadow: `${theme.colors.colorGray} 0px 0px 5px 0px`,
  overflow: "hidden",
  ...flex("column")
}));

export const ActionsContainer = styled.div<any>(() => ({
  width: "100%",
  ...flex("row", "flex-end")
}));
