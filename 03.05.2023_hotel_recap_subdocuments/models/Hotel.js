import {Schema, model} from 'mongoose';

import {roomSchema} from './Room.js';

const hotelSchema = new Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    location: {
        address:String, 
        number:String,
        postalCode:String, //
        country:String, 
        latitude:Number, //coordinates on the map
        longitude:Number
    },
    stars:{type:Number, min:1, max:7, default:1}, //hotel offer
    amenities :{
        hasParking:{type:Boolean, default:false},
        hasWifi:{type:Boolean, default:false},
        hasSpa: {type:Boolean, default:false},
        hasGym:{type:Boolean, default:false},
        hasConferenceRoom:{type: Boolean, default:false}
    },
    rooms:[roomSchema]
});

const Hotel = model('hotel', hotelSchema);

export default Hotel;

