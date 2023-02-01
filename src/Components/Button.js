const Button = ({ text }) => {
  return (
    <button className={"btn themeColor text-white p-3 w-100 mt-3"}>
      {text}
    </button>
  );
};

export default Button;
