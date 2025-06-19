"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldService = void 0;
class HelloWorldService {
    constructor(port) {
        this.port = port;
    }
    run() {
        this.port.print("Hola Mundo");
    }
}
exports.HelloWorldService = HelloWorldService;
