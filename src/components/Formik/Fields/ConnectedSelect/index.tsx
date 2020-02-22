import React from "react";
import { FieldProps } from "formik";

import { Select } from "components/Fields";

interface IConnectedSelectProps extends FieldProps, HTMLElement {
  placeholder?: string;
  options: any[];
  isMulti?: boolean;
  onChange?: (customValue: ISelectValue) => void;
}

const ConnectedSelect: React.FC<IConnectedSelectProps> = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  onChange,
  ...otherProps
}: IConnectedSelectProps) => {
  const _onChange = (customValue: ISelectValue) => {
    const { name, value } = customValue;
    if (onChange) {
      onChange(customValue);
    } else {
      // In this app, this is useless! but it's the most generic way to use a ConnectedSelect.
      form.setFieldValue(name, value);
    }
  };

  const error = form.errors[field.name] as string;

  return (
    <Select
      className={className}
      name={field.name}
      value={field.value}
      onChange={_onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      error={error}
      {...otherProps}
    />
  );
};

export default ConnectedSelect;
