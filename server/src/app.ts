import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(`${process.env.MONGODB_URI}`);

app.get("/", (req, res) => {
  res.send("E-Bike Shop Server is running");
});

app.listen(process.env.PORT);
