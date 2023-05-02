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

// 2. nested subdocument
// The simplest type of subdocument
const timestampSchema = new mongoose.Schema({
  dateCreated: { type: Date },
  dateUpdated: { type: Date },
});

const quizSchema = new mongoose.Schema({
  name: { type: String },
  timestamps: timestampSchema,
});
