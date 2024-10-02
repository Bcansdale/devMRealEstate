

import { XMarkIcon } from "@heroicons/react/24/solid/index.js";
import {useNavigate} from "react-router-dom";


function AdminCard({ property }) {
    const primaryImg = property.images.filter(
        (photo) => photo.propertyImage.isPrimary,
    )[0];

    const navigate = useNavigate();
    const handleCardClick = (propertyId) => {
        navigate(`/property/${propertyId}`);
    };

    return (
        <button
            key={property.propertyId}
            className="container mb-4 overflow-hidden rounded-xl border text-[#444445] shadow-xl duration-500 ease-in-out hover:shadow-xl"
            onClick={() => handleCardClick(property.propertyId)}
        >
            <div className="container ">
                <img
                    src={primaryImg.src}
                    alt={
                        property.address
                            ? property.address.addressLine1 || "Property Image"
                            : "Property Image"
                    }
                    className="container object-cover w-full h-48"
                />
            </div>

            <div className="p-4">
                <div className="pb-8">
                    <a
                        href={`/property/${property.propertyId}`}
                        className="text-lg hover:text-orange-600 font-[400] duration-500 ease-in-out text-[1.51rem] text-[#444445]"
                    >
                        {property.address
                            ? `${property.address.addressLine1}, ${property.address.city}, ${property.address.state}, ${property.address.postalCode}`
                            : "Address not available"}
                    </a>
                </div>

                <ul className="box-border flex list-none items-center justify-between border-t border-b border-solid border-gray-300 px-0 py-6">
                    <li key="squareFeet" className="mr-4 flex items-center text-left">
                        <i className="mr-2 text-2xl text-[#444445]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="h-5 w-5"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                                />
                            </svg>
                        </i>
                        <span className="text-sm">{`${property.squareFeet} sqft`}</span>
                    </li>
                    <li key="numBedrooms" className="mr-4 flex items-center text-left">
                        <i className="mr-2 text-2xl text-[#444445]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="h-5 w-5"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z"
                                />
                            </svg>
                        </i>
                        <span className="text-sm">{`${property.numBedrooms} Beds`}</span>
                    </li>
                    <li key="numBathrooms" className="flex items-center text-left">
                        <i className="mr-2 text-2xl text-[#444445]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="h-5 w-5"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z"
                                />
                            </svg>
                        </i>
                        <span className="text-sm">{`${property.numBathrooms} Baths`}</span>
                    </li>
                </ul>

                <ul className="m-0 flex list-none items-center justify-between px-0 pt-4 pb-0">
                    <li className="text-left">
                        <span className="text-sm text-[#444445]">Price</span>
                        <p className="m-0 text-base font-medium">{`$${property.price.toLocaleString()}`}</p>
                    </li>

                    <li>
                        <div
                            className="cursor-wait hover:text-orange-600 duration-500 ease-in-out color-[#444445] w-5 h-5"
                            onClick={(e) => handleDeleteProperty(e, null)}
                        >
                            <XMarkIcon/>
                        </div>
                    </li>
                </ul>
            </div>
        </button>
    );
}

export default AdminCard;

