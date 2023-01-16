const express = require('express');
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000    // in place of 3000 you can app any port you want like-3300 or 3333 or 4000 etc..

//Assets
app.use(express.static('public'));
app.get('/',(req, res) =>{
    res.render('home')
})

//set template engine

app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.listen(PORT, ()=>{
    console.log(`server is running on hello port ${PORT}`)
})
