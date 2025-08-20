const mongoose = require('mongoose');

let blogSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    intro:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
}, { timestamps : true});

const blogModel = mongoose.model('Blog', blogSchema);
module.exports = blogModel;