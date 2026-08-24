import { swagger } from "@elysiajs/swagger";
import Elysia from "elysia";

export const api = new Elysia({ prefix: "/api" })
  .use(swagger({ path: "/apidocs" }))
