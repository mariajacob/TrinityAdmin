const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
var useragent = require('express-useragent');
const mongoose = require('mongoose');

let app = express();

///////////////////////////////////
var userRoute =require("./routes/userRoute")
var contactusRoute =require("./routes/contactusRoute")
var latestnewsRoute =require("./routes/latestnewsRoute")
var reviewsRoute =require("./routes/reviewsRoute")
var placementRoute =require("./routes/placementRoute");
var discoverDetailsRoute =require("./routes/discoverDetailsRoute")
var tailsectionRoute =require("./routes/tailsectionRoute")
var aboutusRoute =require("./routes/aboutusRoute")
var courseAndCategoryRoute =require("./routes/courseAndCategoryRoute")
var galleryRoute =require("./routes/videogalleryRoute")
var ourteamRoute =require("./routes/ourteamRoute")


//BODYPARSER
app.use(bodyParser.urlencoded({
    extended: true, limit: '150mb'
}));
app.use(bodyParser.json({ limit: '150mb' }))



//DATABASE URL
mongoose.connect(process.env.MONGOURL || 'mongodb+srv://trinityaccadamy:rqZEcPiQxqWZLmu4@cluster0.s2lymno.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { 
    console.log("Data Base connected")
}).catch((ex) => {
    console.log("Db connection error")
    console.log(ex)
});

//database connection
var db = mongoose.connection;



//Port Declaration
var port = process.env.PORT || 4000;

//Cors 
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


//Cors and helmet use
app.use(cors());
app.use(helmet({crossOriginResourcePolicy:false}));

//Consoles the user information and API calls into the server Environment
app.use(useragent.express());
app.use((req, res, next) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl)
    next();
})

//APP.USE FUNCTIONS
//////////////////
app.use(userRoute);
app.use(contactusRoute);
app.use(latestnewsRoute);
app.use(reviewsRoute);
app.use(placementRoute);
app.use(discoverDetailsRoute);
app.use(tailsectionRoute);
app.use(courseAndCategoryRoute);
app.use(aboutusRoute);
app.use(galleryRoute);
app.use(ourteamRoute);



//Route for checking the server health
app.get('/health', async(req, res) => {
    res.status(200).json({
        status: true
    });
    return
});

//Server Environment set up
const server = app.listen(port, function () {
    console.log("Running Server on port " + port);
});