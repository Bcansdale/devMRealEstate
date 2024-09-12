import React from "react";
import {
    Navbar,
} from "@material-tailwind/react";
import {BsHouseHeart} from "react-icons/bs";
import {GrUserAdmin} from "react-icons/gr";
import { Carousel } from "@material-tailwind/react";



function DetailProperty() {

    const data = [
        {
            imageLink:
                "https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp",
        },
        {
            imageLink:
                "https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp",
        },
        {
            imageLink:
                "https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp",
        },
        {
            imageLink:
                "https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp",
        },
    ];


    return (
        <>
        <div className="flex flex-col justify-center items-center bg-gray-800 opacity-90">
            <div className="w-[80vw] shadow-2xl shadow-[#444445] bg-[#fff] ">
                <Navbar className="top-0 z-10 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-6">
                    <div className="flex items-center justify-between text-[#444445]">
                        <div className="mr-4 cursor-pointer items-center justify-center">
                            <p>Back to Properties</p>
                        </div>
                        <div className="flex items-center gap-4">
                            {/*<div className="mr-4 hidden lg:block">{navList}</div>*/}
                            <button className="mr-5"><BsHouseHeart size={'1.4rem'}/></button>
                            <button className="mr-5"><GrUserAdmin size={'1.4rem'}/></button>
                        </div>
                    </div>
                </Navbar>
                <section className="flex flex-col h-screen bg-white">
                    <div className='grid m-2 gap-2 md:gap-2 md:ml-4 md:mr-4 lg:gap-2 lg:ml-4 lg:mr-4 xl:grid-cols-2 xl:gap-4 xl:ml-6 xl:mr-6'>
                        <Carousel
                            className="rounded-xl h-full"
                            navigation={({setActiveIndex, activeIndex, length}) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                    {new Array(length).fill("").map((_, i) => (
                                        <span
                                            key={i}
                                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                            }`}
                                            onClick={() => setActiveIndex(i)}
                                        />
                                    ))}
                                </div>
                            )}
                        >
                            <img
                                src="https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp"
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                        </Carousel>
                        <div className="grid grid-cols-2 gap-2">
                            {data.map(({imageLink}, index) => (
                                <div key={index}>
                                    <img
                                        className="h-40 max-w-full rounded-lg object-cover object-center md:h-60"
                                        src={imageLink}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
}

export default DetailProperty;