import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const schema = mongoose.Schema;

const userAuthSchema = schema({
    twitterHandle:{type:String, required:true, unique:true},
    name:{type:String,required:true},
    imageUrl:{type:String, required:true },
    twitterToken: String,
    twitterTokenSecret: String
});


userAuthSchema.plugin(uniqueValidator);
export default mongoose.model("Userdetails",userAuthSchema);
export {userAuthSchema}