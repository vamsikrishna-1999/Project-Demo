var app=require('express');
var application=app();
var cors=require('cors');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var User=require('./models/User.js');
application.use(cors());
application.use(bodyParser.json());



application.get('/user/:starting/:ending/:departure/:return1/:type1',(req,res)=>
{
   User.find({starting:req.params.starting, ending:req.params.ending,
    departure:req.params.departure, return1:req.params.return1, type1:req.params.type1}).then((search)=>{
    
        if(search)
        {
            var user=res.json(search)
            res.send(user);
        }
        else
        {
            res.sendStatus(404)
        }
    }).catch((err)=> 
	{
        if(err)
        {
            throw err;
        }
    })
});

application.get('/user/:starting/:ending/:departure//:type1',(req,res)=>
{

    //res.send(req.params.email);
    //console.log(req.params.email);
   User.find({starting:req.params.starting, ending:req.params.ending,
    departure:req.params.departure, type1:req.params.type1}).then((search)=>{
    
        if(search)
        {
            var user=res.json(search)
            res.send(user);
        }
        else
        {
            res.sendStatus(404)
        }
    }).catch((err)=> 
	{
        if(err)
        {
            throw err;
        }
    })
});




application.post('/register',(req,res)=>{ 
    console.log(req.body);
    var userData=req.body;

    var user=new User(userData);
    user.save((error,result)=>{
        if(error)
            console.log("userdata=",userData);
        console.log('Saved Data Successfully');
        res.sendStatus(200);
    })
});



const dbURI = 'mongodb+srv://vamsi:vamsi@cluster0.enahx.mongodb.net/myFourthDatabase';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => application.listen(1330))
  .catch((err) => console.log(err));