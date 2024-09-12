import React from 'react';
import logo from '/public/devmLogo.png'

function Footer() {
    return (
        <>
            <footer className="bg-white rounded-lg shadow opacity-96">
                <div className="w-full mx-auto px-8 py-4">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <a href="#"
                           className="flex items-center mb-4 lg:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-24" alt="Logo"/>
                        </a>
                        <div className="flex text-[1rem] text-[#444445] lg:text-center">© 2023. DevM Real Estate™.</div>
                        <ul className="flex flex-wrap items-center mb-6 text-[1rem] font-medium text-[#444445] lg:mb-0">
                            <li>
                                <a href="#" className="hover:underline me-4 lg:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 lg:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 lg:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;