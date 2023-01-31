const Image = ({ src, alt }) => {
  const styles = {
    width: "25%",
    maxWidth: "100%",
  };

  return <img style={styles} className={"img-fluid"} src={src} alt={alt} />;
};

export default Image;
