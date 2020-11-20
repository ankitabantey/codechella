const mongoose=require('mongoose');
const schema = mongoose.Schema;
const uniqueValidator=require('mongoose-unique-validator');

const userAuthSchema = schema({
    twitterHandle:{type:String, required:true, unique:true},
    name:{type:String,required:true},
    imageUrl:{type:String, required:true }
});


userAuthSchema.plugin(uniqueValidator);
module.exports=mongoose.model("UserAuth",userAuthSchema);