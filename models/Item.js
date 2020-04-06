const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }
});


module.exports = Item = mongoose.model('item',ItemSchema);