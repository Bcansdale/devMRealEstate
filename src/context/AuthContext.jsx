import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  role: "",
  isAdmin: false,
  adminAccessCode: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "user/session":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "user/signup":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        role: action.role,
        adminAccessCode: action.adminAccessCode,
      };
    case "user/login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "admin/login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isAdmin: true,
      };
    case "user/logout":
      return {
        ...state,
        user: initialState.user,
        isAuthenticated: initialState.isAuthenticated,
        role: initialState.role,
        adminAccessCode: initialState.adminAccessCode,
      };
    default:
      throw new Error("Unknown action");
  }
}
function AuthProvider({ children }) {
  const [
    { user, isAuthenticated, setIsAuthenticated, role, adminAccessCode },
    dispatch,
  ] = useReducer(reducer, initialState, undefined);

  async function verifyToken() {
    const authToken = localStorage.getItem("authToken");
    const res = await axios.post("/api/auth/token/verify", {
      token: authToken === null ? "" : authToken,
    });

    if (res.data.success) {
      dispatch({
        type: "user/session",
        payload: res.data.userId,
      });
    }
    return res;
  }
  async function signup(
    firstname,
    lastname,
    username,
    password,
    role,
    adminAccessCode,
  ) {
    const res = await axios.post("/api/auth/signup", {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      role: role,
      adminAccessCode: adminAccessCode,
    });

    if (res.data.success) {
      dispatch({
        type: "user/signup",
        payload: res.data,
        role: role,
        adminAccessCode: adminAccessCode,
      });
      localStorage.setItem("authToken", res.data.authToken);
    }
    return res;
  }

  async function login(username, password) {
    const res = await axios.post("/api/auth/login", {
      username: username,
      password: password,
    });

    if (res.data.success) {
      dispatch({ type: "user/login", payload: res.data });
      localStorage.setItem("authToken", res.data.authToken);
    }
    return res;
  }

  async function logout() {
    const res = await axios.get("/api/auth/logout");

    if (res.data.success) {
      dispatch({ type: "user/logout" });
      localStorage.clear();
    }
    return res;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        setIsAuthenticated,
        role,
        adminAccessCode,
        signup,
        login,
        logout,
        verifyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");

  return context;
}
export { AuthProvider, useAuth };
