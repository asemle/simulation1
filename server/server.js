
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const massive = require("massive");
const port = 3000;
const shelfCtrl = require('./shelfCtrl.js');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.connectionString).then(db => app.set('db', db));


// app.post('/products', productsCtrl.Create)

app.get('/api/shelves', shelfCtrl.GetShelves) 



// app.put('/products', productsCtrl.Update)

// app.delete('/products', productsCtrl.Delete);




app.listen(port, function () {
    console.log("Started Server on Port " + port)
})