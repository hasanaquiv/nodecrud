const express = require('express');
const router = express.Router();
const Students = require('../models/students');

router.post("/students", async (req, res) => {
    try {
        const user = new Students(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser)
    } catch (error) {
        res.status(401).send(error)
    }
})

router.get("/students", async (req, res) => {
    try {
        const user = await Students.find();
        res.status(201).send(user)
    } catch (error) {
        res.status(401).send(error)
    }
})

router.get("/students/:id", async (req, res) => {
    // console.log(req.params.id)
    try {
        const _id = req.params.id;
        const userData = await Students.findById(_id);
        res.status(201).send(userData);
    } catch (error) {
        res.status(401).send(error);
    }
})

router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateUser = await Students.findByIdAndUpdate(_id, req.body ,{
            new : true
        });
        res.status(201).send(updateUser);
    } catch (error) {
        res.status(401).send(error);
    }
})

router.delete("/students/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const deleteUser = await Students.findByIdAndDelete(_id);
        res.status(201).send(deleteUser)
    } catch(error){
        res.status(401).send(error);
    }
})

module.exports = router

