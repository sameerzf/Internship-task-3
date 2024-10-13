const Item = require('../models/itemModel')

//getItems


//api/shop
const getItems = async(req,res,next)=>{
    try {
        const items = await Item.find().sort();
        res.status(200).json(items);
    } catch (error) {
        console.log("Error occurred, Refresh the page")
        alert("Error occurred, Refresh the page")
        return next(error)
    }

}

//api/setItem
const setItem = async (req, res, next) => {
    try {
        let { name, description, image, price } = req.body;

        // Validate input
        if (!name || !image || !description || !price) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const newItem = await Item.create({ name, description, image, price });

        res.status(201).json(newItem);
    } catch (error) {
        return next(error);
    }
};



module.exports = {getItems,setItem}