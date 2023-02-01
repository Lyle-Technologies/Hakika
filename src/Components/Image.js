const ImageLogins = ({ src, alt, text }) => {
  const styles = {
    width: "15%",
    maxWidth: "100%",
  };

  return (
    <div className={"shadow p-3 rounded text-center"}>
      <img style={styles} className={"img-fluid"} src={src} alt={alt} />
      <span style={{ marginLeft: "10px" }}>{text}</span>
    </div>
  );
};

export default ImageLogins;
