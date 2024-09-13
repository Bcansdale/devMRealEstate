import React, {useEffect, useRef, useState} from "react";
import {
    Button,
    Navbar,
} from "@material-tailwind/react";
import {BsHouseHeart} from "react-icons/bs";
import {GrUserAdmin} from "react-icons/gr";
import {Carousel} from "@material-tailwind/react";
import Heart from "react-heart";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import logo from "../../public/devmLogo.png";

function DetailProperty() {

    const mapContainerRef = useRef();
    const mapRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbmNtMyIsImEiOiJjbHY4ZHpyMmcwa2VqMmprd3k5aTUxdHRqIn0.58o5iA8-2QQX46rm055i7g';

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [-111.8910, 40.7608], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    });

    const [active, setActive] = useState(false);
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
            <div className="flex flex-col min-h-screen justify-center items-center bg-gray-800 opacity-90">
                <div className="container max-w-full lg:w-[80vw] shadow-2xl shadow-[#444445] bg-[#fff] ">
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
                    <section className="flex flex-col bg-white">
                        <div
                            className="grid m-2 gap-2 md:gap-2 md:ml-4 md:mr-4 lg:gap-2 lg:ml-4 lg:mr-4 xl:grid-cols-2 xl:gap-4 xl:ml-3 xl:mr-1">
                            <Carousel
                                className="rounded-xl h-full sm:min-w-full"
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
                                /> <img
                                src="https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp"
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            </Carousel>
                            <div className="hidden md:grid md:grid-cols-2 gap-2">
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
                            <div className="flex flex-col">
                                <div className="flex flex-col mt-5">
                                    <h2 className="text-4xl text-[#444445] m-2 xl:ml-20">Mountain Side Mansion</h2>
                                    <h3 className="text-1xl text-[#444445] m-2 xl:ml-20">351 W 800 N, Salt Lake City, UT,
                                                                                     84103</h3>
                                </div>
                                <div className="flex xl:ml-20">
                                    <h3 className="text-1xl text-[#444445]">Listed On: Sep 6, 2024</h3>
                                    <h3 className="text-1xl text-[#444445] ml-5">Category: House</h3>
                                    <h3 className="text-1xl text-[#444445] ml-5">Bedrooms: 7</h3>
                                    <h3 className="text-1xl text-[#444445] ml-5">Bathrooms: 5</h3>
                                    <h3 className="text-1xl text-[#444445] ml-5">Square Feet: 11,200</h3>
                                    <h3 className="text-1xl text-[#444445] ml-5">Est Payment: $68,671</h3>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between md:justify-end md:items-end md:mx-28 xl:flex-col xl:mr-20">
                                <div className="flex flex-col lg:items-end pr-4 xl:mt-5">
                                    <h3 className="text-4xl text-[#444445] m-2 ml-5">$17,000,000</h3>
                                    <div className="flex justify-end m-2">
                                        <button className="text-1xl text-[#444445] mr-12">Share</button>
                                        <button className="flex flex-row">
                                            <div className="flex" style={{width: "1rem", color: "#444445"}}>
                                                <Heart isActive={active} onClick={() => setActive(!active)}/>
                                            </div>
                                            <h3 className="text-1xl text-[#444445] mx-2">Favorite</h3>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center xl:items-end xl:pr-4 xl:m-2">
                                    <div className="flex items-center xl:justify-start">
                                        <Button variant="outlined" className="px-10 text-[1rem] text-[#444445]">Contact
                                                                                                                Agent</Button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="grid xl:ml-20">
                                    <h2 className="text-3xl text-[#444445] mt-2 mb-8">Property Description</h2>
                                    <p className="text-[1rem] text-[#444445] ">Lorem ipsum odor amet, consectetuer
                                                                               adipiscing
                                                                               elit. Ultrices elit inceptos tempus
                                                                               auctor
                                                                               per
                                                                               erat aliquam augue vulputate. Libero nibh
                                                                               penatibus congue tortor vel sollicitudin
                                                                               finibus
                                                                               dis vulputate. Pretium maecenas dapibus
                                                                               enim
                                                                               mauris, habitasse at. Ornare congue
                                                                               parturient et
                                                                               vestibulum semper sem consectetur.
                                                                               Ridiculus
                                                                               egestas donec porta placerat morbi magnis
                                                                               vivamus
                                                                               quisque porttitor. Maximus nec feugiat
                                                                               lacinia
                                                                               massa maximus volutpat. Integer sodales
                                                                               torquent
                                                                               id lacus finibus sit. Nascetur maximus
                                                                               nunc
                                                                               pharetra adipiscing facilisis cubilia
                                                                               malesuada
                                                                               quisque. Vehicula justo fames montes
                                                                               torquent
                                                                               ultrices faucibus commodo. Ullamcorper
                                                                               maecenas
                                                                               sit taciti quisque mattis; ultrices
                                                                               ligula.
                                                                               Dolor
                                                                               quis vitae platea primis habitant non et
                                                                               odio.
                                                                               Placerat elit sodales penatibus risus
                                                                               suscipit
                                                                               faucibus ut platea. Velit felis nascetur
                                                                               fames
                                                                               urna faucibus mauris? Enim id sem aliquet
                                                                               vehicula pharetra cubilia.</p>
                                    <p
                                        className="text-[1rem] text-[#444445] ">Lorem ipsum odor amet, consectetuer
                                                                                adipiscing
                                                                                elit.
                                                                                Ultrices elit inceptos tempus auctor per
                                                                                erat
                                                                                aliquam augue vulputate. Libero nibh
                                                                                penatibus
                                                                                congue tortor vel sollicitudin finibus
                                                                                dis
                                                                                vulputate. Pretium maecenas dapibus enim
                                                                                mauris,
                                                                                habitasse at. Ornare congue parturient
                                                                                et
                                                                                vestibulum
                                                                                semper sem consectetur. Ridiculus
                                                                                egestas donec
                                                                                porta placerat morbi magnis vivamus
                                                                                quisque
                                                                                porttitor. Maximus nec feugiat lacinia
                                                                                massa
                                                                                maximus
                                                                                volutpat. Integer sodales torquent id
                                                                                lacus
                                                                                finibus
                                                                                sit. Nascetur maximus nunc pharetra
                                                                                adipiscing
                                                                                facilisis cubilia malesuada quisque.
                                                                                Vehicula
                                                                                justo
                                                                                fames montes torquent ultrices faucibus
                                                                                commodo.
                                                                                Ullamcorper maecenas sit taciti quisque
                                                                                mattis;
                                                                                ultrices ligula. Dolor quis vitae platea
                                                                                primis
                                                                                habitant non et odio. Placerat elit
                                                                                sodales
                                                                                penatibus risus suscipit faucibus ut
                                                                                platea.
                                                                                Velit
                                                                                felis nascetur fames urna faucibus
                                                                                mauris? Enim
                                                                                id
                                                                                sem aliquet vehicula pharetra
                                                                                cubilia.</p>
                                </div>
                            </div>
                            <div>
                                <div className="xl:pr-20">
                                    <h2 className="text-3xl text-[#444445] mt-2 mb-8">
                                        Property Map
                                    </h2>
                                    <div
                                        ref={mapContainerRef}
                                        className="aspect-square w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="bg-white rounded-xl shadow opacity-96">
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
                                        <li className="p-2">
                                            <h2 className="text-[1.25rem] pb-2 ">About Us:</h2>
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
                                        <li className="p-2">
                                            <h2 className="text-[1.25rem] pb-2">Hours:</h2>
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
                                        <li className="p-2">
                                            <h2 className="text-[1.25rem] pb-2">Links:</h2>
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
                </div>
            </div>
        </>
    );
}

export default DetailProperty;