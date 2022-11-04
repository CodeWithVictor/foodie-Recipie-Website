// npm install method-overide
// it is used to override the default behaviour of post and get request

const express = require('express');
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')
const mongosse =require('mongoose')
const fileUpload = require('express-fileupload')
const foodieRoutes = require('./Routes/foodie-routes')
const app = express();



//use express layout
app.use(expressLayouts)
app.set ('layout','./myLayouts/main-layout')

//connect datebase
const dbURI = 'mongodb+srv://WebGodVictor:7654321@webdevelopment.ormxdw1.mongodb.net/Food-Recipe-Website?retryWrites=true&w=majority'
 
mongosse.connect(dbURI)
.then(()=>{
    console.log('connection to db successful')
})
.catch((err)=>{
    console.log(err)
})

// use express urlencoded (this helps you make use of the post method for forms)
app.use(express.urlencoded({extended:true}));

//use public folder
app.use(express.static('public'))

// use method override
app.use(methodOverride('_method'));

// use file-upload // to import pictures to our website but we required it first above
app.use(fileUpload());

//set views engine
app.set('view engine', 'ejs');

//foodie recipe route
app.use(foodieRoutes)

app.listen(port, () => {
    console.log(`listening to request coming at ${port}`);
})