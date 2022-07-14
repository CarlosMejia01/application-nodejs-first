import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js";

const app = express();

//Ejs Configuration
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

//Routes
app.use(indexRoutes);

//Listening port
app.listen(3000);
console.log("Server is listening on port", 3000);
