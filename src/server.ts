import type { Server } from "bun";
import config from "../config.json";
import { api } from "./api";
import Elysia from "elysia";
import { PORT } from "./env";

export const server = await new Promise<Server<unknown>>(resolve => {
  new Elysia({ prefix: config.server.apiEndpoint })
    .use(api)
    .listen(PORT, resolve)
});
