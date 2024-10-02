import {useState, useEffect} from 'react';
import {HiOutlineHome, HiOutlineHomeModern} from "react-icons/hi2";
import {BsHouses} from "react-icons/bs";
import PropertyCard from "./PropertyCard.jsx";
import {Button} from "@material-tailwind/react";
import {Element} from 'react-scroll';
import axios from "axios";

function MainProperties() {
    const [listingsToShow, setListingsToShow] = useState(8); // initial number of listings to show
    const [properties, setProperties] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('/api/properties/get');
                setProperties(response.data);
                setImages(response.data.map((property) => property.image));
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Element name="properties" className="element">
                {/*<div className="grid justify-center">*/}
                {/*    <div className="grid grid-cols-3 justify-center items-center mt-5">*/}
                {/*        <button><HiOutlineHome size={'5rem'} color="#444445" className="mx-7 md:mx-24 px-1 "/></button>*/}
                {/*        <button><HiOutlineHomeModern size={'5rem'} color="#444445" className="mx-7 md:mx-24 px-1 "/>*/}
                {/*        </button>*/}
                {/*        <button><BsHouses size={'5rem'} color="#444445" className="mx-7 md:mx-24 px-1 "/></button>*/}
                {/*    </div>*/}
                {/*    <div className="grid grid-cols-3 justify-center items-center">*/}
                {/*        <button><p className="mx-10 md:mx-[80px] text-[1.2rem] text-[#444445]">Single Family</p>*/}
                {/*        </button>*/}
                {/*        <button><p className="mx-10 md:mx-[80px] text-[1.2rem] text-[#444445]">Town House</p></button>*/}
                {/*        <button><p className="mx-10 md:mx-[80px] text-[1.2rem] text-[#444445]">Multi-Family</p></button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*Need to redo paginate to show 8 listings at a time*/}
                <div>
                    <section className="flex flex-col items-center bg-white">
                        <div
                            className="mt-10 mx-4 grid md:grid-cols-2 md:px-10 md:gap-8 xl:grid-cols-4 xl:gap-8 xl:ml-8 xl:mr-8">
                            {properties.slice(0, listingsToShow).map((property) => (
                                <PropertyCard key={property.propertyId} property={property} image={property.image}/>
                            ))}
                        </div>
                        <div className="flex items-center justify-center m-5 mt-10">
                            <Button variant="outlined" className="px-10 text-[1rem] text-[#444445]"
                                    onClick={() => setListingsToShow(listingsToShow + 8)}>Show More listings</Button>
                        </div>
                    </section>
                </div>
            </Element>
        </>
    );
}

export default MainProperties;