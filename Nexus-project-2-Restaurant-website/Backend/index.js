require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const useRoute = require('./Router/router')


const port = process.env.PORT
const url = process.env.DATABASE_URL

app.use(cors({ origin: "https://nexus-project-2-restaurant-website.vercel.app", credentials: true }))
app.use(express.json())


mongoose.connect(url);

const db = mongoose.connection;


db.once("connected", () => {
    console.log("Database connected");
});

db.on("error", (err) => {
    console.error(err);
});


app.use('/router', useRoute);

app.listen(port, () => {
    console.log(`Server successfully running in port :  ${port}`)
})
