import React from "react";
import { SpaceProps } from "styled-system";

import { Paragraph } from "components/Typography";

import { Container } from "../Container";
import { InputEl } from "./styles";

interface IFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children?: React.ReactNode;
  type?: string;
  error?: string;
  label?: string;
  containerSpaceStyles?: SpaceProps;
}

const Input: React.FC<IFieldProps> = ({
  type = "text",
  error,
  label,
  name,
  containerSpaceStyles = {},
  ...otherProps
}: IFieldProps) => {
  return (
    <Container {...containerSpaceStyles}>
      {label ? (
        <Paragraph color="darkTextColor" fontSize="12px" fontWeight={600}>
          {label}:
        </Paragraph>
      ) : null}
      <InputEl
        name={name}
        autoComplete={name}
        type={type}
        error={!!error}
        {...otherProps}
      />
      {!!error ? (
        <Paragraph color="errorRed" fontSize="11px" fontWeight={400} mt="4px">
          {error}
        </Paragraph>
      ) : null}
    </Container>
  );
};

export default Input;
