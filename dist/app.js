"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HelloWorldService_1 = require("./domain/HelloWorldService");
const ConsoleAdapter_1 = require("./adapters/ConsoleAdapter");
const adapter = new ConsoleAdapter_1.ConsoleAdapter();
const service = new HelloWorldService_1.HelloWorldService(adapter);
service.run();
