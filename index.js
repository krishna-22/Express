const express= require('express')
const http = require('http')
const hostname= 'localhost'
const morgan = require('morgan')
const port=3000
const app = express()
app.use(morgan('dev'))
app.use(express.static(__dirname+'/public'))
app.use((req,res,next)=>{
   
    res.statusCode=200
    res.setHeader('content-Type','text/html')
    res.end('<html><body>Hello world</body></html>')

})

const server = http.createServer(app)
server.listen(port,hostname,()=>{console.log('server started and listening')})