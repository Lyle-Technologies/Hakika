const Input = ({ type, id, name, placeholder }) => {
  const styles = {
    borderRadius: "8px",
    padding: "15px",
    borderColor: "grey",
    borderWidth: "1px",
    outline: "none",
    width: "100%",
    fontSize: "1.1rem",
  };

  return (
    <>
      <input
        style={styles}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
