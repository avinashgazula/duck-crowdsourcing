const mongoose = require('mongoose');
const CrowdsourcingSchema = new mongoose.Schema({
    timeOfDayFed: {
        type: String,
        required: true
    },
    foodFed: {
        type: String,
        required: true
    },
    locationFed: {
        type: String,
        required: true
    },
    countFed: {
        type: Number,
        required: true
    },
    quantityFed: {
        type: Number,
        required: true
    },
    repeatSchedule: {
        type: Boolean,
        required: true
    },
    repeatFor: {
        type: Number,
        required: false
    }

})
module.exports = CrowdsourceInfo = mongoose.model('CrowdsourceInfo', CrowdsourcingSchema);