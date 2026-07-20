import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Complaint", complaintSchema);