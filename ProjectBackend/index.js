const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

const connectionString = "mongodb+srv://Himani:himani@cluster0.a8nilmi.mongodb.net/?retryWrites=true&w=majority";


var Users;
var Depart;
var Soc;
var Member;
MongoClient.connect(connectionString, function(err, succ) {
    if(err) throw err;
    console.log('Db Connected');
    var db = succ.db('Project');
    Users = db.collection('Users');
    Depart = db.collection('Departmentname');
    Soc = db.collection('Society');
    Member= db.collection('Memberslist');
})

app.post('/AddUser', (req,res) => {
    // console.log(req.body);
    Users.insertOne(req.body).then((succ) => {
        res.send("ok");
    }
    )
})
app.post('/AddDepart', (req,res) => {
    // console.log(req.body);
    Depart.insertOne(req.body).then((succ) => {
        res.send("ok");
    }
    )
})
app.post('/AddSociety', (req,res) => {
    Soc.insertOne(req.body).then((succ) => {
        res.send("ok");
    }
    )
})
app.post('/Addmember', (req,res) => {
    Member.insertOne(req.body).then((succ) => {
        res.send("ok");
    }
    )
})

app.get('/getUsers', (req,res) => {
    Users.find().toArray().then((succ) => {
        res.send(succ);
    })
})
app.get('/getDepart', (req,res) => {
    Depart.find().toArray().then((succ) => {
        res.send(succ);
    })
})
app.get('/getSociety', (req,res) => {
    Soc.find().toArray().then((succ) => {
        res.send(succ);
    })
})

app.post('/getoneUsers', (req,res) => {
    Users.findOne(req.body).then((succ) => {
        //console.log(succ);
        res.send(succ);
    })
})

app.post('/deleteonedata', (req,res) => {
    console.log(req.body.id);
    var idd = new mongodb.ObjectId(req.body.id);
    Users.deleteOne({
        _id: idd
    }).then((succ) => {
        res.send('Deleted');
    })
})
app.post('/deletedept', (req,res) => {
    console.log(req.body.id);
    var idd = new mongodb.ObjectId(req.body.id);
    Depart.deleteOne({
        _id: idd
    }).then((succ) => {
        res.send('Deleted');
    })
})
app.post('/deleteSociety', (req,res) => {
    console.log(req.body.id);
    var idd = new mongodb.ObjectId(req.body.id);
    Soc.deleteOne({
        _id: idd
    }).then((succ) => {
        res.send('Deleted');
    })
})

app.listen(1200, (req,res) => {
    console.log('Server Started');
})