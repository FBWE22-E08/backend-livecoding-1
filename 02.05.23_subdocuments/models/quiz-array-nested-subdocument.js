import mongoose from "mongoose";

// example JSON
//
// {
//     "name": "Quiz for backend",
//     "timestamps": {
//         "dateCreated": 1683018186170,
//         "dateUpdated": 1683018186170
//     },
//     "questions": [
//         {
//             question: "What is an array?"
//             correctAnswerId:
//             answers: [
//                 "An array is a list of data",
//                 "An array is like an apple",
//                 "An array is a computer game"
//             ]
//         },
//         {
//             question: "What is an expression?"
//             answers: [
//                 "An expression resolves to a value",
//                 "An expression is a facial expression",
//                 "It is cold"
//             ]
//         }
//     ],
// }

// 3. array of nested subdocuments
// The most complex type of subdocument

// because we use an array here, each document gets its own _id
const questionSchema = new mongoose.Schema({
  question: String,
  correctAnswerIndex: Number,
  answers: [String],
});

const quizSchema = new mongoose.Schema({
  name: { type: String },
  timestamps: {
    dateCreated: { type: Date },
    dateUpdated: { type: Date },
  },
  questions: [questionSchema],
});
