import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  SetStateAction,
} from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import {
  IContact,
  IContactRequest,
} from "../interfaces/contacts/contacts.interfaces";

interface IContactProviderProps {
  children: ReactNode;
}

export interface IContactContext {
  addContact: (data: IContactRequest) => Promise<void>;
  showAddModal: boolean;
  showEditModal: boolean;
  changeAddModal: () => void;
  changeEditModal: (data: IContact) => void;
  closeEditModal: () => void;
  clickedContact: IContact | null;
  setClickedContact: React.Dispatch<SetStateAction<IContact | null>>;
  deleteContact: (id: string) => Promise<void>;
  editContact: (data: IContact) => Promise<void>;
  userContacts: IContact[] | null;
  loadContacts: () => Promise<void>;
}

export const ContactContext = createContext<IContactContext>(
  {} as IContactContext
);

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [clickedContact, setClickedContact] = useState<IContact | null>(null);
  const [userContacts, setUserContacts] = useState<IContact[] | null>(null);

  const userId = localStorage.getItem("@kontacts:USERID");

  useEffect(() => {}, [showAddModal, showEditModal, clickedContact]);

  async function addContact(data: IContactRequest) {
    try {
      await api.post(`/users/${userId}/contacts`, data);
      toast.success("Contact successfully added!");
      loadContacts();
      changeAddModal();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, check the information you sent");
    }
  }

  async function loadContacts() {
    const token = localStorage.getItem("@kontacts:TOKEN");
    const userId = localStorage.getItem("@kontacts:USERID");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get<IContact[]>(`/users/${userId}/contacts`);
      setUserContacts(data);
    } catch (err) {
      console.log(err);
    }
  }

  const changeAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const changeEditModal = (data: IContact) => {
    setClickedContact(data);
    setShowEditModal(!showEditModal);
  };

  const closeEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  async function deleteContact(id: string) {
    try {
      await api.delete(`/users/${userId}/contacts/${id}`);
      toast.success("Contact deleted successfully");
      loadContacts();
      closeEditModal();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, please try again later");
    }
  }

  async function editContact(data: IContact) {
    try {
      await api.patch(`/users/${userId}/contacts/${clickedContact?.id}`, data);
      toast.success("Contact successfully updated!");
      loadContacts();
      closeEditModal();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, please try again later");
    }
  }

  return (
    <ContactContext.Provider
      value={{
        addContact,
        showAddModal,
        showEditModal,
        changeAddModal,
        changeEditModal,
        closeEditModal,
        clickedContact,
        setClickedContact,
        deleteContact,
        editContact,
        userContacts,
        loadContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
