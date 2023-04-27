import {Schema, model} from 'mongoose';

const postSchema = new Schema({
    title:String,
    content:String,
    dateCreated:Date,
    postLocation:String
});

const Post = model('post', postSchema);

export default Post;