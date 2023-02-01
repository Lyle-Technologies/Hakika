const PasswordInputField = ({ password }) => {
  return (
    <input
      className={"formStyles"}
      type={"password"}
      value={password}
      name={"password"}
      placeholder={"Enter your Password"}
    />
  );
};

export default PasswordInputField;
