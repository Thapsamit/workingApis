const express = require('express')
const Datastore = require('nedb')
const db  = new Datastore('dataBase.db');
db.loadDatabase();

const app = express()
app.use(express.static('public'))
app.use(express.json({limit:'1mb'}));
app.post('/api',(req,res)=>{
    console.log(req.body)
    console.log("request received");
    const timestamp = Date.now();
    req.body.timestamp = timestamp;
    db.insert(req.body)
    res.json({
        latitude:req.body.lat,
        longitude:req.body.long,
        timestamp:timestamp
    })
})
app.get('/api',(req,res)=>{
    db.find({},(err,data)=>{
        if(err){
            res.end();
            return;
        }
        res.json(data)
    })
    console.log('send')
})
app.listen(5000,()=>{

    console.log('Server is listening...')
})