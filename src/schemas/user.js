const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const userSchema = mongoose.Schema({
    _id:reqString,
    user:reqString,
    guildId: reqString,
    credits:{
        type: Number
    }
})
module.exports = mongoose.model('users', userSchema);