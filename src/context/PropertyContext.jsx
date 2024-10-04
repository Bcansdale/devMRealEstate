import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const PropertyContext = createContext();

const initialState = {
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
  property: {
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
  },
  propertyList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "property/list":
      return {
        ...state,
        propertyList: action.payload,
      };
    case "property/get":
      return {
        ...state,
        property: action.payload,
      };
    case "property/create":
      return {
        ...state,
        propertyList: [...[action.payload], ...state.propertyList],
        property: initialState.property,
      };
    case "property/update":
      return {
        ...state,
        property: initialState.property,
        propertyList: state.propertyList.map((p) =>
          p.propertyId === action.payload.propertyId
            ? { ...p, ...action.payload }
            : p,
        ),
      };
    case "property/delete":
      return {
        ...state,
        propertyList: state.propertyList.filter(
          (property) => property.propertyId !== action.payload,
        ),
      };
    default:
      throw new Error("Unknown action");
  }
}
function PropertyProvider({ children }) {
  const [
    { property, propertyList, loading, error, setLoading, setError },
    dispatch,
  ] = useReducer(reducer, initialState, undefined);

  async function getProperties() {
    setLoading(true);
    const res = await axios
      .get("/api/properties/get")
      .catch((error) => setError(error));

    if (res.data.success) {
      dispatch({
        type: "property/list",
        payload: res.data.properties,
      });
    }

    setLoading(false);

    return res;
  }

  async function getProperty(propertyId) {
    setLoading(true);
    const res = await axios
      .get(`/api/properties/${propertyId}`)
      .catch((error) => setError(error));

    if (res.data.success) {
      dispatch({
        type: "property/get",
        payload: res.data.property,
      });
    }

    setLoading(false);

    return res;
  }

  async function createProperty(property, photos) {
    let fd = new FormData();

    Object.entries(property).forEach(([key, value]) => {
      fd.append(key, value);
    });

    if (photos) {
      Array.from(photos).forEach((file) => {
        fd.append("photos", file, file.name);
      });
    }

    const res = await axios
      .post("/api/properties/create", fd)
      .catch((error) => setError(error));

    if (res.data.success) {
      dispatch({
        type: "property/create",
        payload: res.data.property,
      });
    }

    return res;
  }

  async function updateProperty(property, photos) {
    let fd = new FormData();

    Object.entries(property).forEach(([key, value]) => {
      fd.append(key, value);
    });

    if (photos) {
      Array.from(photos).forEach((file) => {
        fd.append("photos", file, file.name);
      });
    }

    const res = await axios
      .put(`/api/properties/${property.propertyId}`, fd)
      .catch((error) => setError(error));

    if (res.data.success) {
      dispatch({
        type: "property/update",
        payload: res.data.property,
      });
    }

    return res;
  }

  async function deleteProperty(propertyId) {
    const res = await axios
      .delete(`/api/properties/${propertyId}`)
      .catch((error) => setError(error));

    if (res.data.success) {
      dispatch({
        type: "property/delete",
        payload: propertyId,
      });
    }

    return res;
  }

  return (
    <PropertyContext.Provider
      value={{
        loading,
        error,
        propertyList,
        getProperties,
        property,
        getProperty,
        createProperty,
        updateProperty,
        deleteProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}
function useProperty() {
  const context = useContext(PropertyContext);

  if (context === undefined)
    throw new Error("PropertyContext was used outside of PropertyProvider");

  return context;
}
export { PropertyProvider, useProperty };
