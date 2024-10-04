import { useEffect, useState } from "react";
import PropertyForm from "./PropertyForm.jsx";
import PropertyList from "./PropertyList.jsx";
import {
  PropertyProvider,
  useProperty,
} from "../../context/PropertyContext.jsx";

function AdminPortal() {
  return (
    <>
      <PropertyProvider>
        <PropertyPage />
      </PropertyProvider>
    </>
  );
}

function PropertyPage() {
  const { getProperties } = useProperty();

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      <h2 className="flex justify-center items-center text-[#444445] text-5xl pt-12">
        Current Listings
      </h2>
      <PropertyList />
      <PropertyForm />
    </>
  );
}

export default AdminPortal;
