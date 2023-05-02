import mongoose from "mongoose";

// example JSON
//
// {
//     "name": "Quiz for backend",
//     "timestamps": {
//         "dateCreated": 1683018186170,
//         "dateUpdated": 1683018186170
//     }
// }

// 1. nested path subdocument
// The simplest type of subdocument
const quizSchema = new mongoose.Schema({
  name: { type: String },
  timestamps: {
    dateCreated: { type: Date },
    dateUpdated: { type: Date },
  },
});
