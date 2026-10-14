export const env = {
  port: Number(process.env.PORT || 3001),
  frontendOrigin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  databaseUrl: process.env.DATABASE_URL,
};
if (!Number.isInteger(env.port) || env.port < 1 || env.port > 65535)
  throw new Error("PORT must be a valid port number");
