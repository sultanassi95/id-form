import React from "react";
import { Form as ConnectedForm } from "formik";

const Form: React.FC = ({ children, ...otherProps }) => {
  return (
    <ConnectedForm autoComplete="off" style={{ width: "100%" }} {...otherProps}>
      <input
        autoComplete="false"
        name="hidden"
        type="text"
        style={{ display: "none" }}
      />
      {children}
    </ConnectedForm>
  );
};

export default Form;
