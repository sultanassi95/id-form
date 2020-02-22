import { ConnectedInput, ConnectedSelect } from "components/Formik";

const sharedContainerStyles = {
  mb: "16px"
};

export const createFields = (errors: any, countries: ISelectOption[]) => [
  {
    _type: "input",
    name: "ssn",
    component: ConnectedInput,
    label: "Social Security Number",
    placeholder: "Enter your social security number",
    error: errors["ssn"],
    containerSpaceStyles: sharedContainerStyles
  },
  {
    _type: "input",
    name: "phoneNumber",
    component: ConnectedInput,
    pattern: "[0-9]*",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    error: errors["phoneNumber"],
    containerSpaceStyles: sharedContainerStyles
  },
  {
    _type: "input",
    name: "emailAddress",
    component: ConnectedInput,
    label: "Email Address",
    placeholder: "Enter your Email address",
    error: errors["emailAddress"],
    containerSpaceStyles: sharedContainerStyles
  },
  {
    _type: "select",
    name: "country",
    component: ConnectedSelect,
    label: "Country",
    placeholder: "Select your country",
    options: countries,
    error: errors["country"],
    containerSpaceStyles: sharedContainerStyles
  }
];
