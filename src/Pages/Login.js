import Image from "../Components/Image";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import EmailInputField from "../Components/EmailInputField";
import PasswordInputField from "../Components/PasswordInputField";
import CheckBoxInputField from "../Components/CheckBoxInputField";
import ImageLogins from "../Components/Image";

const Login = () => {
  return (
    <section className={"container loginSection"}>
      <h1 className={"fontFamily text-center"}>
        Welcome Back Steven!!
        <span>
          <img
            className={"img-fluid"}
            src={
              "https://res.cloudinary.com/dogmqg8to/image/upload/v1675211691/Hakika%20Ecommerce/wave_uk2quo.png"
            }
            alt={"waving hand"}
          />
        </span>
      </h1>
      <p className={"text-center"}>Log in with</p>
      <div className={"d-flex justify-content-around"}>
        <ImageLogins
          text={"Google"}
          src={
            "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203177/Hakika%20Ecommerce/google_1_wbwham.png"
          }
          alt={"Google"}
        />
        <ImageLogins
          src={
            "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203053/Hakika%20Ecommerce/facebook_1_axdlxj.png"
          }
          text={"Facebook"}
        />
      </div>
      <p className={"text-center"}>Or continue with</p>
      <form className={"d-flex flex-column"}>
        <div>
          <EmailInputField />
        </div>
        <div>
          <PasswordInputField />
          <Link to={"/"} className={"forgotPassword"}>
            Forgot Password?
          </Link>
          <div className={"d-flex"}>
            <div>
              <CheckBoxInputField />
            </div>
            <span>Remember Me</span>
          </div>
        </div>
        <Button text={"Login"} />
      </form>
      <p className={"text-center"}>
        Don't have any account?{" "}
        <Link to={"/"} style={{ textDecoration: "none", color: "#F2994A" }}>
          Join Us
        </Link>
      </p>
    </section>
  );
};

export default Login;
