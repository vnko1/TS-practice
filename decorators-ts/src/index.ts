// * Class decor

// function Logger(constructor: Function) {
//   console.log(constructor);
// }

// function AddInstance(constructor: Function) {
//   constructor.prototype.name = "Name";
// }

// function DecorLogger(log: string) {
//   return function (constructor: Function) {
//     constructor.prototype.log = log;
//     console.log(log);
//   };
// }

// @Logger
// @AddInstance
// @DecorLogger("TEST")
// class Controller {
//   public id = 1;
// }

// const ins = new Controller();
// console.log((ins as any).log);

// * Methods decor
// function LogMethod(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log(
//     `Method "${name}" of class "${target.constructor.name}" is called`
//   );
// }

// class MyClass {
//   @LogMethod
//   myMethod() {
//     console.log("Hello, world!");
//   }
// }

// let obj = new MyClass(); // Method "myMethod" of class "MyClass" is called
// obj.myMethod();
