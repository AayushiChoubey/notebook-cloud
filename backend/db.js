//const mongoose = require('mongoose');
//mongoose.set('strictQuery', true);

//const mongoURI = "mongodb://localhost:27017"
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.set('strictQuery', true);


const connectToMongo = ()=>{
    //mongoose.connect(mongoURI)
    const port = 8000;
    mongoose.connect('mongodb://127.0.0.1/inotebook', {useNewUrlParser: true})
        .then(() => {
            console.log('Connected to MongoDB');
          })
          .catch((e) => {
            console.log('not connected');
    })
}



module.exports = connectToMongo;