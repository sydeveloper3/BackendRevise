 
  import express  from "express";
  import dotenv from "dotenv"
  import dbConnect from "./config/database.js";

  dotenv.config()
  const app = express();
  const PORT = process.env.PORT || 4000
  app.listen(PORT,()=>{
    console.log( `server is working on ${PORT}`)
  })

  