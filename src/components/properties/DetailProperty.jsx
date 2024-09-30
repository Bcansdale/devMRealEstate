import React, {useEffect, useRef, useState} from "react";
import { Button, Carousel } from "@material-tailwind/react";
import Heart from "react-heart";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

function DetailProperty() {

    const mapContainerRef = useRef();
    const mapRef = useRef()
    const geocodingClient = mbxGeocoding({ accessToken: 'pk.eyJ1IjoiYnJhbmRvbmNtMyIsImEiOiJjbHY4ZHpyMmcwa2VqMmprd3k5aTUxdHRqIn0.58o5iA8-2QQX46rm055i7g' });
    const [address, setAddress] = useState('');


    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbmNtMyIsImEiOiJjbHY4ZHpyMmcwa2VqMmprd3k5aTUxdHRqIn0.58o5iA8-2QQX46rm055i7g';

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/standard-satellite', // Use a style that supports terrain
            center: [-111.8910, 40.7608], // default starting position [lng, lat]
            zoom: 15 // starting zoom
        });

        // Add terrain source and layer
        mapRef.current.on('load', () => {
            mapRef.current.addSource('mapbox-dem', {
                'type': 'raster-dem',
                'url': 'mapbox://mapbox.terrain-rgb',
                'tileSize': 512,
                'maxzoom': 18
            });
            mapRef.current.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
        });

        // Geocode the address to get the coordinates
        geocodingClient.forwardGeocode({
            query: '351 W 800 N, Salt Lake City, UT',
            limit: 1
        })
            .send()
            .then(response => {
                const match = response.body;
                if (match.features.length > 0) {
                    const coordinates = match.features[0].center;
                    if (mapRef.current) {
                        mapRef.current.setCenter(coordinates);

                        // Add a marker to the map at the geocoded coordinates
                        new mapboxgl.Marker()
                            .setLngLat(coordinates)
                            .addTo(mapRef.current);
                    }
                    setAddress(match.features[0].place_name);
                }
            })
            .catch(err => {
                console.error('Error with geocoding:', err);
            });
    }, []);

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
            <div className="flex flex-col justify-center items-center bg-gray-800">
                <div className="max-w-full lg:w-[100vw] bg-[#fff] ">
                    <section className="flex flex-col bg-white">
                        <div
                            className="flex flex-col m-2 gap-2">
                            <div className="inline-flex mt-2">
                                <Carousel
                                    className="rounded-xl h-1/2 lg:w-1/2"
                                    navigation={({setActiveIndex, activeIndex, length}) => (
                                        <div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2">
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
                                        className="h-full w-full"
                                    /> <img
                                    src="https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp"
                                    alt="image 1"
                                    className="h-full w-full"
                                />
                                </Carousel>
                                <div className="hidden ml-2 lg:grid lg:grid-cols-2 lg:w-1/2 gap-2">
                                    {data.map(({imageLink}, index) => (
                                        <div key={index}>
                                            <img
                                                className="rounded-lg md:h-fit"
                                                src={imageLink}
                                                alt=""
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/*Property Details*/}
                            <div className="flex flex-col lg:flex-row-2">
                                <div className="xl:inline-flex">
                                    <div className="flex flex-col lg:min-w-[700px]">
                                        <div className="flex flex-col mt-5">
                                            <h2 className="text-4xl text-[#444445] ml-2 m-2 xl:ml-20">Mountain Side Mansion</h2>
                                            <h3 className="text-1xl text-[#444445] m-2 xl:ml-20">351 W 800 N, Salt Lake City, UT, 84103</h3>
                                        </div>
                                        <div className="grid justify-between sm:justify-start sm:flex ">
                                            <ul className="flex flex-wrap sm:justify-between py-2 xl:flex-row xl:ml-20">
                                                <div>
                                                    <li className="text-1xl text-[#444445] ml-2 xl:ml-0">Listed:</li>
                                                    <li className="text-1xl text-[#444445] ml-2 xl:ml-0">Sep 6, 2024</li>
                                                </div>
                                                <div>
                                                    <li className="text-1xl text-[#444445] ml-4 ">Category:</li>
                                                    <li className="text-1xl text-[#444445] ml-4 ">House</li>
                                                </div>
                                                <div>
                                                    <li className="text-1xl text-[#444445] ml-4 ">Bedrooms:</li>
                                                    <li className="text-1xl text-[#444445] ml-4 ">7</li>
                                                </div>
                                            </ul>
                                            <ul className="flex flex-wrap py-2 sm::justify-between xl:flex-row">
                                                <div>
                                                    <li className="text-1xl text-[#444445] ml-2 sm:ml-4">Bathrooms:</li>
                                                    <li className="text-1xl text-[#444445] ml-2 sm:ml-4">2</li>
                                                </div>
                                                <div>
                                                    <li className="text-1xl text-[#444445] ml-4 ">Square Feet:</li>
                                                    <li className="text-1xl text-[#444445] ml-4 ">11,200</li>
                                                </div>
                                                <div>
                                                    <li className="text-1xl text-[#444445] ml-4 ">Est Payment:</li>
                                                    <li className="text-1xl text-[#444445] ml-4 ">$68,671</li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-row items-center justify-between mt-3 w-full md:mr-28 xl:justify-end xl:items-end xl:flex-col xl:mr-20 xl:w-1/2">
                                        <div className="flex flex-col lg:items-end md:ml-28 pr-4 xl:mt-5">
                                            <h3 className="text-2xl md:text-4xl text-[#444445] m-2 ml-5">$17,000,000</h3>
                                            <div className="flex justify-end m-2">
                                                <button className="text-1xl text-[#444445] mr-6 md:mr-12">Share</button>
                                                <button className="flex flex-row">
                                                    <div className="flex" style={{width: "1rem", color: "#444445"}}>
                                                        <Heart isActive={active} onClick={() => setActive(!active)}/>
                                                    </div>
                                                    <h3 className="text-1xl text-[#444445] mx-2">Favorite</h3>
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-col md:mr-28 lg:items-center lg:justify-center xl:items-end xl:pr-4 xl:m-2">
                                            <div className="flex items-center xl:justify-start">
                                                <Button variant="outlined" className="px-10 text-[1rem] text-[#444445]">Contact
                                                                                                                        Agent</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Description */}
                            <div className='xl:inline-grid xl:grid-cols-2'>
                                <div className='xl:pr-5'>
                                    <div className="flex-col xl:ml-20">
                                        <h2 className="text-3xl text-[#444445] mt-2 mb-8">Property Description</h2>
                                        <p className="text-[1rem] text-[#444445] ">Lorem ipsum odor amet, consectetuer
                                                                                   adipiscing
                                                                                   elit. Ultrices elit inceptos tempus
                                                                                   auctor
                                                                                   per
                                                                                   erat aliquam augue vulputate. Libero
                                                                                   nibh
                                                                                   penatibus congue tortor vel
                                                                                   sollicitudin
                                                                                   finibus
                                                                                   dis vulputate. Pretium maecenas
                                                                                   dapibus
                                                                                   enim
                                                                                   mauris, habitasse at. Ornare congue
                                                                                   parturient et
                                                                                   vestibulum semper sem consectetur.
                                                                                   Ridiculus
                                                                                   egestas donec porta placerat morbi
                                                                                   magnis
                                                                                   vivamus
                                                                                   quisque porttitor. Maximus nec
                                                                                   feugiat
                                                                                   lacinia
                                                                                   massa maximus volutpat. Integer
                                                                                   sodales
                                                                                   torquent
                                                                                   id lacus finibus sit. Nascetur
                                                                                   maximus
                                                                                   nunc
                                                                                   pharetra adipiscing facilisis cubilia
                                                                                   malesuada
                                                                                   quisque. Vehicula justo fames montes
                                                                                   torquent
                                                                                   ultrices faucibus commodo.
                                                                                   Ullamcorper
                                                                                   maecenas
                                                                                   sit taciti quisque mattis; ultrices
                                                                                   ligula.
                                                                                   Dolor
                                                                                   quis vitae platea primis habitant non
                                                                                   et
                                                                                   odio.
                                                                                   Placerat elit sodales penatibus risus
                                                                                   suscipit
                                                                                   faucibus ut platea. Velit felis
                                                                                   nascetur
                                                                                   fames
                                                                                   urna faucibus mauris? Enim id sem
                                                                                   aliquet
                                                                                   vehicula pharetra cubilia.</p>
                                    </div>
                                </div>
                                <div className='xl:pl-5'>
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
                        </div>
                    </section>
                    {/*<Footer />*/}
                </div>
            </div>
        </>
    );
}

export default DetailProperty;
