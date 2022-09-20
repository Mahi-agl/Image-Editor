const express = require('express');
const router = express.Router();
const Model = require('../models/userModel')

router.post('/add', (req, res) => {
    // Add Operation 
    new Model(req.body).save() // promise
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    });
})

router.get('/getall',(req, res) => {
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);

    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    });
})

//':' colon denotes url paramater
router.get('/getbyusername/:username', (req, res) =>{
    console.log(req.params.username);
    Model.find({username: req.params.username})
    .then((result) => {
        console.log(result);
        res.json(result);

    })
    .catch((err) => {
        console.log(err);
        res.json(err);
        
    });
})
router.delete('/delete/:id', (req, res)=> {

    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);

    })
    .catch((err) => {
        res.status(500).json(err);
    });
})

router.put('/update/:id', (req, res) => {

    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.json(result);

    })
    .catch((err) => {
        res.status(500).json(err);
    });
})

//exporting
module.exports = router;
