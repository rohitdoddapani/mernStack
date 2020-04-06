const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const ItemSchema = new Schema({
    field: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    d_project_cou: {
        type: String,
    },
    describes: {
        type: String,
    },
    m_project_cou: {
        type: String,
    },
    education: {
        type: String,
    },
    materials: {
        type: String,
    },
    location: {
        type: String,
    },

    date:{
        type: Date,
        default: Date.now
    }
});


module.exports = Item = mongoose.model('item',ItemSchema);