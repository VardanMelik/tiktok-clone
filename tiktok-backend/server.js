const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const data = require('./data');
const Videos = require('./dbModel');
const { response } = require('express');



// App config
const app = express();
const port = process.env.port || 9000;

// Body-Parser Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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