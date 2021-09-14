var app=require('express');
var application=app();
var cors=require('cors');
var jwt=require('jwt-simple');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var User=require('./models/User.js');
application.use(cors());
application.use(bodyParser.json());
var post=[
    {'message1':'Welcome'},
    {'message2':'Nodejs'},
    {'message3':'Angular Material'}
]
application.get('/post',(req,res)=>{
    res.send(post);
});
application.get('/users',async (req,res)=>{
    var user=await User.find({});
    res.send(user);
});

application.get('/user/:email',(req,res)=>{

    //res.send(req.params.email);
    console.log(req.params.email);
   User.find({email:req.params.email}).then((search)=>{
    
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



application.post('/login',async (req,res)=>
{ 
    
    var userData=req.body;
    
    var user=await User.findOne({email:userData.email});
    if(!user || userData.pwd!=user.pwd)
    {
        res.status(401).send({message:'Email or password Invalid'});
        
    }   
    var paytoken={};
            var token=jwt.encode(paytoken,'123');
            res.status(200).send({token});
        
});


const dbURI = 'mongodb+srv://vamsi:vamsi@cluster0.enahx.mongodb.net/myThirdDatabase';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => application.listen(1220))
  .catch((err) => console.log(err));
//application.listen(1220);