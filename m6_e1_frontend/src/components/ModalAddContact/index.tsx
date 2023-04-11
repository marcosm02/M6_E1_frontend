import { StyledText } from "../../styles/typography";
import { StyledModalAdd } from "./style";
import { StyledInput } from "../../styles/input";
import { StyledButton } from "../../styles/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactsContext";
import { IContactContext } from "../../contexts/ContactsContext";
import { IContact } from "../../interfaces/contacts/contacts.interfaces";

const schema = yup.object({
  name: yup.string().required("Contact name is required"),
  email: yup
    .string()
    .email("Enter a valid email for the contact")
    .required("Contact email is required"),
  telephone: yup.string().required("Contact telephone is required"),
});

export const ModalAddContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(schema),
  });

  const { addContact, changeAddModal }: IContactContext =
    useContext(ContactContext);

  return (
    <StyledModalAdd>
      <div className="modalBox">
        <div className="modalBox__title">
          <StyledText textType="title" textColor="white" tag="h3">
            Register contact
          </StyledText>
          <button onClick={changeAddModal}>X</button>
        </div>
        <div className="modalBox__form">
          <form onSubmit={handleSubmit(addContact)}>
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
              {...register("name")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.name?.message}
            </StyledText>

            <StyledText
              textType="label"
              textColor="white"
              tag="label"
              htmlFor="name"
            >
              Email
            </StyledText>
            <StyledInput
              type="text"
              id="name"
              placeholder="Enter the email"
              {...register("email")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.email?.message}
            </StyledText>

            <StyledText
              textType="label"
              textColor="white"
              tag="label"
              htmlFor="name"
            >
              Phone
            </StyledText>
            <StyledInput
              type="text"
              id="name"
              placeholder="Enter the phone"
              {...register("telephone")}
            />
            <StyledText textType="label" textColor="negative" tag="small">
              {errors.telephone?.message}
            </StyledText>

            <StyledButton buttonType="defaultPrimary" type="submit">
              Register contact
            </StyledButton>
          </form>
        </div>
      </div>
    </StyledModalAdd>
  );
};
