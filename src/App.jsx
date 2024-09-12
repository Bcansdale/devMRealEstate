
import './App.css'
import Banner from "./header/MainBanner.jsx";
import StickyNavbar from "./header/NavBar.jsx";
import MainProperties from "./properties/MainProperties.jsx";
import Testimonials from "./testimonials/Testimonials.jsx";
import Footer from "./footer/Footer.jsx";

function App() {

  return (
    <>
        <StickyNavbar />
        <Banner />
        <MainProperties />
        <Testimonials />
        <Footer />
    </>
  )
}

export default App
