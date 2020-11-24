const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = mongoose.model('post');

router.get('/all-post',(req , res)=>{
    Post.find()
    .then(posts=>{
        res.json({posts})
    }).catch((err)=>{
        console.log(err);
    })
})



router.post('/create-post',(req,res)=>{
    const {title , body} = req.body;
    if(!title || !body){
        return res.status(422).json({error:"please add all the fields"});
    }

    const post = new Post({
        title,
        body,
    })
    post.save().then(result=>{
        res.json({post:result})
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;
