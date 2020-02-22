import React from "react";
import { FieldProps } from "formik";

import { Input } from "components/Fields";

interface IConnectedInputProps extends FieldProps {
  onChange?: (event: IInputChangeEvent) => void;
}

const ConnectedInput: React.FC<IConnectedInputProps> = ({
  field,
  form,
  onChange,
  ...otherProps
}: IConnectedInputProps) => {
  const { name, onChange: _onChange, ...otherFieldProps } = field;
  const { handleBlur, values, errors } = form;
  const value = values[name];
  const fieldError = errors[name] as string;

  const _handleChange = (event: any) => {
    if (onChange) {
      onChange(event);
    } else {
      // In this app, this is useless! but it's the most generic way to use a Formik ConnectedInput.
      form.setFieldValue(name, event.target.value);
    }
  };

  return (
    <Input
      id={name}
      name={name}
      onChange={_handleChange}
      onBlur={handleBlur}
      value={value}
      error={fieldError}
      {...otherFieldProps}
      {...otherProps}
    />
  );
};

export default ConnectedInput;
