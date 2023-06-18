const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const users = []

app.use(express.urlencoded({extended: false}))

app.post("/register", async(req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })

        console.log(users); //affiche nouvel utilisateur
        res.redirect("/login")
    } catch (e) {
        console.log(e);
        res.redirect("/register")
    }
})

const login = []

app.post("/login", async(req, res) => {

    try {
        login.push({
            email: req.body.email,
            password: req.body.password,
        })
        console.log(login); //affiche l'utilisateur utilisateur
        res.redirect("/users")
    } catch (e) {
        console.log(e);
        res.redirect("/login")
    }
})

//les access / routes
app.get('/login', (req, res) => {
    res.render("dist/index.ejs")
})

app.get('/', (req, res) => {
    res.render("home.ejs")
})

app.get('/register', (req, res) => {
    res.render("register.ejs")
})

app.get('/users', (req, res) => {
    res.render("eee.ejs")
})
//fin access / routes

app.listen(3000)
