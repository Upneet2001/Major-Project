const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

const connectionString =
  "mongodb+srv://Himani:himani@cluster0.a8nilmi.mongodb.net/?retryWrites=true&w=majority";

var Users, Depart, Soc, Member, Event, Adminn, Apply, Chat,About,Logo,Register,Feedback,Winner;
MongoClient.connect(connectionString, function (err, succ) {
  if (err) throw err;
  console.log("Db Connected");
  var db = succ.db("Project");
  Adminn = db.collection("AdminLogin");
  Users = db.collection("Users");
  Depart = db.collection("Departmentname");
  Soc = db.collection("Society");
  Member = db.collection("Memberslist");
  Event = db.collection("EventDetails");
  Apply = db.collection("Applysociety");
  Chat = db.collection("Chat");
  About= db.collection("Aboutus");
  Logo = db.collection("Logosoc");
  Register = db.collection("EventRegistrations");
  Feedback = db.collection("Feedback");
  Winner = db.collection("Winners");
});

// app.get('/AddAdmin', (req,res) => {
//     Adminn.insertOne({
//         userID:'admin',
//         Password:'123456',
//     }).then((succ) => {
//         res.send(succ);
//     })
// })

app.post("/LoginAdmin", (req, res) => {
  Adminn.findOne({
    userID: req.body.Name,
    Password: req.body.Password,
  }).then((succ) => {
    // console.log(succ);
    res.send(succ);
  });
});

app.post("/getaboutus", (req, res) => {
  About.findOne({
    Society: req.body.Soc,
    Department: req.body.Dept,
  }).then((succ) => {
   // console.log(succ);
    res.send(succ);
  });
});

app.post("/getlogname", (req, res) => {
  var idd = new mongodb.ObjectId(req.body.Id);
  Society.findOne({
    _id: idd,
  }).then((succ) => {
   // console.log(succ);
    res.send(succ);
  });
});

app.post("/Loginstudent", (req, res) => {
  Users.findOne({
    CRN: req.body.CRN,
    Password: req.body.Password,
    Status: "Approved"
  }).then((succ) => {
    // console.log(succ);
    res.send(succ);
  });
});
app.post("/Loginstudent1", (req, res) => {
  Users.findOne({
    CRN: req.body.CRN,
    Password: req.body.Password,
    Status: "Pending"
  }).then((succ) => {
    // console.log(succ);
    res.send(succ);
  });
});
app.post("/Loginsoc", (req, res) => {
  Soc.findOne({
    userID: req.body.userID,
    // Society: req.body.Society,
    Password: req.body.Password,
  }).then((succ) => {
    // console.log(succ);
    res.send(succ);
  });
});

app.post("/getonecat", (req, res) => {
  var idd = new mongodb.ObjectId(req.body.Id);
  Soc.findOne({
    _id: idd,
  }).then((succ) => {
    res.send(succ);
  });
});


app.post("/getoneuser", (req, res) => {
  var idd = new mongodb.ObjectId(req.body.Id);
  // console.log(idd)
  Users.findOne({
    _id: idd,
  }).then((succ) => {
    res.send(succ);
    // console.log(succ);
    
  });
});


app.post("/matchuser", (req, res) => {
  var idd = new mongodb.ObjectId(req.body.Idd);
 // console.log(idd)
  Users.findOne({
    _id: idd,
  }).then((succ) => {
    res.send(succ);
   // console.log(succ);
  });
});


app.post("/getrolluser", (req, res) => {
  Users.findOne({
    CRN: crn,
  }).then((succ) => {
    res.send(succ);
  });
});

app.post("/getcoordeml", (req, res) => {
  Users.findOne({
    Name : req.body.Name1,
    CRN: req.body.cnn
  }).then((succ) => {
    res.send(succ);
    console.log(succ);
    
  });
});

app.post("/getUsers", (req, res) => {
  Users.find()
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});
app.post("/getdesg", (req, res) => {
  Member.find()
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});

app.post("/AddUser", (req, res) => {
  // console.log(req.body);
  Users.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});

app.post("/Addfeedback", (req, res) => {
  // console.log(req.body);
  Feedback.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});

app.post("/Applysoc", (req, res) => {
  // console.log(req.body);
  Apply.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});
app.post("/Registerevent", (req, res) => {
  // console.log(req.body);
  Register.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});
app.post("/GetApplysoc", (req, res) => {
  // console.log(req.body);
  Apply.find({
    Branch: req.body.Dep,
    Name: req.body.Name,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
      // console.log(succ);
    });
});
app.post("/AddDepart", (req, res) => {
  // console.log(req.body);
  Depart.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});
app.post("/AddSociety", (req, res) => {
  Soc.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});
app.post("/AddEventDetails", (req, res) => {
  Event.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});
app.post("/Addwinners", (req, res) => {
  Winner.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});
app.post("/AddLogo", (req, res) => {
  Logo.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});
app.post("/Addaboutus", (req, res) => {
  About.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});
app.post("/Addmember", (req, res) => {
  Member.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});

app.post("/showmember", (req, res) => {
  Member.find({
    Branch: req.body.Dep,
    Society: req.body.Soc,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
      //console.log(succ);
    });
});

app.post("/getmember", (req, res) => {
  Apply.find({
    Societyreg: req.body.Dep,
    Shortlist: "Shortlisted",
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});

app.post("/getmember1", (req, res) => {
  Apply.find({
    Societyreg: req.body.Dep,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});

app.post("/getabout", (req, res) => {
  About.find({
    Society: req.body.Dep,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});
app.post("/getwinner", (req, res) => {
  Winner.find({
    EventName: req.body.eventname,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});



app.post("/getlogo", (req, res) => {
  Logo.find({
    Society: req.body.Dep,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});

app.post("/getapplysoc", (req, res) => {
  Apply.find()
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});
app.get("/getDepart", (req, res) => {
  Depart.find()
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});
app.post("/geteve", (req, res) => {
    Event.find().sort({_id: -1})
      .toArray()
      .then((succ) => {
        res.send(succ);
        // console.log(succ);
      });
  });

  app.post("/getsocevent", (req, res) => {
    Event.find(
      {Society:req.body.Soc,
        Department:req.body.Dep,
      }
    ).sort({_id: -1})
      .toArray()
      .then((succ) => {
        res.send(succ);
        //  console.log(succ);
      });
  });

  app.post("/getevet", (req, res) => {
    Event.find().sort({_id: -1}).limit(3)
      .toArray()
      .then((succ) => {
        res.send(succ);
       //  console.log(succ);
      });
  });

  app.get("/getSociety", (req, res) => {
    Soc.find()
      .toArray()
      .then((succ) => {
        res.send(succ);
      });
  });

app.get("/getSociety", (req, res) => {
  Event.find()
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});
app.post("/getevents", (req, res) => {
  Event.find({
    Society: req.body.Dep,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
      // console.log(succ);
    });
});

app.post("/getfeedback", (req, res) => {
  Feedback.find({
    Society: req.body.Dep,
  }).sort({_id: -1})
    .toArray()
    .then((succ) => {
      res.send(succ);
      console.log(succ);
    });
});
app.post("/getregistrations", (req, res) => {
  Register.find({
    Society: req.body.Dep,
    EventName:req.body.Name,
  }).sort({_id: -1})
    .toArray()
    .then((succ) => {
      res.send(succ);
      console.log(succ);
    });
});

app.post("/geteventname", (req, res) => {
  var idd= new mongodb.ObjectId(req.body.ID)
  Event.find({
    _id: idd,
    Society: req.body.Dep,
  }).sort({_id: -1})
    .toArray()
    .then((succ) => {
      res.send(succ);
      console.log(succ);
    });
});

app.post("/getcursoc", (req, res) => {
  var idd= new mongodb.ObjectId(req.body.ID)
  Logo.find({
    _id: idd,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
     // console.log(succ);
    });
});

app.post("/geteven", (req, res) => {
  var idd= new mongodb.ObjectId(req.body.ID)
  Event.find({
    _id: idd,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
      // console.log(succ);
    });
});
app.post("/getaboutsoc", (req, res) => {
  var idd= new mongodb.ObjectId(req.body.ID)
  About.find({
    Society:req.body.Soc,
    Department:req.body.Dep,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
     // console.log(succ);
    });
});

app.post("/getonesoc", (req, res) => {
  var idd = new mongodb.ObjectId(req.body.Id);
 // console.log(idd);
  Soc.findOne({
    _id: idd,
  }).then((succ) => {
    res.send(succ);
  });
});

app.post("/getcurrentsoc", (req, res) => {
  var idd = new mongodb.ObjectId(req.body.Id);
  // console.log(idd);
  Logo.find({
    _id: idd,
  }).toArray().then((succ) => {
    res.send(succ);
    //console.log(succ);
  });
});



app.post("/gettlogo", (req, res) => {
  Logo.find().toArray()
  .then((succ) => {
    res.send(succ);
  });
});
app.post("/gettlogoo", (req, res) => {
  Logo.find().limit(3)
  .toArray()
  .then((succ) => {
    res.send(succ);
  });
});

app.post("/getstusociety", (req, res) => {
  Soc.find()
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});

app.post("/getoneUsers", (req, res) => {
  console.log(req.body);
  Users.findOne(req.body).then((succ) => {
    //console.log(succ);
    res.send(succ);
   // console.log(succ);
  });
});

app.post("/deleteuser", (req, res) => {
  // console.log(req.body.id);
  var idd = new mongodb.ObjectId(req.body.id);
  Users.deleteOne({
    _id: idd,
  }).then((succ) => {
    res.send("Deleted");
  });
});

app.post("/deletereguser1", (req, res) => {
  // console.log(req.body.id);
  var idd = new mongodb.ObjectId(req.body.id);
  Register.deleteOne({
    _id: idd,
  }).then((succ) => {
    res.send("Deleted");
  });
});

app.post("/deleteapply", (req, res) => {
  var idd = new mongodb.ObjectId(req.body.id);
  Apply.deleteOne({
    _id: idd,
  }).then((succ) => {
    res.send("Deleted");
  });
});

app.post("/deletewinner", (req, res) => {
 
  Winner.deleteOne({
    EventName: req.body.eventname,
  }).then((succ) => {
    res.send("Deleted");
  });
});

app.post("/deleteevent", (req, res) => {
  // console.log(req.body.id);
  var idd = new mongodb.ObjectId(req.body.id);
  Event.deleteOne({
    _id: idd,
  }).then((succ) => {
    res.send("Deleted");
  });
});

app.post("/deletefeedback", (req, res) => {
  // console.log(req.body.id);
  var idd = new mongodb.ObjectId(req.body.id);
  Feedback.deleteOne({
    _id: idd,
  }).then((succ) => {
    res.send("Deleted");
  });
});

app.post("/deletereguser", (req, res) => {
  var idd = new mongodb.ObjectId(req.body.id);
  Apply.deleteOne({
    _id: idd,
  }).then((succ) => {
    res.send("Deleted");
  });
});
app.post("/deletedept", (req, res) => {
  // console.log(req.body.id);
  var idd = new mongodb.ObjectId(req.body.id);
  Depart.deleteOne({
    _id: idd,
  }).then((succ) => {
    res.send("Deleted");
  });
});
app.post("/deleteSociety", (req, res) => {
  // console.log(req.body.id);
  var idd = new mongodb.ObjectId(req.body.id);
  Soc.deleteOne({
    _id: idd,
  }).then((succ) => {
    res.send("Deleted");
  });
});
app.post("/deletelogosociety", (req, res) => {
  Logo.deleteOne({
    Society:req.body.Name,
  }).then((succ) => {
    res.send("Deleted");
  });
});

app.post("/deleteLogo", (req, res) => {

  Logo.deleteOne({
    Society: req.body.dept,
  }).then((succ) => {
    res.send("Deleted");
  });
});



// app.post("/getalldata", (req, res) => {
//   // console.log(req.body.Id);
//   var idd = new mongodb.ObjectId(req.body.Id);
//   Users.findOne({
//     _id: idd,
//   }).then((succ) => {
//     res.send(succ);
//     console.log(succ);
//     console.log(succ.Branch);
//     Member.find({
//       Branch: succ.Branch,
//       $or: [
//         {
//           Tech: succ.Name + " (" + succ.CRN + ")",
//         },
//         {
//           Socialmedia: succ.Name + " (" + succ.CRN + ")",
//         },
//       ],
//     })
//       .toArray()
//       .then((succc) => {
//         // console.log(succc);
//         res.send(succc);
//       });
//   });
// });
app.post("/getnaam", (req, res) => {
  var idd = new mongodb.ObjectId(req.body.ID);
  Member.find({
    _id: idd,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
      console.log(succ);
    });
});
app.post("/getalldata", (req, res) => {
  console.log(req.body.Name);
  Member.find({
    $or: [
      {
        Event: req.body.Name,
      },
      {
        Coordinator: req.body.Name,
      },
      {
        Cocoordinator: req.body.Name,
      },
      {
        Pro: req.body.Name,
      },
      {
        Databaseandtech: req.body.Name,
      },
      {
        Discipline: req.body.Name,
      },
      {
        Event: req.body.Name,
      },
      {
        Tech: req.body.Name,
      },
      {
        Socialmedia: req.body.Name,
      },
      {
        Creative: req.body.Name,
      },
      {
        Content: req.body.Name,
      },
      {
        ActiveMembers: req.body.Name,
      },
      {
        Executives: req.body.Name,
      },
    ],
  })
    .toArray()
    .then((succc) => {
      res.send(succc);
      console.log(succc);
    });
});

app.post("/chatsoc", (req, res) => {
  Chat.insertOne(req.body).then((succ) => {
    res.send("ok");
  });
});

app.post("/getchat", (req, res) => {
  // console.log(req.body.Dep);
  Chat.find({
    Clubname: req.body.Dep,
  })
    .toArray()
    .then((succ) => {
      res.send(succ);
    });
});

app.post("/updatemembers", (req, res) => {
  // console.log(req.body.idd);
  var idd = new mongodb.ObjectId(req.body.idd);
  Member.updateOne(
    {
      _id: idd,
    },
    {
      $set: {
        Coordinator: req.body.Coordinator,
        Cocoordinator: req.body.Cocoordinator,
        Pro: req.body.Pro,
        Databaseandtech: req.body.Databaseandtech,
        Discipline: req.body.Discipline,
        Event: req.body.Event,
        Tech: req.body.Tech,
        Socialmedia: req.body.Socialmedia,
        Creative: req.body.Creative,
        Content: req.body.Content,
        ActiveMembers: req.body.ActiveMembers,
        Executives: req.body.Executives,
      },
    }
  ).then((succ) => {
    res.send("updated");
  });
});

app.post("/updateinfo", (req, res) => {
   console.log(req.body.idd);
  var idd = new mongodb.ObjectId(req.body.idd);
  Users.updateOne(
    {
      _id: idd,
    },
    {
      $set: {
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password,
        Contact: req.body.Contact,
        CRN: req.body.CRN,
        Branch: req.body.Branch,
        Semester: req.body.Semester,
        Gender: req.body.Gender,
      },
    }
  ).then((succ) => {
    res.send("updated");
  });
});


app.post("/updateabout", (req, res) => {
  var idd = new mongodb.ObjectId(req.body.idd);
//  console.log(req.body.idd);
  About.updateOne(
    {
      _id: idd,
    },
    {
      $set: {
        About: req.body.About,
        Vision: req.body.Vision,
        URL: req.body.URL,
        Email: req.body.Email,
        Contact: req.body.Contact,
        Address: req.body.Address,
        Facebook: req.body.Facebook,
        Instagram: req.body.Instagram,
        Twitter: req.body.Twitter,
        Faculty:req.body.Faculty,
      },
    }
  ).then((succ) => {
    res.send("updated");
  });
});

app.post('/updateuser', (req,res) => {
      // console.log(req.body.id);
      var idd = new mongodb.ObjectId(req.body.id);
      Users.updateOne({
          _id: idd
      }, {
          $set:{
              Status : "Approved",
          }
      }).then((succ) => {
          res.send('updated');
      })
  })
  app.post('/Shortlist', (req,res) => {
    var idd = new mongodb.ObjectId(req.body.id);
    Apply.updateOne({
        _id: idd
    }, {
        $set:{
            Shortlist : "Shortlisted",
        }
    }).then((succ) => {
        res.send('updated');
    })
})


  app.post('/updatesocstatus', (req,res) => {
   console.log(req.body.Name);
    Apply.updateOne({
     Name : req.body.Name, 
     Societyreg:req.body.Soc,
}, {
        $set:{
            Status : "Coordinator",
        }
    }).then((succ) => {
        res.send('updated');
    })
})
app.post('/updatesocstatus1', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "Cocoordinator",
       }
   }).then((succ) => {
       res.send('updated');
   })
})
app.post('/updatesocstatus2', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "P.R.O.",
       }
   }).then((succ) => {
       res.send('updated');
   })
})
app.post('/updatesocstatus3', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "Database And Tech Member",
       }
   }).then((succ) => {
       res.send('updated');
   })
})
app.post('/updatesocstatus4', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "Discipline Member",
       }
   }).then((succ) => {
       res.send('updated');
   })
})
app.post('/updatesocstatus5', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "Event Team Member",
       }
   }).then((succ) => {
       res.send('updated');
   })
})
app.post('/updatesocstatus6', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "Tech Team Member",
       }
   }).then((succ) => {
       res.send('updated');
   })
})
app.post('/updatesocstatus7', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "Socialmedia Member",
       }
   }).then((succ) => {
       res.send('updated');
   })
})
app.post('/updatesocstatus8', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "Creative Member",
       }
   }).then((succ) => {
       res.send('updated');
   })
})
app.post('/updatesocstatus9', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "Content Member",
       }
   }).then((succ) => {
       res.send('updated');
   })
})
app.post('/updatesocstatus10', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "Active Member",
       }
   }).then((succ) => {
       res.send('updated');
   })
})
app.post('/updatesocstatus11', (req,res) => {
  //console.log(req.body.Name);
   Apply.updateOne({
    Name : req.body.Name, 
    Societyreg:req.body.Soc,
}, {
       $set:{
           Status : "Executive",
       }
   }).then((succ) => {
       res.send('updated');
   })
})

// app.post('/updateSociety', (req,res) => {
//     console.log(req.body.id);
//     var idd = new mongodb.ObjectId(req.body.id);
//     Soc.updateOne({
//         _id: idd
//     }, {
//         $set:{
//             Name: req.body.Name,
//         }
//     }).then((succ) => {
//         res.send('updated');
//     })
// })

app.listen(1200, (req, res) => {
  console.log("Server Started");
});
















// registered students list
// Registeration page for events
//Registered students for events

//chat

//update profile
//designation + chat access
//apply for society
//aboutus==> societies panel ==> aboutus contactus feedback events
// events panel all over ==> Registerations ==> notified
