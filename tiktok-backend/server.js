const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const data = require('./data.js');
const Videos = require('./dbModel.js');



// App config
const app = express();
const port = process.env.PORT || 9000;

// Body-Parser Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// Express Middleware
//app.use(express.json());


// Database config
const connection_url = "mongodb+srv://tiktok-admin-tech:B1GKcpc4nS991HRy@cluster0.pdlu4.mongodb.net/tikrok?retryWrites=true&w=majority"

mongoose.connect(
    connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then( () => { console.log('Database connection done')})
.catch( error => { console.log('Please check connection: ' + error)} );





// API endpoints




// Get endpoints 
app.get('/', (req, res) => {
    //res.status(200).send('Hello world');
    res.json(data);
})

app.get('/v1/posts', (req, res) => {
    res.json(data);
})

// Find videos
app.get('/v2/posts', (req, res) => {
    Videos.find({})
        .then( data => res.json(data))
        .catch( error => console.log(error))
})

// Create new videos
app.post('/v2/posts', (req, res) => {
    // Post to add new data to database
    const dbVideos = req.body;
    console.log('Request Body: ' + req.body.url);
    
    Videos.create(dbVideos)
        .then( response => res.json('Create post successful!') )
        .catch( error => {
            console.log('Create post: ' +  error)
        })

})

// Listening server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})