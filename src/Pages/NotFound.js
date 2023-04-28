import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center p-5">
      <h3 className="mb-5 fontColor">Page Not Found</h3>
      <p className="text-center">
        The page you are looking for doesn't exist or has been moved
      </p>
      <Link to={"/"} className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
