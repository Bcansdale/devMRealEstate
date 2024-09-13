import React from 'react';
import logo from '/public/devmLogo.png'

function Footer() {
    return (
        <>
            <footer className="bg-white rounded-lg shadow opacity-96">
                <div className="w-full mx-auto px-8 py-4">
                    <div className="xl:flex xl:items-center xl:justify-between">
                        <a href="#"
                           className="flex items-center mb-4 lg:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-24" alt="Logo"/>
                        </a>
                        <div className="flex flex-col text-[1rem] lg:ml-28 text-[#444445] xl:text-center">
                            <p>© 2023. DevM Real Estate™.</p>
                            <p>Designed By: Brandon Cansdale</p>
                        </div>
                        <ul className="flex flex-wrap items-center mb-6 text-[1rem] font-medium text-[#444445] lg:mb-0">
                            <div className="flex flex-wrap items-center">
                            <li className='p-2'>
                                <h2 className='text-[1.25rem] pb-2 '>About Us:</h2>
                                <ul className="font-light">
                                    <li>
                                        <p>123 W 800 N</p>
                                    </li>
                                    <li>
                                        <p>Salt Lake City, UT</p>
                                    </li>
                                    <li>
                                        <p>239-222-3333</p>
                                    </li>
                                </ul>
                            </li>
                            <li className='p-2'>
                                <h2 className='text-[1.25rem] pb-2'>Hours:</h2>
                                <ul className="font-light">
                                    <li>
                                        <p>Monday - Friday</p>
                                    </li>
                                    <li>
                                        <p>09:00am - 07:00pm</p>
                                    </li>
                                    <li>
                                        <p>Sat - Sun - Closed</p>
                                    </li>
                                </ul>
                            </li>
                            <li className='p-2'>
                                <h2 className='text-[1.25rem] pb-2'>Links:</h2>
                                <ul className="font-light">
                                    <li>
                                        <a href="#" className="hover:underline me-4 lg:me-6">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline me-4 lg:me-6">Licensing</a>
                                    </li>
                                    <li>
                                    <a href="#" className="hover:underline">Contact</a>
                                    </li>
                                </ul>
                            </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;