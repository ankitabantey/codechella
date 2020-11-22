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
    owner: {type: String, unique: false},
    ownerID: {type: String, unique: false},
    startDate: { type: Date, default: Date.now() },
    endDate: { type: Date },
    date: String,
    virtual: {type: Boolean},
    url: {type: String}

});


userAuthSchema.plugin(uniqueValidator);
export default mongoose.model("Events", EventSchema);