var mongoose=require('mongoose');

module.exports=mongoose.model("User",
{
    name:
    {
        type:String
    },
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
    total:
    {
        type:String
    },
    type1:
    {
        type:String
    }
});