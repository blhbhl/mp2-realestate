const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods: ["POST, GET"],
        credentials: true
    }
));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'homyz_db'
})

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({Message: "We need token plase login"})
    } else {
        jwt.verify(token, "homyz-secret-key", (err) => {
            if(err) {
                return res.json({Message: "Authentication failed"})
            } else {
                next();
            }
        })
    }
}

app.get('/', verifyUser, (req, res) => {
    return res.json({Status: "Success"})
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
        if(err) return res.json({Message: "Server side Error!"});
        if(data.length > 0) {
            const name = data[0].name;
            const token = jwt.sign({name}, "homyz-secret-key", {expiresIn: '1d'});
            res.cookie('token', token);
            return res.json({Status: "Success"})
        } else {
            return res.json({Message: "No records existed!"});
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

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({Status: 'Success'})
})

app.listen(3001, () => {
    console.log("Port running on port 3001");
})