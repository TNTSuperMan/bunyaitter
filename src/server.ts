import type { Server } from "bun";
import { PORT } from "./env";
import { api } from "./api";
import Elysia from "elysia";

export const server = await new Promise<Server<unknown>>(resolve => {
  new Elysia()
    .use(api)
    .listen(PORT, resolve)
});
