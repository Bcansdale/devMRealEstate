import { useEffect, useRef, useState } from "react";
import './App.css'
import Banner from "./header/MainBanner.jsx";
import StickyNavbar from "./header/NavBar.jsx";
import MainProperties from "./properties/MainProperties.jsx";
import Testimonials from "./testimonials/Testimonials.jsx";
import Footer from "./footer/Footer.jsx";
import Login from "./loginSignup/Login.jsx";
import SignUp from "./loginSignup/SignUp.jsx";
import DetailProperty from "./properties/DetailProperty.jsx";
import UserSaves from "./userSaves/userSaves.jsx";


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
      <>
          {/*<StickyNavbar handleLoginClick={handleLoginClick} handleSignupClick={handleSignupClick}/>*/}
          {/*<Login isShowLogin={isShowLogin}/>*/}
          {/*<SignUp isShowSignup={isShowSignup}/>*/}
          {/*<Banner/>*/}
          {/*<MainProperties/>*/}
          {/*<Testimonials/>*/}
          {/*<Footer/>*/}
          {/*<DetailProperty />*/}
          <UserSaves />
      </>
  )
}

export default App
