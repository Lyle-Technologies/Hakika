import { Form } from "react-bootstrap";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ImageLogins from "../Components/Image";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className={"container signUpSection"}>
      <h1 className={"fontFamily text-center"}>Create Account</h1>
      <Form.Group className={"mb-3"}>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type={"email"} placeholder={"Enter your email"} />
      </Form.Group>
      <Form.Group className={"mb-3"} id={"passwordContainer"}>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Enter your password"}
        />
        <div onClick={togglePasswordVisibility} className={"passwordIcon"}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
      </Form.Group>
      <button type={"submit"} className={"btn"}>
        Sign Up
      </button>

      <div className={"d-flex justify-content-between mt-5"}>
        <span className={"borders"}></span>
        <p className={"text-center mb-5"}>or</p>
        <div className={"borders"}></div>
      </div>
      <ImageLogins
        text={"Sign Up with Google"}
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203177/Hakika%20Ecommerce/google_1_wbwham.png"
        }
        alt={"Google"}
      />
      <ImageLogins
        text={"Sign Up with Facebook"}
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203053/Hakika%20Ecommerce/facebook_1_axdlxj.png"
        }
        alt={"Facebook"}
      />
      <p className={"text-center alreadyHaveAccount"}>
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </section>
  );
};

export default SignUp;
