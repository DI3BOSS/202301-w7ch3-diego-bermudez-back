import { model, Schema } from "mongoose";

const pokemonSchema = new Schema({
  number: Number,
  name: String,
  type: String,
  image: String,
  animation: String,
});

const Pokemon = model("Pokemon", pokemonSchema, "Pokeboss");

export default Pokemon;
