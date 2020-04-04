//use postman tool to undetstand the topics with localhost urls
const express= require('express')
const http = require('http')
const hostname= 'localhost'
const morgan = require('morgan')
const port=3000
const bodyParser =require('body-parser')
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.static(__dirname+'/public'))
app.all('/dishes',(req,res,next)=>{
    res.statusCode=200
    res.setHeader('content-Type','text/plain')
    next()
})
app.get('/dishes',(req,res)=>
{
    res.end('will send all the dishes to you')
})

app.get('/dishes/:dishid',(req,res)=>
{
    res.end('will send you details of dish '+req.params.dishid)
})

app.post('/dishes',(req,res)=>
{
    res.end('i will add the dish:'+ req.body.name+ 'with details'+req.body.description)
}) 

app.post('/dishes/:dishid',(req,res)=>
{
    res.statusCode=403
    res.end('post is not supported on individual dishes such as'+req.params.dishid)
}) 

app.put('/dishes',(req,res)=>
{
    res.statusCode=403
    res.end('put operation is not supported on dishes')
}) 

app.put('/dishes/:dishid',(req,res)=>
{
    res.write('updating dish '+req.params.dishid)
    res.end('updating the dish '+req.body.name+'with details '+req.body.description)
}) 

app.delete('/dishes',(req,res)=>
{
    res.end('deleting all the dishes !')
}) 

app.delete('/dishes/:dishid',(req,res)=>
{
    res.end('deleting the dish!'+ req.params/dishid)
}) 

app.use((req,res,next)=>{
   
    res.statusCode=200
    res.setHeader('content-Type','text/html')
    res.end('<html><body>Hello world</body></html>')

})

const server = http.createServer(app)
server.listen(port,hostname,()=>{console.log('server started and listening')})