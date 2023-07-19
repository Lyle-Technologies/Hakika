import { Link } from "react-router-dom";

import ButtonWithImage from "../Components/ButtonWithImage";
import { Form } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className={"container signUpSection p-4 mt-4"}>
      <h2>Sign in to Hakika Store</h2>
      <div className={"d-flex justify-content-around"}>
        <ButtonWithImage
          text={"Sign in with Google"}
          src={
            "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203177/Hakika%20Ecommerce/google_1_wbwham.png"
          }
          alt={"Google"}
        />
      </div>
      <div className={"d-flex justify-content-between mt-4"}>
        <span className={"borders"}></span>
        <p className={"text-center mb-1"}>or sign in with email</p>
        <div className={"borders"}></div>
      </div>
      <Form>
        <Form.Group className={"mb-3"}>
          <Form.Label>Username or Email</Form.Label>
          <Form.Control type={"text"} placeholder={"Email ID / Username"} />
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
        <button type={"submit"} className={"signInBtn mt-4"}>
          Sign In
        </button>
      </Form>
      <p className={"text-center"}>
        Don't have any account?{" "}
        <Link
          to={"/signup/new"}
          style={{ textDecoration: "none", color: "#F2994A" }}
        >
          Join Us
        </Link>
      </p>
    </section>
  );
};

export default Login;
