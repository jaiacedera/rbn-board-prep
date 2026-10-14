import { env } from "../config/env.ts";
import type { Health } from "../models/health.ts";
export function getHealth(): Health {
  return {
    status: "ok",
    database: env.databaseUrl ? "configured-not-verified" : "not-configured",
  };
}
