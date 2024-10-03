import { useState } from "react";
import AdminCard from "./AdminCard"; // Import AdminCard
import AdminProperties from "./AdminProperties"; // Import AdminProperties
import AdminPost from "./AdminPost"; // Import AdminPost

function AdminPortal() {
    const [selectedProperty, setSelectedProperty] = useState(null);

    // Function to handle property selection
    const handleSelectedProperty = (property) => {
        setSelectedProperty(property);  // Update selected property
    };

    return (
        <div>
            {/* Pass the handler to AdminProperties which will forward it to AdminCard */}
            <AdminProperties onSelectedProperty={handleSelectedProperty} />

            {/* Always show the form */}
            <AdminPost selectedProperty={selectedProperty} />
        </div>
    );
}

export default AdminPortal;