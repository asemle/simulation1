module.exports = {
    // Create: function (req, res) {
    //     db.create_product([req.body.Name, req.body.Description, req.body.Price, req.body.Imageurl], function (err, response) {
    //         if (!err) {
    //             db.read_products(function (err, products) {
    //                 res.status(200).send(products)
    //             })
    //         } else {
    //             console.log(err)
    //             res.status(422).send(res)
    //         }
    //     })
    // },
    // GetOne: function (req, res) {
    //     console.log(req.query.productid)
    //     db.read_product([req.query.productid], function (err, product) {
    //         if (!err) {
    //             res.status(200).send(product)
    //         } else {
    //             res.status(422).send(res)
    //             console.log(res);
    //         }
    //     })
    // },
    GetShelves: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.getShelf()
            .then(shelves => res.status(200).send(shelves))
            .catch(() => res.status(500).send());
        
        }
    
    // Update: function (req, res) {
    //     db.update_product([req.body.id, req.body.description], function (err, product) {
    //         if (!err) {
    //             db.read_products(function (err, products) {
    //                 res.status(200).send(products)
    //             })
    //         } else {
    //             res.status(422).send(err)
    //         }
    //     })
    // },
    // Delete: function (req, res) {
    //     db.delete_product([req.body.id], function (err, product) {
    //         if (!err) {
    //             db.read_products(function (err, products) {
    //                 res.status(200).send(products)

    //             })
    //         }
    //         else {
    //             res.status(422).send(err)
    //         }
    //     })
    // }
}