"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Routes(instance, _option, done) {
    instance.get("/test", async (req, res) => {
        return res.send({ message: "Test This shit up", name: "Bryan Gonzales" });
    });
    done();
}
exports.default = Routes;
