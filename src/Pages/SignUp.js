import { Form } from "react-bootstrap";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ButtonWithImage from "../Components/ButtonWithImage";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className={"container signUpSection p-4 mt-4"}>
      <h1 className={"fontFamily text-center"}>Sign up to Hakika Store</h1>
      <Form>
        <Form.Group className={"mb-3"}>
          <Form.Label>Name</Form.Label>
          <Form.Control type={"text"} placeholder={"Enter your name"} />
        </Form.Group>
        <Form.Group className={"mb-3"}>
          <Form.Label>Username</Form.Label>
          <Form.Control type={"text"} placeholder={"Enter your username"} />
        </Form.Group>
        <Form.Group className={"mb-3"}>
          <Form.Label>Email</Form.Label>
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
        <button type={"submit"} className={"signInBtn"}>
          Sign Up
        </button>

        <div className={"d-flex justify-content-between mt-1"}>
          <span className={"borders"}></span>
          <p className={"text-center mb-1"}>or</p>
          <div className={"borders"}></div>
        </div>
        <ButtonWithImage
          text={"Sign Up with Google"}
          src={
            "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203177/Hakika%20Ecommerce/google_1_wbwham.png"
          }
          alt={"Google"}
        />
      </Form>

      <p className={"text-center alreadyHaveAccount"}>
        Already have an account? <Link to={"/session/new"}>Login</Link>
      </p>
    </section>
  );
};

export default SignUp;
