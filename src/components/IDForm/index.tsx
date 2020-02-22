import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./children/Header";
import { Formik, Field } from "formik";
import Form from "components/Formik";
import Button from "components/Button";
import { Container, ActionsContainer } from "./styles";

import { validationSchema } from "./yup";
import {
  getListOfOptions,
  getFromStorage,
  setToStorage,
  removeFromStorage
} from "utils";
import { createFields } from "./fields";

interface IFormValues {
  ssn: string;
  phoneNumber: string;
  emailAddress: string;
  country: string;
}

const formInitialValues = {
  ssn: "",
  phoneNumber: "",
  emailAddress: "",
  country: ""
};

const get = axios.get;
const formKeyInStorage = "persist:id-form";

const IDForm: React.FC = () => {
  const [countries, setCountries] = useState<ISelectOption[]>([]);

  const getInitialValues = () => {
    const persistedFormData = getFromStorage(formKeyInStorage);
    return persistedFormData || formInitialValues;
  };

  const getSubmitDisabled = (values: IFormValues) => {
    const atLeastOneValue = Object.values(values).find(Boolean);

    if (!atLeastOneValue) return true;

    return false;
  };

  useEffect(() => {
    get("/all")
      .then((res: any) => {
        if (res.status === 200 && res.data.length) {
          const countiresOptions: ISelectOption[] = getListOfOptions(
            res.data,
            "name",
            "alpha3Code"
          );
          setCountries(countiresOptions);
        }
      })
      .catch(() => {
        // SHOULD RETRY :sweat_smile:
      });
  }, []);

  const handleStorageChange = (name: string, value: any) => {
    let formData = getFromStorage(formKeyInStorage);
    if (formData) {
      formData = {
        ...formData,
        [name]: value
      };
    } else {
      formData = {
        [name]: value
      };
    }

    setToStorage(formKeyInStorage, formData);
  };

  const handleFormChange = (
    name: string,
    value: any,
    setFieldValue: ISetFieldValue,
    setFieldError: ISetFieldError
  ) => {
    handleStorageChange(name, value);
    setFieldValue(name, value);
    setFieldError(name, "");
  };

  const handleInputChange: IHandleInputChange = (
    e,
    setFieldValue,
    setFieldError
  ) => {
    const {
      name,
      value,
      validity: { valid }
    } = e.currentTarget;
    // For an Input [type="text"] & [pattern="SOMEHTML5PATTERN"]:
    // validity.valid will tell whether the input matches the pattern or not.
    if (valid) {
      handleFormChange(name, value, setFieldValue, setFieldError);
    }
  };

  const handleSelectChange: IHandleSelectChange = (
    val,
    setFieldValue,
    setFieldError
  ) => {
    const { name, value } = val;
    handleFormChange(name, value, setFieldValue, setFieldError);
  };

  const handleChange = (type: string) => {
    const handler: any = {
      input: handleInputChange,
      select: handleSelectChange
    };
    return handler[type];
  };

  const renderFields = (
    errors: any,
    setFieldValue: ISetFieldValue,
    setFieldError: ISetFieldError
  ) => {
    const fields = createFields(errors, countries);

    return fields.map(({ _type, name, ...fieldProps }: any) => (
      <Field
        key={name}
        onChange={(e: any) =>
          handleChange(_type)(e, setFieldValue, setFieldError)
        }
        name={name}
        {...fieldProps}
      />
    ));
  };

  return (
    <Container>
      <Header />
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        enableReinitialize={true}
        initialValues={getInitialValues()}
        validationSchema={validationSchema}
        onSubmit={(_values: IFormValues, { setValues, setStatus }: any) => {
          console.log("Success");
          removeFromStorage(formKeyInStorage);
          setValues(formInitialValues, false);
          setStatus({ success: true });
        }}
      >
        {({ values, errors, setFieldError, setFieldValue, dirty }) => (
          <Form>
            {renderFields(errors, setFieldValue, setFieldError)}
            <ActionsContainer>
              <Button
                type="submit"
                disabled={getSubmitDisabled(values) && !dirty}
                width="25%"
              >
                Submit
              </Button>
            </ActionsContainer>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default IDForm;
