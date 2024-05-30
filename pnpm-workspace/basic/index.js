const dayjs = require("dayjs");
const a = require("a");

console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
console.log(`From package a: ${a.getMessage()}`);
