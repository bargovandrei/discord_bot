const mongoose = require('mongoose');
const mongoPath = "mongodb+srv://andrei:andrei@cluster0.kmcyn.mongodb.net/discord?retryWrites=true&w=majority"

module.exports = async () =>{
    await mongoose.connect(mongoPath,{useNewUrlParser: true, useUnifiedTopology: true})
    return mongoose
}
