import { Router } from "express";
import { getPokemons } from "../pokemonControllers";

// eslint-disable-next-line new-cap
const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemons);

export default pokemonsRouter;
