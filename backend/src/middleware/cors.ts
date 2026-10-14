import type { RequestHandler } from "express";
import { env } from "../config/env.ts";
export const cors: RequestHandler = (request, response, next) => {
  response.vary("Origin");
  if (request.headers.origin === env.frontendOrigin) {
    response.setHeader("Access-Control-Allow-Origin", env.frontendOrigin);
    response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  if (request.method === "OPTIONS") {
    response.sendStatus(204);
    return;
  }
  next();
};
