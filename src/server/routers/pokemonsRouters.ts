import { Router } from "express";
import { getPokemons } from "../controllers/pokemonControllers.js";

// eslint-disable-next-line new-cap
const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemons);

export default pokemonsRouter;
