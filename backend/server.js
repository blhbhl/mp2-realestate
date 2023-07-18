const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const crypto = require('crypto');

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

app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: 'uploads/', // Folder to store the uploaded files
    filename: (req, file, cb) => {
      // Generate a unique filename using cryptographic hash
      crypto.randomBytes(16, (err, raw) => {
        if (err) return cb(err);
        cb(null, raw.toString('hex') + Date.now() + '.' + file.originalname.split('.').pop());
      });
    }
  });
  
const upload = multer({ storage });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'homyz_db'
})

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({Message: "We need token please login"})
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
    const sql = "INSERT INTO seller_page (`name`, `email`, `phone_number`, `address`, `property_type`, `property_area`, `property_age`, `additional_properties`, `image_filename`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phoneNumber,
        req.body.address,
        req.body.propertyType,
        req.body.propertyArea,
        req.body.propertyAge,
        req.body.additionalProperties,
        req.body.image,
    ]

    db.query(sql, [values], (err, data) => {
        if(err) {
            console.error(err)
            return res.status(500).json("Error");
        }

        if(data.affectedRows > 0) {
            return res.status(201).json("Success");
        } else {
            return res.status(500).json("Failed");
        }
    })
})

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({Status: 'Success'})
})


app.get('/properties', (req, res) => {
    const sql = "SELECT * FROM seller_page WHERE `address` LIKE ?";
    db.query(sql, [!!req.query.search ? `%${req.query.search}%` : "%%"], (err, data) => {
        console.error(err)
        if(err) return res.json({Message: "Server side Error!"});
        if(data.length > 0) {
            return res.json({data})
        } else {
            return res.json({Message: "No records existed!"});
        }
    })
})


app.post('/upload', upload.any(), (req, res) => {
  // Access the uploaded file(s) information through req.files
  console.log('Uploaded files:', req.files);

  // Access other form data fields using req.body
  console.log('Form data:', req.body);

  // Save the file information and other form data in the database
  // You can use your preferred database library here

  res.json({
    message: 'Image uploaded',
    filename: req.files[0].filename
  });
});

app.listen(3001, () => {
    console.log("Port running on port 3001");
})