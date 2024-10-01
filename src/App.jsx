import { useState } from "react";
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
import { AuthProvider} from "./context/AuthContext.jsx";


function App() {

    const [activeForm, setActiveForm] = useState(null);

    function handleClickShowForm(e, formName) {
        e.preventDefault();
        setActiveForm(formName)
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
                    <SignUp handleClickShowForm={handleClickShowForm}
                    handleCloseForm={handleCloseForm}/>
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
                    <Route path="/admin" element={<AdminPortal />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App
