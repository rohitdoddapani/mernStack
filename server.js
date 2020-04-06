const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

//bodyParser middlewware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose.connect( process.env.mongoURI || db)
    .then( () => console.log('MongoDB connected...'))
    .catch(err => console.log(err) );

//Use routes
app.use('/api/items',items);

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

//heroko step-3
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend','build','index.html'))
    })
}

app.listen(port, () => console.log(`server started on port ${port}`));
