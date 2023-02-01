const EmailInputField = ({ email }) => {
  return (
    <>
      <label className={"fontFamily mb-3"}>Email address</label>
      <br />
      <input
        className={"formStyles"}
        type={"email"}
        value={email}
        name={"email"}
        placeholder={"Enter your Email"}
      />
    </>
  );
};

export default EmailInputField;
