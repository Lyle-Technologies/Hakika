const ButtonWithImage = ({ src, alt, text }) => {
  const styles = {
    width: "20px",
    marginRight: "17px",
  };

  return (
    <button
      className={
        "d-flex align-items-center justify-content-center signUpWithImages p-3 mt-3"
      }
    >
      <img style={styles} className={"img-fluid"} src={src} alt={alt} />
      <span>{text}</span>
    </button>
  );
};

export default ButtonWithImage;
