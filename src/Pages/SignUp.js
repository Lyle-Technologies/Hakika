import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ButtonWithImage from "../Components/ButtonWithImage";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const respondedData = await response.json();

      if (response.ok) {
        toast.success(respondedData.message);
        navigate(
          `/users/email_verification_required?email=${encodeURIComponent(
            data.email
          )}`
        );
        reset();
      } else {
        toast.error(respondedData.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error submitting form", error);
    } finally {
      setIsLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className={"container signUpSection p-4 mt-4"}>
      <div>
        <Toaster
          position={"top-center"}
          toastOptions={{
            duration: 1000,
            style: { background: "#363636", color: "white" },
          }}
        />
      </div>
      <h1 className={"fontFamily text-center"}>Sign up to Hakika Store</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className={"mb-3"}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type={"text"}
            placeholder={"Username"}
            {...register("username")}
            disabled={isLoading}
          />
        </Form.Group>
        <Form.Group className={"mb-3"}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type={"email"}
            placeholder={"you@example.com"}
            {...register("email")}
            disabled={isLoading}
          />
        </Form.Group>
        <Form.Group className={"mb-3"} id={"passwordContainer"}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder={"at least 8 characters"}
            disabled={isLoading}
          />
          <div onClick={togglePasswordVisibility} className={"passwordIcon"}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </Form.Group>
        <button type={"submit"} className={"signInBtn"} disabled={isLoading}>
          {isLoading ? <ClipLoader size={19} color={"white"} /> : "Sign Up"}
        </button>

        <div className={"d-flex justify-content-between mt-1"}>
          <span className={"borders"}></span>
          <p className={"text-center mb-1"}>or</p>
          <div className={"borders"}></div>
        </div>
      </Form>
      <ButtonWithImage
        text={"Sign Up with Google"}
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203177/Hakika%20Ecommerce/google_1_wbwham.png"
        }
        alt={"Google"}
      />

      <p className={"text-center alreadyHaveAccount"}>
        Already have an account? <Link to={"/session/new"}>Login</Link>
      </p>
    </section>
  );
};

export default SignUp;
