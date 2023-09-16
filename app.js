const express = require("express");
const app = express();
//const bodyParser = require ('body-parser')

const admimRoutes = require('./routes/admin')
const shopRouters= require('./routes/shop')

app.use('../views') 
app.use(express.json())

app.use('/admin',admimRoutes)
app.use('/shop',shopRouters)

app.use((req,res)=>{
    res.status(404).send({
        Error: true,
        message: "NOT FOUND"
    })
})

//app.use(bodyParser.urlencoded({extended:false}))





app.listen(3001)