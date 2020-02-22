import styled from "@emotion/styled";
import { space } from "styled-system";

import { flex } from "utils";

export const Container = styled.div<any>(props => ({
  alignItems: "flex-start",
  width: "100%",
  ...flex("column"),
  ...space(props)
}));
