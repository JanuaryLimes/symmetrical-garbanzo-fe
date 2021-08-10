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
  rest.post("/api/link/shorten", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ shortUrl: "ddd" }));
  }),
];
