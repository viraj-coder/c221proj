const express = require("expire");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
        user:'',
        pass:'',
    },
    secure: true,

});