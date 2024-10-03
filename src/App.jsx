import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Banner from "./components/header/MainBanner.jsx";
import StickyNavbar from "./components/header/NavBar.jsx";
import MainProperties from "./components/properties/MainProperties.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./components/loginSignup/Login.jsx";
import SignUp from "./components/loginSignup/SignUp.jsx";
import DetailProperty from "./components/properties/DetailProperty.jsx";
import UserSaves from "./components/userSaves/userSaves.jsx";
import AdminPortal from "./components/portalAdmin/AdminPortal.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [activeForm, setActiveForm] = useState(null);

    function handleClickShowForm(e, formName) {
        e.preventDefault();
        setActiveForm(formName);
    }
    function handleCloseForm() {
        setActiveForm(null);
    }

    return (
        <AuthProvider>
            <BrowserRouter>
                <StickyNavbar
                    handleClickShowForm={handleClickShowForm}
                    handleCloseForm={handleCloseForm}
                />
                {activeForm === "user/login" ? (
                    <Login
                        handleClickShowForm={handleClickShowForm}
                        handleCloseForm={handleCloseForm}
                    />
                ) : (
                    ""
                )}
                {activeForm === "user/signup" ? (
                    <SignUp
                        handleClickShowForm={handleClickShowForm}
                        handleCloseForm={handleCloseForm}
                    />
                ) : (
                    ""
                )}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Banner />
                                <MainProperties />
                                <Testimonials />
                            </>
                        }
                    />
                    <Route path="/property/:propertyId" element={<DetailProperty />} />
                    <Route path="/saves" element={<UserSaves />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <AdminPortal />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

function ProtectedRoute({ children }) {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const authToken = localStorage.getItem("authToken") ?? null;

    const checkAuth = async () => {
        setIsLoading(true);
        try {
            const res = await axios.post("/api/auth/token/verify", {
                token: authToken,
            });

            if (res.data.success) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (e) {
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    if (isLoading) {
        return <div className="">Loading...</div>;
    }

    // return isAuthenticated ? children : <>isAuthenticated: {isAuthenticated}</>;
    return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default App;
