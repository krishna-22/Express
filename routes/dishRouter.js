const express = require('express')
const bodyparser = require('body-parser')
const dishRouter = express.Router()

dishRouter.use(bodyparser.json())

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200
    res.setHeader('content-Type','text/plain')
    next()
})

.get((req,res)=>
{
    res.end('will send all the dishes to you')
})

.post((req,res)=>
{
    res.end('i will add the dish:'+ req.body.name+ 'with details '+ req.body.description)
}) 

.put((req,res)=>
{
    res.statusCode=403
    res.end('put operation is not supported on dishes')
}) 

.delete((req,res)=>
{
    res.end('deleting all the dishes !')
}) ;

module.exports= dishRouter