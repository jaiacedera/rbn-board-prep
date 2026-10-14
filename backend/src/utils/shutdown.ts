import type { Server } from "node:http";
import { database } from "../config/database.ts";
export function registerShutdown(server: Server) {
  const shutdown = () => {
    server.close(() => {
      void database?.end();
    });
  };
  process.once("SIGTERM", shutdown);
  process.once("SIGINT", shutdown);
}
