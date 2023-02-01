import Image from "../Components/Image";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import EmailInputField from "../Components/EmailInputField";
import PasswordInputField from "../Components/PasswordInputField";
import CheckBoxInputField from "../Components/CheckBoxInputField";

const Login = () => {
  return (
    <section className={"container loginSection"}>
      <h1 className={"fontFamily"}>Welcome Back Steven!!</h1>
      <p className={"text-center"}>Log in with</p>
      <div className={"d-flex justify-content-around"}>
        <div className={"shadow p-3 rounded"}>
          <Image
            src={
              "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203177/Hakika%20Ecommerce/google_1_wbwham.png"
            }
            alt={"Google"}
          />
          <span style={{ marginLeft: "10px" }}>Google</span>
        </div>
        <div className={"shadow p-2 rounded"}>
          <Image
            src={
              "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203053/Hakika%20Ecommerce/facebook_1_axdlxj.png"
            }
          />
          <span style={{ marginLeft: "10px" }}>Facebook</span>
        </div>
      </div>
      <p className={"text-center"}>Or continue with</p>
      <form className={"d-flex flex-column"}>
        <div>
          <label className={"fontFamily mb-3"}>Email address</label>
          <br />
          <EmailInputField />
        </div>
        <div>
          <label className={"fontFamily mb-3"}>Password</label>
          <br />
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
