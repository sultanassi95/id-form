declare type IInputChangeEvent = React.ChangeEvent<HTMLInputElement>;

declare type ISelectValue = {
  name: string;
  value: string | string[];
};

declare type ISelectOption = {
  label: string;
  value: string;
};

declare type IHandleSelectChange = (
  customEvent: ICustomChangeEvent,
  setFieldValue: ISetFieldValue,
  setFieldError: ISetFieldValue
) => void;

declare type IHandleInputChange = (
  e: InputChangeEvent,
  setFieldValue: ISetFieldValue,
  setFieldError: ISetFieldValue
) => void;

declare type ISetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => void;

declare type ISetFieldError = (field: string, errorMsg: string) => void;

declare interface ICustomChangeEvent {
  name: string;
  value: ISelectValue;
}
