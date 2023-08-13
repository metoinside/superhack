import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: [true, "Please provide a eventname"],
        unique: true,
    },
    eventDetails: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    targetGroup: {
        type: String,
        required: [true, "Please provide a password"],
    },
    respOrg: {
        type: String,
        required: [true, "Please provide a password"],
    },
    address: {
        type: String,
        required: [true, "Please provide a address"],
    },

})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;