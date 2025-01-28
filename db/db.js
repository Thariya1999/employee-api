<<<<<<< HEAD
import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch(error) {
        console.log(error)
    }
}

=======
import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch(error) {
        console.log(error)
    }
}

>>>>>>> 1b660d780aa4b77e8ec813678f3b011304ec02a5
export default connectToDatabase