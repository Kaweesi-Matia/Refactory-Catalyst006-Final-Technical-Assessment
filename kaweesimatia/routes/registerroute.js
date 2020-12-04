
const express = require('express');
const router = express.Router();
const Registration = require("../model/registermodel")

// specify what to do when user hit the '/'(home page) route/endpoint
router.get('/', (req,res)=>{
    res.render('register', { title: 'Register' })
})
//save data  to the database
    router.post("/register",async(req,res)=>{
        
        try{
            const reges = new Registration(req.body)
            await reges.save(()=>{
                console.log("save successfully")
                // res.send('Thank you for your registration!')
                res.render('register2')
            

            })
        }
        catch(err){
            res.status(400).send("sorry something went wrong")
            console.log(err)
        }
    })

  




module.exports = router

