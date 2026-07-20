import { useState } from "react";
function ComplaintForm() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const complaint = {
            title,
            category,
            description,
            location,
            image: "",
        };

        try {
            const response = await fetch("http://localhost:5000/complaints", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(complaint),
            });

            const data = await response.json();

            console.log(data);

            alert("Complaint submitted successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to submit complaint.");
        }
    };
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
                <h1 className="text-3xl font-bold text-blue-700 mb-6">
                    Register Complaint
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Complaint Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border p-3 rounded-lg mb-4"
                    />
                    <select
                        defaultValue=""
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border p-3 rounded-lg mb-4"
                    >
                        <option value="" disabled>
                            Select Complaint Category
                        </option>

                        <option value="Road Damage">Road Damage</option>
                        <option value="Garbage Collection">Garbage Collection</option>
                        <option value="Water Supply">Water Supply</option>
                        <option value="Street Light">Street Light</option>
                        <option value="Drainage">Drainage</option>
                        <option value="Public Safety">Public Safety</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="mb-4">
                        <label
                            htmlFor="imageUpload"
                            className="block w-full border border-gray-300 rounded-lg p-3 text-gray-500 cursor-pointer hover:border-blue-600"
                        >
                            {image ? image.name : "📷 Upload Image"}
                        </label>

                        <input
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full border p-3 rounded-lg mb-4"
                    />
                    <textarea
                        placeholder="Describe your issue..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border p-3 rounded-lg mb-4"
                        rows="5"
                    />

                    <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
                        Submit Complaint
                    </button>
                </form>
            </div>
        </div >
    );
}

export default ComplaintForm;