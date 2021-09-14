const mongoose=require('mongoose');
mongoose.model("Flight",{
    
    starting:
    {
        type:String 

    },
    ending:
    {
        type:String
        
    },
    departure:
    {
        type:String
        
    },
    return1:
    {
        type:String
        
    },
    type1:
    {
        type:String
        
    }
 });