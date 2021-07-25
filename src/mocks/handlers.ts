// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/ping", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        pong: "he he",
      })
    );
  }),
];
