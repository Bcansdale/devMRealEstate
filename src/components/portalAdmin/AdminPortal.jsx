import React from 'react';
import MainProperties from "../properties/MainProperties.jsx";
import {Button} from "@material-tailwind/react";
import AdminPost from "./AdminPost.jsx";
import AdminProperties from "./AdminProperties.jsx";

function AdminPortal() {
    return (
        <>

            <h2 className="flex justify-center items-center text-[#444445] text-5xl pt-12">Current Listings</h2>
            <AdminProperties/>
            <AdminPost />
        </>
    );
}

export default AdminPortal;