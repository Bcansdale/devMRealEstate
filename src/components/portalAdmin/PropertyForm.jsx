import { useEffect, useReducer, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useProperty } from "../../context/PropertyContext.jsx";
import formReducer from "../../reducers/formReducer.js";

const initialFormState = {
  propertyId: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  price: "",
  numBedrooms: "",
  numBathrooms: "",
  squareFeet: "",
  propertyTypeId: "",
  description: "",
  selectedFiles: [],
};

function PropertyForm() {
  const [status, setStatus] = useState("waiting");

  const { property, createProperty, updateProperty } = useProperty();
  const propertyId = property?.propertyId;

  const [formState, dispatch] = useReducer(
    formReducer,
    initialFormState,
    undefined,
  );

  useEffect(() => {
    dispatch({
      type: "loadInputs",
      payload: { ...property, ...property.address },
    });
  }, [property]);

  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch({
      type: "handleInput",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  function fileSelectHandler(e) {
    dispatch({
      type: "handleInput",
      field: e.target.name,
      payload: e.target.files,
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    setStatus("submitting");

    const property = {
      propertyId,
      ...formState,
    };

    if (property.propertyId) {
      updateProperty(property, formState.photos);
    } else {
      createProperty(property, formState.photos);
    }

    // scroll to top of page
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500,
    );

    setStatus("done");
  }

  return (
    <div className="flex justify-center items-center w-fill h-fill bg-[#444445] py-5">
      <div className="container mx-auto my-4 px-4">
        <form onSubmit={handleFormSubmit} id="propertyForm">
          <h2 className="flex justify-center items-center text-white text-5xl pb-2">
            {property.propertyId ? "Update Listing" : "Create a New Listing"}
          </h2>
          <div className="w-full p-8 my-4 mr-auto bg-white rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-4xl text-[#444445]">
                Home Details
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <div>
                <h2 className="text-[1.5rem] text-[#444445]">Address Line 1</h2>
                <input
                  className="w-full bg-[#444445] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline "
                  type="text"
                  placeholder="Street Address"
                  name="addressLine1"
                  value={formState.addressLine1}
                  onChange={(e) => handleInputChange(e)}
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <h2 className="text-[1.5rem] text-[#444445]">Address Line 2</h2>
                <input
                  className="w-full bg-[#444445] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Apt, Suite, Etc"
                  name="addressLine2"
                  value={formState.addressLine2}
                  onChange={(e) => handleInputChange(e)}
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <h2 className="text-[1.5rem] text-[#444445]">City</h2>
                <input
                  className="w-full bg-[#444445] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formState.city}
                  onChange={(e) => handleInputChange(e)}
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <h2 className="text-[1.5rem] text-[#444445]">State</h2>
                <input
                  className="w-full bg-[#444445] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formState.state}
                  onChange={(e) => handleInputChange(e)}
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <h2 className="text-[1.5rem] text-[#444445]">Area Code</h2>
                <input
                  className="w-full bg-[#444445] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Area Code"
                  name="postalCode"
                  value={formState.postalCode}
                  onChange={(e) => handleInputChange(e)}
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <h2 className="text-[1.5rem] text-[#444445]">Price</h2>
                <input
                  className="w-full bg-[#444445] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={formState.price}
                  onChange={(e) => handleInputChange(e)}
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <h2 className="text-[1.5rem] text-[#444445]">Bedrooms</h2>
                <input
                  className="w-full bg-[#444445] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Bedrooms"
                  name="numBedrooms"
                  value={formState.numBedrooms}
                  onChange={(e) => handleInputChange(e)}
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <h2 className="text-[1.5rem] text-[#444445]">Bathrooms</h2>
                <input
                  className="w-full bg-[#444445] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Bathrooms"
                  name="numBathrooms"
                  value={formState.numBathrooms}
                  onChange={(e) => handleInputChange(e)}
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <h2 className="text-[1.5rem] text-[#444445]">Square Feet</h2>
                <input
                  className="w-full bg-[#444445] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Square Feet"
                  name="squareFeet"
                  value={formState.squareFeet}
                  onChange={(e) => handleInputChange(e)}
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <h2 className="text-[1.5rem] text-[#444445]">Category</h2>
                <select
                  className="w-full bg-[#444445] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  name="propertyTypeId"
                  value={formState.propertyTypeId}
                  onChange={(e) => handleInputChange(e)}
                  disabled={status === "submitting"}
                >
                  <option defaultValue className="text-gray-600">
                    Category
                  </option>
                  <option value="1">House</option>
                  <option value="2">Townhouse</option>
                  <option value="3">Multi-Family</option>
                </select>
              </div>
            </div>
            <div className="my-2">
              <h2 className="text-[1.5rem] text-[#444445]">Description</h2>
              <textarea
                placeholder="Description"
                className="w-full h-32 bg-[#444445] text-[#ffffff] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="description"
                value={formState.description}
                onChange={(e) => handleInputChange(e)}
                disabled={status === "submitting"}
              ></textarea>
            </div>
            <div>
              <label className="block text-[1.5rem] text-[#444445]">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white-300 border-dashed rounded-md bg-[#444445]">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-[#444445]">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 p-1"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="photos"
                        type="file"
                        className="sr-only"
                        multiple="multiple"
                        onChange={fileSelectHandler}
                      />
                    </label>
                    <p className="p-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center m-5 mt-10">
              <Button
                variant="outlined"
                className="px-10 text-[1rem] text-[#444445]"
                type="submit"
              >
                Submit listing
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PropertyForm;
