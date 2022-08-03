require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const ipfsClient = require('ipfs-http-client');
const bodyparser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const ejs = require('ejs');
const routes = require("./routes");
var cors = require('cors');

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true })
.then(() => {
	console.log('connected to MDB');
	// middleware for express to read json request
	app.use(express.json())
	// prepend routes with /api
	app.use('/api', routes);
})

// Connect to IPFS
const ipfs = ipfsClient({host : 'localhost',port: '5001',protocol:'http'});
const app = express();

app.use(cors());

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(fileUpload());

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('YOU IN THE ROOT FAM');
});

app.post('/uploadFile',(req,res) => {
    const file = req.files.file;
    const fileName = req.body.fileName;
    const filePath = 'files/'+fileName;

    file.mv(filePath,async(err)=>{
        if(err){
            console.log("error : while uploading file");
            return res.status(500).send(err);
        }
        const fileHash = await addIpfsFile (fileName,filePath);
        fs.unlink(filePath,(err)=>{
            if(err) console.log(err);
        })
        res.send({fileName,fileHash});
    })
});

app.post('/mintcollection', (req,res) => {

})

const addIpfsFile = async (fileName,filePath)=>{
    const file = fs.readFileSync(filePath);
    const fileAdded = await ipfs.add({path: fileName,content:file});
    const {cid} = fileAdded;
    return cid;
}

const PORT = 6900;
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});