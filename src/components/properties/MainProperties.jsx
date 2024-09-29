import {useState} from 'react';
import {HiOutlineHome} from "react-icons/hi2";
import {HiOutlineHomeModern} from "react-icons/hi2";
import {BsHouses} from "react-icons/bs";
import PropertyCard from "./PropertyCard.jsx";
import {Button} from "@material-tailwind/react";


function MainProperties() {
    const [listingsToShow, setListingsToShow] = useState(8); // initial number of listings to show
    const handleShowMore = () => {
        setListingsToShow(listingsToShow + 8); // increment the number of listings to show
    };


    return (
        <>
            <div className='grid justify-center'>
                <div
                    className="grid grid-cols-3 justify-center items-center mt-5">
                    <button><HiOutlineHome size={'5rem'} color="#444445" className="mx-7 md:mx-24 px-1 "/></button>
                    <button><HiOutlineHomeModern size={'5rem'} color="#444445" className="mx-7 md:mx-24 px-1 "/>
                    </button>
                    <button><BsHouses size={'5rem'} color="#444445" className="mx-7 md:mx-24 px-1 "/></button>
                </div>
                <div
                    className="grid grid-cols-3 justify-center items-center">
                    <button><p className="mx-10 md:mx-[80px] text-[1.2rem] text-[#444445]">Single Family</p></button>
                    <button><p className="mx-10 md:mx-[80px] text-[1.2rem] text-[#444445]">Town House</p></button>
                    <button><p className="mx-10 md:mx-[80px] text-[1.2rem] text-[#444445]">Multi-Family</p></button>
                </div>
            </div>
            <div>
                <section className="flex flex-col items-center bg-white">
                    <div
                        className="mt-10 mx-4 grid md:grid-cols-2 md:px-10 md:gap-8 xl:grid-cols-4 xl:gap-8 xl:ml-8 xl:mr-8">
                        {[...Array(listingsToShow).keys()].map((index) => (
                            <PropertyCard key={index} />
                        ))}
                    </div>
                    <div className="flex items-center justify-center m-5 mt-10">
                        <Button variant="outlined" className="px-10 text-[1rem] text-[#444445]" onClick={handleShowMore}>Show More listings</Button>
                    </div>
                </section>
            </div>
        </>
    );
}
export default MainProperties;