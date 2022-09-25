const express = require("express")
const router = express.Router();
const bcrypt = require("bcrypt")
const User = require("../schemas/User")
const Post = require("../schemas/Post")
const Comment = require("../schemas/Coment")



router.post("/api/UserCreate", async(req,res)=>{
let {username,password} = req.body
console.log("ASDASD")
User.findOne({username:username}, async (err,response)=>{
console.log ( response)
    if(response === null){

        password = await bcrypt.hash(password,10)
         const user=   await User.create({username,password})
            res.status(200).json({user:user});
    }else{

        res.json({message:"SCHNITZEL"})

    }


})






}


)
router.get("/api/GetUser", async(req,res)=>{
    let {username,password} = req.body
    User.findOne({username:username}, async (err,response)=>{

        if(response !== null){
           let match = await bcrypt.compare(password,response.password)
         console.log(match)
            if(match){
                res.json(response)
            }
        
        }else{
    
            res.json({message:"Not Found"})
    
        }
    
    
    })
    
    
    
    
    
    
    }
    
    
    )
    
router.post("/api/PostCreate", async(req,res)=>{
    const {title,text} = req.body
        
     const post= await Post.create({title,text})
        res.status(200).json({post:post});
    
    
    
    }
    
    
    )
    
    router.post("/api/CommetCreate", async(req,res)=>{
        const {username,text, postId} = req.body
            
         const comment=   await Comment.create({username,text,postId})
            res.status(200).json({comment:comment});
        
        
        
        }
        
        
        )
        


    router.get("/api/getAllComments/:id",(req,res)=>{

Comment.find({postId:req.params.id},(err,response)=>{

    res.json(response)
})
  })
  
  router.get("/api/GetPosts",(req,res)=>{
Post.find({},(err,response)=>{
    res.json(response)
})

  })
  router.get("/api/neco",(req,res)=>{

        res.json({message:"SCHNITZEL"})

    
      })
module.exports = router
