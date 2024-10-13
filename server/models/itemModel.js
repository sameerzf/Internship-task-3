const {Schema,model} = require('mongoose');

const itemSchema = new Schema ({
    name:{type: String, required:true},
    description:{type: String, required:true},
    image:{type: String, required:true},
    price:{type:Number,default:0},
});

module.exports = model('Item',itemSchema);

