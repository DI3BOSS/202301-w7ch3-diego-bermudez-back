import express from "express";
import morgan from "morgan";
import cors from "cors";
import pokemonsRouter from "./server/routers/pokemonsRouters";

export const app = express();

app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/pokeboss", pokemonsRouter);
