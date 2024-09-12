import React from 'react';
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsHouses } from "react-icons/bs";
import PropertyCard from "./PropertyCard.jsx";



function MainProperties() {
    return (
        <>
            <div className='flex justify-center items-center mt-5'>
                <button><HiOutlineHome size={'5rem'} color='#444445' className='mx-10 md:mx-24 px-1 ' /></button>
                <button><HiOutlineHomeModern size={'5rem'} color="#444445" className="mx-10 md:mx-24 px-1 "/></button>
                <button><BsHouses size={'5rem'} color="#444445" className="mx-10 md:mx-24 px-1 "/></button>
            </div>
            <div className='flex justify-center items-center'>
                <button><p className="mx-10 md:mx-[80px] text-[1.2rem] text-[#444445]">Single Family</p></button>
                <button><p className="mx-10 md:mx-[80px] text-[1.2rem] text-[#444445]">Town House</p></button>
                <button><p className="mx-10 md:mx-[80px] text-[1.2rem] text-[#444445]">Multi-Family</p></button>
            </div>
            <div>
                <section className="flex flex-col items-center bg-white">
                    {/*<h1 className="mt-10 text-[3rem] font-bold text-[#444445]">New Listings</h1>*/}
                    <div
                        className="mt-10 mx-4 grid md:grid-cols-2 md:px-10 md:gap-8 xl:grid-cols-4 xl:gap-8 xl:ml-8 xl:mr-8">
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                    </div>
                </section>
            </div>
        </>
    );
}

export default MainProperties;