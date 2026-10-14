import type { Request, Response } from "express";
import { getHealth } from "../services/healthService.ts";
export function health(_request: Request, response: Response) {
  response.json(getHealth());
}
