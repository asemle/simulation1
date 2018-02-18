module.exports = {
    getShelves: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.getShelves()
            .then(shelves => res.status(200).send(shelves))
            .catch((err) => res.status(500).send(err));
        
    },
    getShelf: (req, res) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.getShelf([req.params.shelf])
            .then(shelf => res.status(200).send(shelf))
            .catch((err) => res.status(500).send(err));
    },
    addToBin: (req, res) => {
        console.log(req.body)
        const dbInstance = req.app.get('db');
        dbInstance.addBin([req.body.shelf, req.body.number, req.body.name, req.body.price])
        .then(bin => res.status(200).send(bin))
            .catch((err) => console.log(err))
    },
    getBin: (req, res) => {
        const dbInstance = req.app.get('db');
        let shelf = req.params.id.split('')[0];
        let number = req.params.id.split('')[1];
        dbInstance.getBin([shelf, number])
        .then(bin => res.status(200).send(bin))
            .catch(err => console.log(err))
    },
    updateBin: (req, res) => {
        const dbInstance = req.app.get('db');
        let shelf = req.params.id.split('')[0];
        let number = req.params.id.split('')[1];
        dbInstance.updateBin([shelf, number, req.body.name, req.body.price])
        .then(bin => res.status(200).send(bin))
        .catch(err => console.log(err))
    },
    deleteBin: (req, res) => {
        const dbInstance = req.app.get('db');
        let shelf = req.params.id.split('')[0];
        let number = req.params.id.split('')[1];
        dbInstance.deleteBin([shelf, number])
            .then(bin => res.status(200).send(bin))
            .catch(err => console.log(err))
    }
}