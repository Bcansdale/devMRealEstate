import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
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


function App() {
// Old code, not working
    // const [isShowLogin, setIsShowLogin] = useState(false)
    // const handleLoginClick = () => {
    //     setIsShowLogin((isShowLogin) => !isShowLogin)
    // }
    //
    // const [isShowSignup, setIsShowSignUp] = useState(false)
    // const handleSignupClick = () => {
    //     setIsShowSignUp((isShowSignup) => !isShowSignup)
    // }

    const [activeForm, setActiveForm] = useState(null);

    function handleClickShowForm(e, formName) {
        e.preventDefault();
        setActiveForm(formName)
    }
    function handleClickCloseForm() {
        setActiveForm(null);
    }

    return (
        <AuthProvider>
            <BrowserRouter>
                <StickyNavbar
                    handleClickShowForm={handleClickShowForm}
                    handleCloseForm={handleClickCloseForm}
                />
                {activeForm === "user/login" ? (
                    <Login
                        handleClickShowForm={handleClickShowForm}
                        handleCloseForm={handleClickCloseForm}
                    />
                ) : (
                    ""
                )}
                {activeForm === "user/signup" ? (
                    <SignUp handleClickShowForm={handleClickShowForm} />
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
                    <Route path="/detail" element={<DetailProperty />} />
                    <Route path="/saves" element={<UserSaves />} />
                    <Route path="/admin" element={<AdminPortal />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App
