import { StyledButton } from "../../styles/button";
import { StyledInput } from "../../styles/input";
import { StyledText } from "../../styles/typography";
import { StyledDivRegister } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { IUserContext } from "../../contexts/UserContext";
import { IUserRequest } from "../../interfaces/users/users.interfaces";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("It must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Must contain at least one capital letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/(\d)/, "Must contain at least one number")
    .matches(/(\W)|_/, "Must contain a special character")
    .matches(/.{8,}/, "Must be at least 8 digits")
    .required("Password is required"),
  telephone: yup.string().required("Phone is required"),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({
    resolver: yupResolver(schema),
  });

  const { registerUser }: IUserContext = useContext(UserContext);

  return (
    <StyledDivRegister>
      <div className="logoBox">
        <StyledText textType="logo" textColor="primary" tag="h1">
          Kontacts
        </StyledText>

        <Link to="/">Return</Link>
      </div>
      <div className="registerBox">
        <div className="titleBox">
          <StyledText textType="title" textColor="white" tag="h2">
            Create your account
          </StyledText>
        </div>

        <form onSubmit={handleSubmit(registerUser)}>
          <div className="formBox">
            <StyledText
              textType="label"
              textColor="white"
              tag="label"
              htmlFor="name"
            >
              Name
            </StyledText>

            <StyledInput
              type="text"
              id="name"
              placeholder="Enter your name here"
              {...register("name")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.name?.message}
            </StyledText>
          </div>

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
              type="text"
              id="email"
              placeholder="Enter your email here"
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
              placeholder="Enter your password here"
              {...register("password")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.password?.message}
            </StyledText>
          </div>

          <div className="formBox">
            <StyledText
              textType="label"
              textColor="white"
              tag="label"
              htmlFor="bio"
            >
              Telephone
            </StyledText>

            <StyledInput
              type="text"
              id="bio"
              placeholder="Enter your phone here"
              {...register("telephone")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.telephone?.message}
            </StyledText>
          </div>

          <StyledButton buttonType="defaultPrimary" type="submit">
            Register
          </StyledButton>
        </form>
      </div>
    </StyledDivRegister>
  );
};
