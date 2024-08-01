import fastify from "fastify";
import Routes from "./app.js";

const app = fastify();

app.register(Routes, { prefix: "/" });

app.listen({ host: "127.0.0.1", port: 8080 }, (err, address) => {
  console.log(`Listening to ${address}`);
});
