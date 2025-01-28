<<<<<<< HEAD
import mongoose from "mongoose";
import { Schema } from "mongoose";

const salarySchema = new Schema({
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee', required: true},
    basicSalary: {type: Number, required: true},
    allowances: {type: Number},
    deductions: {type: Number},
    netSalary: {type: Number},
    payDate: {type: Date, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const Salary = mongoose.model("Salary", salarySchema);
=======
import mongoose from "mongoose";
import { Schema } from "mongoose";

const salarySchema = new Schema({
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee', required: true},
    basicSalary: {type: Number, required: true},
    allowances: {type: Number},
    deductions: {type: Number},
    netSalary: {type: Number},
    payDate: {type: Date, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const Salary = mongoose.model("Salary", salarySchema);
>>>>>>> 1b660d780aa4b77e8ec813678f3b011304ec02a5
export default Salary