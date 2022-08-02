import mongoose from "mongoose"; 

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI); 
        console.log(`MongoDB Connection: ${connection.connection.host}`.cyan.underline); 
    } catch(error) {
        console.log(error); 
        process.exit(1); 
    }; 
}; 

export default connectDB