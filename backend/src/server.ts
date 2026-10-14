import { app } from "./app.ts";
import { env } from "./config/env.ts";
import { registerShutdown } from "./utils/shutdown.ts";
const server = app.listen(env.port, () =>
  console.log(`RBN API listening on port ${env.port}`),
);
registerShutdown(server);
