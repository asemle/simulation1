
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const massive = require("massive");
var port = process.env.PORT || 8080;
const shelfCtrl = require('./shelfCtrl.js');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));
} else {
    app.use(express.static('./../public/'))
}
massive(process.env.connectionString).then(db => app.set('db', db));


app.post('/api/bin/:id', shelfCtrl.addToBin)

app.get('/api/shelves', shelfCtrl.getShelves) 

app.get('/api/shelves/:shelf', shelfCtrl.getShelf)

app.get('/api/bin/:id', shelfCtrl.getBin)

app.put('/api/bin/:id', shelfCtrl.updateBin)

app.delete('/api/bin/:id', shelfCtrl.deleteBin)
// app.put('/products', productsCtrl.Update)

// app.delete('/products', productsCtrl.Delete);




app.listen(port, function () {
    console.log("Started Server on Port " + port)
})