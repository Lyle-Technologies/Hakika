const ImageLogins = ({ src, alt, text }) => {
  const styles = {
    width: "35px",
    height: "35px",
    maxWidth: "100%",
  };

  return (
    <div className={"p-3 text-center signUpWithImages"}>
      <img style={styles} className={"img-fluid"} src={src} alt={alt} />
      <span style={{ marginLeft: "10px" }}>{text}</span>
    </div>
  );
};

export default ImageLogins;
