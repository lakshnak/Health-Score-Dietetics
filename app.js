const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')
const fileUpload = require('express-fileupload')
const cors = require("cors"); 
const multer=require('multer');
const flash = require('connect-flash');

require('dotenv').config()

require('./config/database-connetion') 


app.use(flash());

app.set('views');  
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(__dirname))


app.use(session({
    secret: "thisismysecretkey",  
    saveUninitialized: true,
    cookie: { maxAge: 6000000 },
    resave: false,
}))

app.use(cors()); 
app.use(fileUpload())
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


//to privent store cache
app.use((req, res, next) => {
    res.set(
        "Cache-Control",
        "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
    );
    next()
})

// routes
app.use('/',userRoutes)
app.use('/admin',adminRoutes)

// // Image Upload Configuration
// const imageStorage = multer.diskStorage({
//     destination: 'images',
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
//     }
// });

// const imageUpload = multer({
//     storage: imageStorage,
//     limits: {
//         fileSize: 1000000 // 1 MB
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(png|jpg)$/)) {
//             return cb(new Error('Please upload a Image'));
//         }
//         cb(null, true);
//     }
// });

// // Bulk Image Upload
// app.post('/uploadBulkImage', imageUpload.array('images', 4), (req, res) => {
//     const files = req.files.map(file => ({
//         name: file.originalname,
//         size: file.size,
//         path: file.path
//     }));
  
//     res.send({ message: 'Files uploaded successfully', files });
//   });

// port setting
app.listen(4000,()=>
console.log('Server listening to 4000 '))  
