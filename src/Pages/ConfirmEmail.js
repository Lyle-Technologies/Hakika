import { Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ConfirmEmail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  return (
    <div
      className={
        "d-flex flex-column align-items-center justify-content-center confirmEmail"
      }
    >
      <Image
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1690481295/mail-download_np8jyw.gif"
        }
        width={300}
      />
      <div className={"mt-3 p-4 text-center"}>
        <h3 className={"font-weight-bold"}>Confirm your email address</h3>
        <p>We sent a confirmation email to:</p>
        <p className={"bold"}>{email}</p>
        <p>Check your email and click on the confirmation link to continue</p>
      </div>
      <button className={"resendEmailBtn"}>Resend email</button>
    </div>
  );
};

export default ConfirmEmail;
