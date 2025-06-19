import { HelloWorldPort } from "../domain/Port";

export class ConsoleAdapter implements HelloWorldPort {
  print(message: string): void {
    console.log(message);
  }
}
