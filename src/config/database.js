
 import mongoose from "mongoose"
 import dotenv from "dotenv"
 dotenv.config()

 const dbConnect = mongoose.connect(`${process.env.DATABASE_URL}` )
 .then(()=>{console.log("Database is Connected")})
 .catch((error)=>{
    console.log("Error in dbConnection")
    console.log(error)
    process.exit(1)
 })
 export default dbConnect