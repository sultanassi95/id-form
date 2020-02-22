import styled from "@emotion/styled";

import { flex } from "utils";

export const AppContainer = styled.div<any>(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.colors.primary,
  backgroundImage: `linear-gradient(
    180deg,
    ${theme.colors.primary} 15%,
    ${theme.colors.blueGray} 15%
  )`,
  ...flex("column", "center", "center")
}));
