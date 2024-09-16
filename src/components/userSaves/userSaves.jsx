import React from 'react';
import StickyNavbar from "/src/components/header/NavBar.jsx";
import Footer from "../footer/Footer.jsx";
import MainProperties from "../properties/MainProperties.jsx";
import bannerImage from "/public/background-dark2.png";

function UserSaves() {
    return (
        <>
            <StickyNavbar/>
            <MainProperties/>
            <div className='lg:flex flex-col h-[80vh]'>
                <div className="h-[80vh] text-white text-center grid bg-cover"
                     style={{backgroundImage: `url(${bannerImage})`}}>
                    <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-60"></div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default UserSaves;