// import http from "http";
import { initTRPC } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { nodeHTTPRequestHandler } from "@trpc/server/adapters/node-http";
import cors from "cors";
import { z } from "zod";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

const appRouter = router({
  find: publicProcedure.query(async () => {
    return [1, 2, 3, 4, 5];
  }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
  middleware: cors({
    origin: ["http://localhost:5173"],
  }),
});

server.listen(8080);

// const server = http.createServer((req, res) => {
//   res.write("hello");
//   res.end("world");
// });

// server.listen(8080, () => {
//   console.log("server listening on port 8080");
// });
