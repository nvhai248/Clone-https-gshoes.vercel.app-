const express = require('express');
const app = express();




const path = require('path');

// setting environment
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup resources for client
// all images,... are provided from the file "public"
app.use(express.static(path.join(__dirname, "views")));

/* const handlebars = require('express-handlebars').create({
    defaultLayout: "main",
    extname: "hbs",
});

//setup handlebars
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src", "resources", "views")); */

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

const fs = require('fs');

app.get('/data_shoes', (req, res) => {
    fs.readFile('shoes.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    });
});


app.listen(3000, () => console.log('Server started on port 3000'));