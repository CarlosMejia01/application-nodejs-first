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

//Use static css file
app.use(express.static(join(__dirname, "public")));

//Listening port
app.listen(process.env.PORT || 3000);
console.log("Server is listening on port", process.env.PORT || 3000);
