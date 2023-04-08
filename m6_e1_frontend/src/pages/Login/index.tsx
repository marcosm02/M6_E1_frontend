import { StyledButton } from "../../styles/button";
import { StyledInput } from "../../styles/input";
import { StyledText } from "../../styles/typography";
import { StyledDivLogin } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { IUserContext } from "../../contexts/UserContext";
import { IUserLogin } from "../../interfaces/login/login.interface";

const schema = yup.object({
  email: yup
    .string()
    .email("It must be a valid email")
    .required("Enter a valid email"),
  password: yup.string().required("Enter password to login"),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  const { loginUser }: IUserContext = useContext(UserContext);

  return (
    <StyledDivLogin>
      <StyledText textType="logo" textColor="primary" tag="h1">
        Kontacts
      </StyledText>
      <div className="loginBox">
        <form onSubmit={handleSubmit(loginUser)}>
          <StyledText textType="title" textColor="white" tag="h2">
            Login
          </StyledText>

          <div className="formBox">
            <StyledText
              textType="label"
              textColor="white"
              tag="label"
              htmlFor="email"
            >
              Email
            </StyledText>

            <StyledInput
              type="email"
              id="email"
              placeholder="Type your e-mail"
              {...register("email")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.email?.message}
            </StyledText>
          </div>

          <div className="formBox">
            <StyledText
              textType="label"
              textColor="white"
              tag="label"
              htmlFor="password"
            >
              Password
            </StyledText>

            <StyledInput
              type="password"
              id="password"
              placeholder="Type your password"
              {...register("password")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.password?.message}
            </StyledText>
          </div>

          <StyledButton buttonType="defaultPrimary" type="submit">
            Sign in
          </StyledButton>
        </form>

        <div className="registerBox">
          <StyledText textType="headline" textColor="grey" tag="small">
            Don't have an account yet?
          </StyledText>

          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </StyledDivLogin>
  );
};
