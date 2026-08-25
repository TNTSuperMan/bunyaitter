import { swagger } from "@elysiajs/swagger";
import Elysia from "elysia";

export const api = new Elysia()
  .use(swagger({ path: "/apidocs" }))
