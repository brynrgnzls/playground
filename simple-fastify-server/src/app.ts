import { FastifyInstance, FastifyServerOptions } from "fastify";
import { MessageRoute } from "./rotues/index.js";
export default function Routes(
  instance: FastifyInstance,
  _option: FastifyServerOptions,
  done: Function
) {
  instance.get("/test", async (req, res) => {
    return res.send({ message: "Test This shit up", name: "Bryan Gonzales" });
  });
  instance.register(MessageRoute, { prefix: "/message" });

  done();
}
