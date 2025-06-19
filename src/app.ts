import { HelloWorldService } from "./domain/HelloWorldService";
import { ConsoleAdapter } from "./adapters/ConsoleAdapter";

const adapter = new ConsoleAdapter();
const service = new HelloWorldService(adapter);
service.run();
