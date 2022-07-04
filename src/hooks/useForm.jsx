import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
const handleInputReset = ({name}) => {
  setValues({
    ...values,
    [name]: "",
  });
}
  return [values, handleInputChange,handleInputReset, reset];
};