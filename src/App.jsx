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


function App() {

    const [isShowLogin, setIsShowLogin] = useState(false)
    const handleLoginClick = () => {
        setIsShowLogin((isShowLogin) => !isShowLogin)
    }

    const [isShowSignup, setIsShowSignUp] = useState(false)
    const handleSignupClick = () => {
        setIsShowSignUp((isShowSignup) => !isShowSignup)
    }


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                  <>
                      <StickyNavbar handleLoginClick={handleLoginClick} handleSignupClick={handleSignupClick}/>
                      <Login isShowLogin={isShowLogin}/>
                      <SignUp isShowSignup={isShowSignup}/>
                      <Banner/>
                      <MainProperties/>
                      <Testimonials/>
                      <Footer/>
                  </>
              }/>
              {/*<Route path="/login" element={<Login/>}/>*/}
              {/*<Route path="/signup" element={<SignUp/>}/>*/}
              <Route path="/detail" element={<DetailProperty/>}/>
              <Route path="/saves" element={<UserSaves/>}/>
              <Route path="/admin" element={<AdminPortal/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
