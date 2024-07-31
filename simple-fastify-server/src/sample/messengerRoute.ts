import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from "fastify";

export default function MessageRoute(
  instance: FastifyInstance,
  option: FastifyServerOptions,
  done: Function
) {
  instance.get("/", (req: FastifyRequest, res: FastifyReply) => {
    return res.send({ Hello: "World from message Route" });
  });
}
