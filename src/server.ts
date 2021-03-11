import express from "express";
import { config } from "dotenv";

config()
const { PORT } = process.env;

const app = express();

app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`))