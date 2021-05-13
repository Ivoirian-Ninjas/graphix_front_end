const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();


const app = express()

app.use(cors())


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  app.post('/send', (req, res, next) => {
    const email = req.body.email
    const name = `${req.body.firstName}, ${req.body.lastName}, <${email}>`
    const phone = req.body.phone
    const budget = req.body.budget
    const help = req.body.help
  
    const mail = {
      from: name,
      to: 'cloekouadjo@gmail.com',
      subject: "Potential lead submited from graphix-ck.com",
      html: `
                <h3>Contact Info</h3>
                <div>
                    <ul>
                        <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Phone: ${phone}</li>

                    </ul>
                </div>

                <div>
                    <h3>${budget}</h3>
                    <p>${help}</p>
                </div>

            `
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })