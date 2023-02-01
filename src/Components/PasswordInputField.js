const PasswordInputField = ({ password }) => {
  return (
    <>
      <label className={"fontFamily mb-3"}>Password</label>
      <br />
      <input
        className={"formStyles"}
        type={"password"}
        value={password}
        name={"password"}
        placeholder={"Enter your Password"}
      />
    </>
  );
};

export default PasswordInputField;
