import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
  _id: String,
  number: Number,
  name: String,
  type: String,
  image: String,
  animation: String,
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export default Pokemon;
