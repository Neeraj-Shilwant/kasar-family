import mongoose, { Schema } from "mongoose";



const infoSchema = new Schema({
    

    Data: {
        type: Object,
        required: [true]
    }
    // Education: {
    //     type: String,
    //     required: [true]
    // },
    // Bloodgroup: {
    //     type: String,
    //     required: [true]
    // },
    // Age: {
    //     type: Number,
    //     required: [true]
    // }
})

const infomodel = mongoose.models.kasar || mongoose.model("kasar", infoSchema);

export default infomodel;