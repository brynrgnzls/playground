import Fastify, { FastifyReply, FastifyRequest } from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/", async (req, res) => {
  return res
    .status(200)
    .send({ message: "Hello World", name: "Bryan Gonzales" });
});

export default async function handler(req: FastifyRequest, res: FastifyReply) {
  await app.ready();
  app.server.emit("request", req, res);
}
