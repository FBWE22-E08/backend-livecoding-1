import {Schema} from 'mongoose';

export const roomSchema = new Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    roomSize:{type:Number, required:true}, //size in m²
    sleeps:{type:Number, min:1, required:true},
    bedSize:{type:String, enum:['DOUBLE', 'SINGLE'], default:'DOUBLE'},
    view:{type:String, enum:['SEA', 'MOUNTAIN', 'CITY', 'BEACH', 'GARDEN'], default:"SEA"}, 
    hasBalcony:{type:Boolean, required:true},
    price:{type:Number, required:true}, //price per night
    avgRating:{type:Number, min:1, max:10}
});

//pricecollection hasdiscount 

// room id :1   from 3rd may til 7th, 15 euro instead 30
// 

