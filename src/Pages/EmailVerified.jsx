import { useNavigate, useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";

export const EmailVerified = () => {
  const [validUrl, setValidUrl] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/auth/users/${params.id}/verify/${params.token}`
    )
      .then((res) => res.json())
      .then((data) => {
        setValidUrl(true);
      })
      .catch((error) => {
        console.log(error);
        setValidUrl(false);
      });
  }, [params]);

  const navigate = useNavigate();
  return (
    <>
      {validUrl ? (
        <div
          className="confirmEmail d-flex flex-column justify-content-center align-items-center
    "
        >
          <div className="innerVerifiedContainer d-flex flex-column align-items-center">
            <Image
              src={
                "https://res.cloudinary.com/dogmqg8to/image/upload/v1678606109/AP%20Registration/tick_icon_bwppcs.png"
              }
              className={"img-fluid"}
            />
            <h3 className={"mt-2"}>Your account is verified!</h3>
            <p className={"mt-2"}>We're excited to welcome you!</p>
            <button
              onClick={() => navigate("/session/new")}
              className={"resendEmailBtn mt-2"}
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </>
  );
};
