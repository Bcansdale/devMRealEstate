import React from 'react';
import bannerImage from '/src/assets/background-dark1.png'

function Banner() {
    return (
        <>
            <div className='lg:flex flex-col h-[90vh]'>
                <div className="h-[80vh] text-white text-center grid bg-cover"
                     style={{backgroundImage: `url(${bannerImage})`}}>
                    <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-60"></div>
                    <div className="col-start-1 row-start-1 flex flex-col items-center justify-center mb-40">
                        <h1 className="text-4xl md:text-[5rem]">The Finest Real Estate</h1>
                        <h2 className="text-2xl md:text-[2.5rem] mt-6">Salt Lake City, UT</h2>
                        <div className="md:w-1/2 min-w-[350px] mt-24">
                            <div className="relative">
                                <input
                                    className="w-full bg-transparent placeholder:text-white sm:text-[1.3rem] border border-white rounded-[2rem] pl-5 md:pl-8 lg:pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-white shadow-sm focus:shadow "
                                    placeholder="Search for properties"
                                />
                                <button
                                    className="absolute top-1 right-1 flex items-center rounded-3xl bg-white md:w-1/4 py-2 px-1 md:px-3 border border-transparent text-center sm:text-[1.3rem] text-[#444445] transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="w-5 h-5 mr-2">
                                        <path fillRule="evenodd"
                                              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='flex flex-col justify-center items-center text-3xl md:text-[3.5rem] mt-10 text-[#444445]'>
                    Find Listings By Property Type</h1>
            </div>
        </>
    );
}

export default Banner;