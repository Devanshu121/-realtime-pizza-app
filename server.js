const express = require('express');
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000    // in place of 3000 you can app any port you want like-3300 or 3333 or 4000 etc..

//Assets
app.use(express.static('public'));



//set template engine

app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

// Routes
app.get('/',(req, res) =>{
    res.render('home')
})

app.get('/cart',(req, res)=>{
    res.render('customers/cart')
})

app.get('/login',(req, res) =>{
    res.render('auth/login')
})

app.get('/register',(req, res) =>{
    res.render('auth/register')
})


app.listen(PORT, ()=>{
    console.log(`server is running on hello port ${PORT}`)
})
