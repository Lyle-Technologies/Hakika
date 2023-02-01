const CheckBoxInputField = ({ checked }) => {
  return (
    <input
      type={"checkbox"}
      name={"rememberMe"}
      id={"rememberMe"}
      value={checked}
    />
  );
};

export default CheckBoxInputField;
