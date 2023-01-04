const express = require('express');
const User = require('../models/User');
const router = express.Router(); 


router.get('/', async (req, res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save()
   
    res.send(req.body);
} )
// Create a User using: POST "/api/auth/". Doesn't require Auth
/*router.get("/", async (req,res)=>{
  
    try {
        const user= new User(req.body);
        await user.save();
        res.send(req.body);
    } catch (e) {
        res.send('error');
    }
    
    }
)*/

module.exports = router