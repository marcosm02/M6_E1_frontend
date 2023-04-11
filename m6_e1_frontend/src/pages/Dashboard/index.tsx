import { StyledButton } from "../../styles/button";
import { StyledText } from "../../styles/typography";
import { StyledDivDashboard } from "./style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { IUserContext } from "../../contexts/UserContext";
import { ContactContext } from "../../contexts/ContactsContext";
import { IContactContext } from "../../contexts/ContactsContext";
import { ModalAddContact } from "../../components/ModalAddContact";
import { ModalEditContact } from "../../components/ModalEditContacts";
import { ModalEditProfile } from "../../components/ModalEditProfile";

export const Dashboard = () => {
  const {
    user,
    loadUser,
    logout,
    changeEditProfileModal,
    showEditProfileModal,
  }: IUserContext = useContext(UserContext);
  const {
    showAddModal,
    showEditModal,
    changeAddModal,
    changeEditModal,
    userContacts,
    loadContacts,
  }: IContactContext = useContext(ContactContext);

  useEffect(() => {
    loadUser();
    loadContacts();
  }, []);

  return (
    <>
      {user && (
        <StyledDivDashboard>
          <header>
            <div className="header__container">
              <StyledText textType="logo" textColor="primary" tag="h1">
                Kontacts
              </StyledText>

              <StyledButton buttonType="medium" onClick={() => logout()}>
                Logout
              </StyledButton>
            </div>
          </header>
          <div className="perfilBox">
            <div className="perfilBox__container">
              <div className="perfilBox__info">
                <StyledText textType="title" textColor="white" tag="h2">
                  {user?.name}
                </StyledText>

                <StyledText textType="headline" textColor="grey" tag="p">
                  Email: {user?.email}
                </StyledText>

                <StyledText textType="headline" textColor="grey" tag="p">
                  Phone:{" "}
                  {`(${user?.telephone.slice(0, 2)}) ${user?.telephone.slice(
                    2,
                    7
                  )}-${user?.telephone.slice(7)}`}
                </StyledText>
              </div>
              <div>
                <StyledButton
                  buttonType="defaultPrimaryInverted"
                  onClick={changeEditProfileModal}
                >
                  Edit Profile
                </StyledButton>
              </div>
            </div>
          </div>
          <div className="contacts">
            <div className="contacts__container">
              <div className="contactsTitle">
                <StyledText textType="title" textColor="white" tag="h3">
                  Contacts
                </StyledText>
                <StyledButton buttonType="medium" onClick={changeAddModal}>
                  +
                </StyledButton>
              </div>
              <div className="contactsBox">
                <ul>
                  <li key={0} className="listTitles">
                    <StyledText textType="title" textColor="white" tag="h2">
                      Name
                    </StyledText>
                    <StyledText textType="title" textColor="white" tag="h2">
                      Email
                    </StyledText>
                    <StyledText textType="title" textColor="white" tag="h2">
                      Phone
                    </StyledText>
                  </li>

                  {!userContacts ? (
                    <StyledText textType="title" textColor="white" tag="h3">
                      There are no registered contacts
                    </StyledText>
                  ) : (
                    userContacts!.map((element) => (
                      <li
                        key={element?.id}
                        id={element?.id}
                        onClick={() => changeEditModal(element)}
                      >
                        <StyledText textType="title" textColor="white" tag="h3">
                          {element?.name}
                        </StyledText>
                        <StyledText
                          textType="headline"
                          textColor="grey"
                          tag="p"
                        >
                          {element?.email}
                        </StyledText>
                        <StyledText
                          textType="headline"
                          textColor="grey"
                          tag="p"
                        >
                          {`(${element?.telephone.slice(
                            0,
                            2
                          )}) ${element?.telephone.slice(
                            2,
                            7
                          )}-${element?.telephone.slice(7)}`}
                        </StyledText>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
          {showAddModal && <ModalAddContact />}
          {showEditModal && <ModalEditContact />}
          {showEditProfileModal && <ModalEditProfile />}
        </StyledDivDashboard>
      )}
    </>
  );
};
