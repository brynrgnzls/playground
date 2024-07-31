import fastify, { FastifyInstance, FastifyServerOptions } from "fastify";

function Routes(
  instance: FastifyInstance,
  _option: FastifyServerOptions,
  done: Function
) {
  instance.get("/test", async (req, res) => {
    return res.send({ message: "Test This shit up", name: "Bryan Gonzales" });
  });

  done();
}

export default Routes;
