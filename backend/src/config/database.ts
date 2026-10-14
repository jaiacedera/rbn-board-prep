import pg from "pg";
import { env } from "./env.ts";
// Use the Supabase PostgreSQL connection string (including sslmode=require).
// No connection is attempted until a service explicitly queries the pool.
export const database = env.databaseUrl
  ? new pg.Pool({ connectionString: env.databaseUrl, max: 5 })
  : null;
