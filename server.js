const express = require("express");
const connectDB = require("./config/db");
const cors= require("cors");
const furnitures = require("./routes/api/furnitures");
const path = require('path');
//Connecting MONGODB
//connectDB();



//Initiating the app
const app = express();

//Enabling CORS here for safety of access of info from other domain
app.use(cors());

//Handle JSON parsing properly
app.use(express.json({
    extended: false
}));

//Use the api group instead of multiple paths for multiple routes
app.use("/api/furnitures", furnitures);
 
//Serve the Static Files along with the API on the same port
app.use(express.static(
    path.join(__dirname,"./client/build")
    ));
    app.get("*",function (_,res) {
        res.sendFile(
            path.join(__dirname,"./client/build/index.html"),
            function (err){
                res.status(500).send(err);
            }
        );
    });

const port = process.env.PORT || 5000
app.listen(port,() => 
    console.log(`Server is running on port ${port}`)
);