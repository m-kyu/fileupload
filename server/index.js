const express = require('express')
const app = express()
const multer = require('multer')
// app.use('./upload', express.static('uploads'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('fileupload');

app.post('/upload', function (req, res) {
    upload(req, res, function (err) {

        if (err) {
            res.send(err)
            return
        }
        res.send('성공...')
        // 정상적으로 완료됨
    })
})

app.get('/', function (req, res) {
    res.send('index')
});
app.listen(4000)