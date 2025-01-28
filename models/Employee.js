<<<<<<< HEAD
import mongoose from "mongoose";
import { Schema } from "mongoose";

const employeeSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    employeeId: {type: String, required: true, unique: true},
    dob: {type: Date},
    gender: {type: String},
    maritalStatus: {type: String},
    designation: {type: String},
    department: {type: Schema.Types.ObjectId, ref: "Department", required: true},
    salary: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const Employee = mongoose.model("Employee", employeeSchema);
=======
import mongoose from "mongoose";
import { Schema } from "mongoose";

const employeeSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    employeeId: {type: String, required: true, unique: true},
    dob: {type: Date},
    gender: {type: String},
    maritalStatus: {type: String},
    designation: {type: String},
    department: {type: Schema.Types.ObjectId, ref: "Department", required: true},
    salary: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const Employee = mongoose.model("Employee", employeeSchema);
>>>>>>> 1b660d780aa4b77e8ec813678f3b011304ec02a5
export default Employee;