import { useEffect, useState } from "react";
import AdminCard from "./AdminCard";
import axios from "axios";
import { Button } from "@material-tailwind/react";

function AdminProperties({ onSelectedProperty }) {
    const [properties, setProperties] = useState([]);
    const [adminListingsToShow, setAdminListingsToShow] = useState(8); // Number of listings to show initially
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the properties from the backend on component mount
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get("/api/properties/get");
                setProperties(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    // Handle loading and error states
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="admin-properties-container">
            {/* Properties Grid */}
            <section className="flex flex-col items-center bg-white">
                <div className="mt-10 mx-4 grid md:grid-cols-2 md:px-10 md:gap-8 xl:grid-cols-4 xl:gap-8 xl:ml-8 xl:mr-8">
                    {/* Display AdminCard for each property */}
                    {properties.slice(0, adminListingsToShow).map((property) => (
                        <AdminCard
                            key={property.propertyId}
                            property={property}
                            onSelectedProperty={onSelectedProperty}  // Pass selected property to parent
                        />
                    ))}
                </div>

                {/* Show more listings button for pagination */}
                <div className="flex items-center justify-center m-5 mt-10">
                    <Button
                        variant="outlined"
                        className="px-10 text-[1rem] text-[#444445]"
                        onClick={() => setAdminListingsToShow(adminListingsToShow + 8)}  // Show 8 more listings
                    >
                        Show More Listings
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default AdminProperties;