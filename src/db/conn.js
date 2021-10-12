const mongoose = require("mongoose");

// creating a database 
mongoose.connect("mongodb+srv://admin:admin@cluster0.ngmwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})