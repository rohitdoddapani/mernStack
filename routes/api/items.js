const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@route  GET api/items
router.get('/', (req,res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
})

//@route  POST api/items/designer
router.post('/designer', (req,res) => {
    console.log('body:',req.body);
    const newItem = new Item({
        field: req.body.field,
        email: req.body.email,
        password: req.body.password,
        d_project_cou: req.body.d_project_cou,
        describes: req.body.describes,
        education: req.body.education
    });
    newItem.save().then(item => res.json(item))
});

//@route  POST api/items/maker
router.post('/maker', (req,res) => {
    console.log('body:',req.body);
    const newItem = new Item({
        field: req.body.field,
        email: req.body.email,
        password: req.body.password,
        m_project_cou: req.body.m_project_cou,
        materials: req.body.materials,
        location: req.body.location
    });
    newItem.save().then(item => res.json(item))
});

//@route  POST api/items/both
router.post('/both', (req,res) => {
    console.log('body:',req.body);
    const newItem = new Item({
        field: req.body.field,
        email: req.body.email,
        password: req.body.password,
        d_project_cou: req.body.d_project_cou,
        describes: req.body.describes,
        education: req.body.education,
        m_project_cou: req.body.m_project_cou,
        materials: req.body.materials,
        location: req.body.location
    });
    newItem.save().then(item => res.json(item))
});

//@route  DELETE api/items/:id
router.delete('/:id', (req,res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router