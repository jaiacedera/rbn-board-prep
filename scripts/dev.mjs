import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
const children = [
  spawn(
    process.execPath,
    [
      fileURLToPath(
        new URL("../node_modules/vite/bin/vite.js", import.meta.url),
      ),
    ],
    { cwd: `${root}/frontend`, stdio: "inherit" },
  ),
  spawn(
    process.execPath,
    ["--env-file-if-exists=.env", "--watch", "src/server.ts"],
    { cwd: `${root}/backend`, stdio: "inherit" },
  ),
];
let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of children) child.kill();
  process.exitCode = code;
}
children.forEach((child) => {
  child.on("error", (error) => {
    console.error(error.message);
    stop(1);
  });
  child.on("exit", (code) => stop(code || 0));
});
process.on("SIGINT", () => stop());
process.on("SIGTERM", () => stop());
