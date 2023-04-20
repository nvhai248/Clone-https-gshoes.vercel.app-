const express = require('express');
const app = express();




const path = require('path');

// setting environment
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup resources for client
// all images,... are provided from the file "public"
app.use(express.static(path.join(__dirname, "views")));


// connect to MongoDBAtlas
const mongoose = require("mongoose");

async function connect() {

    try {
        mongoose.connect('mongodb+srv://UchatDB:uchat@uchatcluster.deprlqm.mongodb.net/HShoes?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const connection = mongoose.connection;
        connection.on('error', console.error.bind(console, 'connection error:'));
        connection.once('open', function () {
            // we're connected!
            console.log('Connected to MongoDB Atlas');
        });
    }
    catch (e) {
        console.log(e);
    }
}

connect();

const Schema = mongoose.Schema

const Shoes = new Schema({
    shoes: { type: Array },
}, {
    collection: 'shoes',
    timestamps: true,
})

let shoes = mongoose.model("shoes", Shoes);

// declare child_process and ejs
var childProcess = require('child_process');
var ejs = require('ejs');

app.get('/', function (req, res) {
    var rubyScript = childProcess.spawn('ruby', ['./views/index.rb']);
    var htmlResult = '';

    rubyScript.stdout.on('data', function (data) {
        htmlResult += data.toString();
    });

    rubyScript.stderr.on('data', function (data) {
        console.error('Error:', data.toString());
    });

    rubyScript.on('close', function (code) {
        res.send(htmlResult);
    });
});

let mongoosesToObject = function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

const fs = require('fs');

app.get('/data_shoes', async (req, res) => {
    let data = mongoosesToObject(await shoes.findOne({ _id: `6440c4c01b0411e37bc11cef` }));
    res.send(data);
});


app.listen(3000, () => console.log('Server started on port 3000'));