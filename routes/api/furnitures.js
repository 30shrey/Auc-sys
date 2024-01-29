const express = require("express");
//Handle all the route parameters with ease
const  router = express.Router();

router.get("/test", (req,res) =>{
    res.send("test api route is working fine")
})

//@route GET api/furnitures
//@description  Give all the furnitures
//@ access public

router.get('/',(req, res) => {
   // Furniture.find()
    //.then((furnitures) => res.json(furnitures))
    // .catch((err) => res.status(404))
    // .json({nofurnituresfound: 'Furniture  Not Found'})
    res.json({OK:"All furniture route is working fine"})
});




module.exports = router;