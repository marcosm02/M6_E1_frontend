import { StyledText } from "../../styles/typography";
import { StyledModalEdit } from "./style";
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

export const ModalEditContact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(schema),
  });

  const {
    editContact,
    closeEditModal,
    clickedContact,
    deleteContact,
  }: IContactContext = useContext(ContactContext);

  return (
    <StyledModalEdit>
      <div className="modalBox">
        <div className="modalBox__title">
          <StyledText textType="title" textColor="white" tag="h3">
            Contact details
          </StyledText>
          <button onClick={closeEditModal}>X</button>
        </div>
        <div className="modalBox__form">
          <form onSubmit={handleSubmit(editContact)}>
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
              defaultValue={clickedContact?.name}
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
              defaultValue={clickedContact?.email}
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
              defaultValue={clickedContact?.telephone}
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
              <StyledButton
                buttonType="defaultGrey"
                id="btnDelete"
                type="button"
                onClick={() => deleteContact(clickedContact!.id)}
              >
                Delete
              </StyledButton>
            </div>
          </form>
        </div>
      </div>
    </StyledModalEdit>
  );
};
