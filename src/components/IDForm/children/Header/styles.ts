import styled from "@emotion/styled";
import { flex } from "utils";

export const Header = styled.div<any>(() => ({
  width: "100%",
  ...flex("row", "space-between")
}));

export const Heading = styled.div<any>(() => ({
  ...flex("column")
}));
