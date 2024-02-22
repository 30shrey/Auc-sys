// All Objects
// Funrniture -> model
// furniture -> one object
// furnitures -> all the objects

const express = require("express");
const Furniture = require("../../models/Furniture");
//Handle all the route parameters with ease
const router = express.Router();

router.get("/test", (req, res) => {
   res.send("test api route is working fine")
})


//@route GET api/furnitures
//@description  Give all the furnitures
//@ access public
//READ  operation 

router.get('/', (req, res) => {
   Furniture.find()
      .then((furnitures) => res.json(furnitures))
      .catch((err) => res.status(404).json({ nofurnituresfound: 'Furniture  Not Found' }))
   // res.json({OK:"All furniture route is working fine"})
});
//@route GET api/furnitures/id
//@description Get sinlgle furniture details searching  by the id
//@access public
//read and search operation 
router.get("/:id", (req, res) => {
   Furniture.findById(req.params.id)
      .then((furniture) => res.json(furniture))
      .catch((err) => res.status(404).json({nofurniturefound: "No Furniture Found"}))
   //  res.json({
   //      Ok:"Get Furnitures By Id route is working fine"
   //  })
})

//@route GET api/furnitures
//@description  added  furnitures
//@ access public
//Create an Furniture  

router.post("/", (req, res) => {
   Furniture.create(req.body)
      .then((furniture) => res.json({ msg: "Furniture addded successfully" }))
      .catch((err) => res.status(400).json({ error: "Unable to add the furniture" }))

   //   res.json({
   //      OK:"All furniture route is working fine"
   //  })
});

//@route GET api/furnitures
//@description  added  furnitures
//@ access public
//READ,UPDATE,SEARCH OPERATION  
router.put("/:id", (req, res) => {
   Furniture.findByIdAndUpdate(req.params.id, req.body)
      .then((furniture) => res.json({ msg: "Updatedsuccessfully" }))
      .catch((err) =>
         res.status(400)
      .json({ error: "unable to find the furniture" }))
   // res.json({OK:"Update furniture working is fine"})
});
//@route GET api/furnitures
//@description  Find a furniture by id and delete it
//@ access public
//DELETE,SEARCH OPERATION  
router.delete("/:id", (req, res) => {
   Furniture.findByIdAndDelete(req.params.id, req.body)
      .then((furniture) => res.json({
         msg: "RemovedSuccessfully"
      }))
      .catch((err) =>
         res.status(404)
      .json({ error: "Couldn't  delete the furniture" }))
   //   res.json({
   //      OK:"Delete furniture working is fine"
   //  })
});


module.exports = router;