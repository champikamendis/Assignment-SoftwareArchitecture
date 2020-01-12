const express = require('express');
const multer = require('multer');
const app = express();
const fs = require('fs');
var Tesseract = require('tesseract.js');
var cors = require('cors');

app.use(cors());

//middlewares
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const PORT = process.env.PORT | 8000;

var Storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __dirname + '/images');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

var upload = multer({
  storage: Storage
}).single('image');
//route
app.get('/upload', (req, res) => {
  res.render('index');
});

app.post('/upload', (req, res) => {
  console.log(req.file);
  upload(req, res, err => {
    if (err) {
      console.log(err);
      return res.send('Something went wrong');
    }

    var image = fs.readFileSync(
      __dirname + '/images/' + req.file.originalname,
      {
        encoding: null
      }
    );
    Tesseract.recognize(image)
      .progress(function (p) {
        console.log('progress', p);
      })
      .then(function(result) {
        console.log(result.text);
        res.json({result:result.text});
      });
  });
});

app.get('/showdata', (req, res) => {
  return res.status(200).json({
    "message":"hi"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
