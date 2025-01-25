const express = require('express')
const router=require('./routers')
const path=require("path")
const db=require('./db/mysqlconnect')
require('dotenv/config')
const app = express()
app.use(express.urlencoded());


//Static files
app.use(express.static(path.join(__dirname,"/public")))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/dashboard.html"))
})
app.get('/kullanıcıbaşvuru',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/kullanıcıbaşvuru/index.html"))
})



//Midllewares
app.use(express.json({limit:'50mb',extended:true,parameterLimit:50000}))
app.use('/api',router)
app.listen(process.env.PORT)