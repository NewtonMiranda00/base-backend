import mongoose from "mongoose";

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL);
mongoose.Promise = global.Promise;

export { mongoose };