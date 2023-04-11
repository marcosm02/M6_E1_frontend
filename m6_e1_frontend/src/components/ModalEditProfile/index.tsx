import { StyledText } from "../../styles/typography";
import { StyledModalEdit } from "./style";
import { StyledInput } from "../../styles/input";
import { StyledButton } from "../../styles/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { IUserContext } from "../../contexts/UserContext";
import { UserContext } from "../../contexts/UserContext";
import { IUser } from "../../interfaces/users/users.interfaces";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  telephone: yup.string().required("Telephone is required"),
});

export const ModalEditProfile = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  const { user, changeEditProfileModal, editUser }: IUserContext =
    useContext(UserContext);

  return (
    <StyledModalEdit>
      <div className="modalBox">
        <div className="modalBox__title">
          <StyledText textType="title" textColor="white" tag="h3">
            Profile details
          </StyledText>
          <button onClick={changeEditProfileModal}>X</button>
        </div>
        <div className="modalBox__form">
          <form onSubmit={handleSubmit(editUser)}>
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
              placeholder="Enter the name"
              defaultValue={user?.name}
              {...register("name")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.name?.message}
            </StyledText>

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
              placeholder="Enter the email"
              defaultValue={user?.email}
              {...register("email")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.email?.message}
            </StyledText>

            <StyledText
              textType="label"
              textColor="white"
              tag="label"
              htmlFor="telephone"
            >
              Phone
            </StyledText>
            <StyledInput
              type="text"
              id="telephone"
              placeholder="Enter the phone"
              defaultValue={user?.telephone}
              {...register("telephone")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.telephone?.message}
            </StyledText>

            <div className="buttonBox">
              <StyledButton
                buttonType="defaultPrimary"
                type="submit"
                id="btnSaveAlt"
              >
                Save editions
              </StyledButton>
            </div>
          </form>
        </div>
      </div>
    </StyledModalEdit>
  );
};
