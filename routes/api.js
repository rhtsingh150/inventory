const express = require('express');
const router = express.Router();
const models  = require('../models');
const passport = require('passport');


router.get('/all-technology' , async (req,res) => {
     let technology = await models.Technology.findAll();
     let data = 0;
     if(technology.length){
         data = 1;
     }
     res.json(technology);
});

router.get('/all-parts' , async (req,res) => {
     let allparts = await models.Part.findAll();
     res.json(allparts);
});


router.post('/transaction' , async (req ,res) => {
   let partID = req.body.partId;
   let comment = req.body.comment;
   let quantity = Number(req.body.quantity);
   let part = await models.Part.findOne({ where : { id : partID }});
   
   part.quantity = quantity;
   part.save();
   
   res.json({ status : 200 , quantity : quantity  , comment : comment });
});


router.post('/machine' , async (req ,res) => {
   let techID = req.body.technologyId;
   let machines = await models.Machine.findAll({ where : { technologyId : techID }});
   res.json(machines);
   
});

router.post('/assembly' , async (req , res ) => {
    let machineID = req.body.machineID;
    let assemblies = await models.Assembly.findAll({ where : { machineId : machineID }});
    res.json(assemblies);
});

router.post('/part' , async (req , res ) => {
    let machineID = req.body.machineID;
    let parts = await models.Part.findAll({ where : { machineId : machineID }});
    res.json(parts);
});

router.post('/add-technology' , async (req , res) => {
    let name = req.body.name;
    let technology = await models.Technology.create({ name : name });
    if (technology) res.json({status : 'success'});
    else res.json({ status : 'failed'});
});
router.post('/add-machine' , async (req , res) => {
    let name = req.body.name;
    let technologyId = req.body.technologyID;
    let machine = await models.Machine.create({ name : name , technologyId : technologyId });
    if (machine) res.json({status : 'success'});
    else res.json({ status : 'failed'});
});
router.post('/add-assembly' , async (req , res) => {
    let name = req.body.name;
    let machineID = req.body.machineID;
    let assembly = await models.Assembly.create({ name : name , machineId : machineID });
    if (assembly) res.json({status : 'success'});
    else res.json({ status : 'failed'});
});
router.post('/add-part' , async (req , res) => {
    let name = req.body.name;
    let sapcode = req.body.sapcode;
    let returnable = req.body.returnable;
    let machineID = req.body.machineID;
    let part = await models.Part.create({ name : name , sapcode : sapcode , returnable : returnable , machineId : machineID });
    if (part) res.json({status : 'success'});
    else res.json({ status : 'failed'});
});

module.exports = router;