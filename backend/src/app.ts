import express from "express";
import { cors } from "./middleware/cors.ts";
import { errorHandler } from "./middleware/errorHandler.ts";
import { routes } from "./routes/index.ts";
export const app = express();
app.disable("x-powered-by");
app.use(cors);
app.use(express.json({ limit: "16kb" }));
app.use("/api", routes);
app.use((_request, response) => {
  response.status(404).json({ error: "Not found" });
});
app.use(errorHandler);
