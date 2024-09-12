import {useState, useEffect} from "react";
import './App.css'
import Banner from "./header/MainBanner.jsx";
import StickyNavbar from "./header/NavBar.jsx";
import MainProperties from "./properties/MainProperties.jsx";
import Testimonials from "./testimonials/Testimonials.jsx";
import Footer from "./footer/Footer.jsx";
import Login from "./loginSignup/Login.jsx";
import SignUp from "./loginSignup/SignUp.jsx";

function App() {

    const [isShowLogin, setIsShowLogin] = useState(false)
    const handleLoginClick = () => {
        setIsShowLogin((isShowLogin) => !isShowLogin)
    }

  return (
      <>
          <StickyNavbar handleLoginClick={handleLoginClick}/>
          <Login isShowLogin={isShowLogin}/>
          <Banner/>
          <MainProperties/>
          <Testimonials/>
          <Footer/>
          {/*<SignUp />*/}
      </>
  )
}

export default App
