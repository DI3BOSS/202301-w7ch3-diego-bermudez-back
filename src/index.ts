import "./loadEnvironment.js";
import startServer from "./server/startServer.js";
import connectToDatabase from "./database/connectToDatabase.js";
import mongoose from "mongoose";
import chalk from "chalk";
import createDebug from "debug";

export const debug = createDebug("pokemons:*");

const port = process.env.PORT ?? 4000;
const mongoDdUrl = process.env.MONGODB_URL;

mongoose.set("toJSON", {
  virtuals: true,
  transform(doc, ret) {
    delete ret._id;
    delete ret.__v;
  },
});

try {
  await connectToDatabase(mongoDdUrl!);
  debug(chalk.green("Connected to data base"));

  await startServer(+port);
  debug(chalk.green(`Server listening on port ${port}`));
} catch (error) {
  debug(error.message);
}
