import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import {
  IUser,
  IUserRequest,
  IUserUpdate,
} from "../interfaces/users/users.interfaces";
import { IUserLogin } from "../interfaces/login/login.interface";
import { IUserLoginResponse } from "../interfaces/login/login.interface";

interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  loginUser: (data: IUserLogin) => Promise<void>;
  registerUser: (data: IUserRequest) => Promise<void>;
  logout: () => void;
  changeEditProfileModal: () => void;
  showEditProfileModal: boolean;
  editUser: (data: IUserUpdate) => Promise<void>;
  loadUser: () => Promise<void>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const navigate = useNavigate();

  async function loginUser(data: IUserLogin) {
    try {
      const resp = await api.post<IUserLoginResponse>("/login", data);
      const response: IUserLoginResponse = resp.data;
      localStorage.setItem("@kontacts:TOKEN", response.token);
      localStorage.setItem("@kontacts:USERID", response.userId);
      toast.success("Login successful!");
      navigate("dashboard", { replace: true });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, check email and password entered");
    }
  }

  async function loadUser() {
    const token = localStorage.getItem("@kontacts:TOKEN");
    const userId = localStorage.getItem("@kontacts:USERID");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get<IUser>(`/users/${userId}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function registerUser(data: IUserRequest) {
    try {
      await api.post<IUser>("/users", data);
      toast.success("Account created successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, check the entered data and try again");
    }
  }

  async function editUser(data: IUserUpdate) {
    try {
      await api.patch<IUser>(`/users/${user?.id}`, data);
      toast.success("Profile user successfully updated!");
      loadUser();
      changeEditProfileModal();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, please try again later");
    }
  }

  const changeEditProfileModal = () => {
    setShowEditProfileModal(!showEditProfileModal);
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        registerUser,
        logout,
        changeEditProfileModal,
        editUser,
        showEditProfileModal,
        loadUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
