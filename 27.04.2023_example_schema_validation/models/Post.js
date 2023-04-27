import {Schema, model} from 'mongoose';

const postSchema = new Schema({
    title:{type:String, required:true, minLength:[5,'title needs at least 5 characters before I can insert it into the database.']},
    content:{type:String, required:[true,'Why no content?']},
    dateCreated:{type:Date, default:Date.now},
    postLocation:{type:String, enum:{
        values:['FRONTPAGE', 'SUBSCRIBERPAGE'],//only these values are allowed to be inserted in the database
        message:'{VALUE} is not supported'
    }},
    tags:{type:[String] , validate:{
         validator:v => Array.isArray(v) && v.length > 0, //needs to return true when valid
         message:props => `${props.value} is not a valid array` //message if it isn't valid
    }}
});

const Post = model('post', postSchema);

export default Post;