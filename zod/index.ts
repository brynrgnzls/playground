import { z } from "zod";
const schema = z.coerce.string();
schema.parse("tuna"); // => "tuna"
console.log(schema.parse(12)); // => "12"
