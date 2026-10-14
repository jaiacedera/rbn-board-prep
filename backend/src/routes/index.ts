import { Router } from "express";
import { health } from "../controllers/healthController.ts";
export const routes = Router();
routes.get("/health", health);
// Accounts, payments, curriculum, grading, tutor and contact endpoints are not implemented.
