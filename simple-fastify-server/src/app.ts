import { FastifyInstance, FastifyServerOptions } from "fastify";
import { MessageRoute } from "./rotues/index.js";
import fastifyCorsConfig from "./config/fastifyCorsConfig.js";
export default function routes(
  instance: FastifyInstance,
  _option: FastifyServerOptions,
  done: Function
) {
  instance.addHook("onError", (req, res, error, done) => {
    console.error(error);
    done();
  });
  instance.get("/test", async (req, res) => {
    return res.send({ message: "Test This shit up", name: "Bryan Gonzales" });
  });

  instance.register(import("@fastify/cors"), fastifyCorsConfig);

  instance.register(MessageRoute, { prefix: "/message" });

  done();
}
