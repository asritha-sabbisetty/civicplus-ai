import { useEffect, useState } from "react";

function ComplaintsList() {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/complaints")
            .then((response) => response.json())
            .then((data) => setComplaints(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">All Complaints</h1>

            {complaints.length === 0 ? (
                <p>No complaints found.</p>
            ) : (
                complaints.map((complaint) => (
                    <div
                        key={complaint._id}
                        className="border rounded-lg p-4 mb-4 shadow"
                    >
                        <h2 className="text-xl font-semibold">{complaint.title}</h2>
                        {complaint.image && (
                            <img
                                src={complaint.image}
                                alt={complaint.title}
                                className="w-full h-64 object-cover rounded-lg my-3"
                            />
                        )}
                        <p><strong>Category:</strong> {complaint.category}</p>
                        <p><strong>Description:</strong> {complaint.description}</p>
                        <p><strong>Location:</strong> {complaint.location}</p>
                        <p><strong>Status:</strong> {complaint.status}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default ComplaintsList;