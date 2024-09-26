import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = {
    user: null,
    isAuthenticated: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "user/session":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "user/signup":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "user/login":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "admin/login":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "user/logout":
            return {
                ...state,
                user: initialState.user,
                isAuthenticated: initialState.isAuthenticated,
            };
        default:
            throw new Error("Unknown action");
    }
}

function AuthProvider({ children }) {
    const [{ user, isAuthenticated }, dispatch] = useReducer(
        reducer,
        initialState,
        undefined,
    );

    async function sessionCheck() {
        const res = await axios.get("/api/auth/session-check");

        if (res.data.success) {
            dispatch({
                type: "user/session",
                payload: res.data.userId,
            });
        }

        return res;
    }

    async function signup(firstname, lastname, username, password)  {
        const res = await axios.post("/api/auth/signup", {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
            })
                if (res.data.success) {
                    dispatch({ type: "user/signup", payload: res.data });
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
        }

        return res;
    }

    async function logout() {
        const res = await axios.get("/api/auth/logout");

        if (res.data.success) {
            dispatch({
                type: "user/logout",
            });
        }

        return res;
    }

    async function isAdmin() {
        const res = await axios.get("/api/auth/isAdmin");
        return res;
    }

    return (
        <AuthContext.Provider
            value={{ user, isAuthenticated, signup, login, logout, sessionCheck, isAdmin }}
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
