import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  first_name: String,
  last_name: { type: String, required: true },
  age: Number,
});

export default model("User", userSchema);
