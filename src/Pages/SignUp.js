import EmailInputField from "../Components/EmailInputField";
import PasswordInputField from "../Components/PasswordInputField";
import Button from "../Components/Button";
import ImageLogins from "../Components/Image";

const SignUp = () => {
  return (
    <section className={"container signUpSection mt-5"}>
      <h1 className={"fontFamily text-center"}>Create Account</h1>
      <EmailInputField />
      <PasswordInputField />
      <Button text={"Sign Up"} />
      <p className={"text-center mb-5"}>or</p>
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
    </section>
  );
};

export default SignUp;
