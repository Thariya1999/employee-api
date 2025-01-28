<<<<<<< HEAD
import mongoose from "mongoose";
import { Schema } from "mongoose"

const leaveSchema = new Schema({
    employeeId: { type: Schema.Types.ObjectId, ref: "Employee", required: true},
    leaveType: {
        type: String,
        enum: ["Sick Leave", "Casual Leave", "Annual Leave"],
        required: true,
    },
    startDate: { type: Date, required: true},
    endDate: { type: Date, required: true},
    reason: { type: String, required: true},
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
    },
    appliedAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
});

const Leave = mongoose.model("Leave", leaveSchema);
=======
import mongoose from "mongoose";
import { Schema } from "mongoose"

const leaveSchema = new Schema({
    employeeId: { type: Schema.Types.ObjectId, ref: "Employee", required: true},
    leaveType: {
        type: String,
        enum: ["Sick Leave", "Casual Leave", "Annual Leave"],
        required: true,
    },
    startDate: { type: Date, required: true},
    endDate: { type: Date, required: true},
    reason: { type: String, required: true},
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
    },
    appliedAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
});

const Leave = mongoose.model("Leave", leaveSchema);
>>>>>>> 1b660d780aa4b77e8ec813678f3b011304ec02a5
export default Leave;