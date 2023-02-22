import type { Request, Response } from "express";
import CustomError from "../../CustomError/CustomError";
import Pokemon from "../../database/models/pokemon.js";

export const getPokemons = async (req: Request, res: Response) => {
  try {
    const pokemons = await Pokemon.find({});

    res.status(200).json({ pokemons });
  } catch (error) {
    const customError = new CustomError(
      error.message as string,
      500,
      "Couldn't retrieve pokemons"
    );

    throw customError;
  }
};
