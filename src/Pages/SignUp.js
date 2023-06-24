import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const SignUp = () => {
  const { handleSubmit, control, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={"container signUpSection mt-5"}>
      <h1 className={"fontFamily text-center"}>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Email Address</p>
        <Controller
          name="email"
          control={control}
          defaultValue={""}
          render={({ field: { onChange, value } }) => (
            <TextField
              required
              className="mb-5 w-100"
              value={value}
              inputRef={onChange}
              onChange={(e) => onChange(e.target.value)}
              label="Email"
              placeholder="Enter your email"
            />
          )}
        />
        <p>Password</p>
        <Controller
          name="password"
          control={control}
          defaultValue={""}
          render={({ field: { onChange, value } }) => (
            <InputAdornment position="end">
              <IconButton></IconButton>
            </InputAdornment>
          )}
        />
        <button
          className="w-100 themeColor text-white fw-bold postAddBtn"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      {/* <EmailInputField /> */}
      {/* <PasswordInputField /> */}
      {/* <Button text={"Sign Up"} /> */}
      <p className={"text-center mb-5"}>or</p>
      {/* <ImageLogins
        text={"Sign Up with Google"}
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203177/Hakika%20Ecommerce/google_1_wbwham.png"
        }
        alt={"Google"}
      /> */}
      {/* <ImageLogins
        text={"Sign Up with Facebook"}
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1675203053/Hakika%20Ecommerce/facebook_1_axdlxj.png"
        }
        alt={"Facebook"}
      /> */}
    </section>
  );
};

export default SignUp;
