export default abstract class Application {
  abstract setup(): Promise<void> | void;
}
