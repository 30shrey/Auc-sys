const mongoose = require("mongoose");

const connectDB = async() =>{
  console.log(process.env.DB_URI)
  try{
    mongoose.set("strictQuery",true)
    await mongoose.connect(process.env.DB_URI,
        {useNewurlParser: true,})
    .then(() =>{
        console.log("Successfully conected to mongoDB")
    })
  }catch(err){
    console.error(err.message)
    process.exit(1);
  }
};
module.exports = connectDB;