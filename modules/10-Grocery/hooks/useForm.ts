import { useState } from "react";

export const useForm = <T extends Object>(form: T) => {
  const [formValues, setFormValues] = useState(form);

  const onChanges = (field: keyof T, value: any) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const onSetValues = (values: T) => {
    setFormValues(values);
  };

  const onReset = () => {
    setFormValues(form);
  };

  return {
    ...formValues,
    onSetValues,
    onChanges,
    onReset,
  };
};
