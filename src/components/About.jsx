import React from 'react';
import bannerImage from '/src/assets/background-dark1.png';

function AboutUs() {
    return (
        <>
            <div className='flex flex-col h-[85vh]'>
                <div className="h-[80vh] text-white text-center grid bg-cover"
                     style={{backgroundImage: `url(${bannerImage})`}}>
                    <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-60"></div>
                    <div className="col-start-1 row-start-1 flex flex-col items-center justify-center mb-20">
                        <h1 className="text-4xl md:text-[5rem]">About Us</h1>
                    </div>
                </div>
                <div className="flex-grow p-12 text-[#444445] flex justify-center items-center">
                    <div className="w-1/2 p-8 bg-white rounded-lg shadow-md">
                        <h2 className="text-3xl md:text-[3.5rem] mb-4">Our Story</h2>
                        <p className="text-lg md:text-[1.5rem] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                    <div className="w-1/2 p-8 bg-white rounded-lg shadow-md ml-8">
                        <h2 className="text-3xl md:text-[3.5rem] mb-4">Our Mission</h2>
                        <p className="text-lg md:text-[1.5rem] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;