import React from "react";
import Select, { OptionsType, ValueType } from "react-select";
import { SpaceProps } from "styled-system";
import { withTheme } from "emotion-theming";

import { Paragraph } from "components/Typography";

import { Container } from "../Container";
import { createSelectStyles } from "./styles";

interface ISelectOption {
  label: string;
  value: string;
}

interface ISelectProps {
  options: OptionsType<ISelectOption>;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
  theme: any;
  error?: string;
  name: string;
  value: string;
  onChange: (option: any) => void;
  label?: string;
  containerSpaceStyles?: SpaceProps;
}

// isMulti was implemented to absorb TS restrictions that come with react-select defs.

const CustomSelect: React.FC<ISelectProps> = ({
  className,
  placeholder,
  value,
  name,
  options,
  isMulti = false,
  onChange,
  theme,
  error = "",
  containerSpaceStyles = {},
  label
}: ISelectProps) => {
  const _onChange = (option: ValueType<ISelectOption | ISelectOption[]>) => {
    let value;
    let customValue: { [name: string]: any } = {
      name
    };
    if (option) {
      value = isMulti
        ? (option as ISelectOption[]).map((item: ISelectOption) => item.value)
        : (option as ISelectOption).value;
      customValue.value = value;
    } else {
      customValue.value = isMulti ? [] : "";
    }
    onChange(customValue);
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(
            (option: ISelectOption) => value.indexOf(option.value) >= 0
          ) || []
        : options.find((_option: ISelectOption) => _option.value === value) ||
            "";
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <Container {...containerSpaceStyles}>
      {label ? (
        <Paragraph color="textDark" fontSize="12px" fontWeight={600} mb="8px">
          {label}:
        </Paragraph>
      ) : null}
      <Select
        className={className}
        menuPlacement="auto"
        menuPosition="fixed"
        menuPortalTarget={document.getElementById("root")}
        name={name}
        value={getValue()}
        onChange={_onChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        styles={createSelectStyles(theme, !!error)}
      />
      {!!error ? (
        <Paragraph color="errorRed" fontSize="11px" fontWeight={400} mt="4px">
          {error}
        </Paragraph>
      ) : null}
    </Container>
  );
};

export default withTheme(CustomSelect);
