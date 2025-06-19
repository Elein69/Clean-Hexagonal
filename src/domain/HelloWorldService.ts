import { HelloWorldPort } from "./Port";

export class HelloWorldService {
  constructor(private port: HelloWorldPort) {}

  run(): void {
    this.port.print("Hola Mundo");
  }
}
