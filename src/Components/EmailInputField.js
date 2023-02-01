const EmailInputField = ({ email }) => {
  return (
    <input
      className={"formStyles"}
      type={"email"}
      value={email}
      name={"email"}
      placeholder={"Enter your Email"}
    />
  );
};

export default EmailInputField;
