import {v2 as cloudinary} from 'cloudinary';
import fs from ("fs")

cloudinary.config({ 
    cloud_name:process.env.CLOUD_NAME, 
    api_key:process.env.API_KEY , 
    api_secret: process.env.API_SECRET,
  });
 const uploadCloudinary = async(localFilePath)=>{
    try{
        if(!localFilePath)
        {
            console.log("localfile PAth hi nhi h bhaiiii")
            return null;
        }
      const response =  await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // File has been successfuly uploaded
        console.log("File is uploaded on cloudinary",response.secure_url)
        return response;
    }
    catch(error)
    {
      fs.unlinkSync(localFilePath)
    //   remove the locally saved file as the upload operation got failed
    return null
    }
 }

