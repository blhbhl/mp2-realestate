const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'homyz_db'
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO login_register (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login_register WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password ], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    })
})

app.post('/sell-a-home', (req, res) => {
    const sql = "INSERT INTO seller_page (`name`, `email`, `phone_number`, `address`, `property_type`, `property_area`, `property_age`, `additional_properties`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phoneNumber,
        req.body.address,
        req.body.propertyType,
        req.body.propertyArea,
        req.body.propertyAge,
        req.body.additionalProperties
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    })
})

app.listen(3001, () => {
    console.log("Port running on port 3001");
})