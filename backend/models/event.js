import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { userAuthSchema } from './userAuth.js'
const schema = mongoose.Schema;

const EventSchema = schema({
    name: String,
    id: { type: String, required: true, unique: true },
    description: String,
    isVirtual: Boolean,
    location: { type: [Number] },
    hashtags: { type: [String] },
    owner: String,
    ownerID: String,
    startDate: { type: Date, default: Date.now() },
    endDate: { type: Date }

});


userAuthSchema.plugin(uniqueValidator);
export default mongoose.model("Events", EventSchema);