import mongoose from "mongoose";

// brand: Yahama Pacific
// type: Electric
// price: 400
// isElectric: true,
// manufactureDate: 239344558
// availableColours: ["blue", "yellow", "violet"]

const guitarSchema = new mongoose.Schema({
  id: String,
  brand: String,
  type: String,
  price: Number,
  isElectric: Boolean,
  manufactureDate: Date,
  availableColors: [String],
});
