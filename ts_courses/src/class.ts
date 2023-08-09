class A {
  //   private someAProperty = "Astr";
  // protected someProperty = "Astr";
  //   public showAProperty() {
  //     console.log(this.someAProperty);
  //   }
}

// class B extends A {
//   private someBProperty = "Bstr";
//   showProperty() {
//     console.log(this.someProperty); // Помилка: 'someProperty' можна викликати лише в класі A
//   }

//   showFromAProperty(this: A) {
//     this.showAProperty();
//   }

//   showBProperty() {
//     console.log(this.someBProperty);
//   }
//   showProperty() {
//     console.log(this.someProperty);
//   }
// }

// const b = new B();
// b.showFromAProperty();
// b.showBProperty();
// b.showAProperty();
// b.showProperty();
// b.someProperty

// class House {
//   private type: string;
//   private street: string;

//   constructor(type: string, street: string) {
//     this.type = type;
//     this.street = street;
//   }
// }
// class House {
//   constructor(private type: string, private street: string) {
//     // this.type = type;
//     // this.street = street;
//   }

//   get info() {
//     return this.street;
//   }
// }

// const house = new House("big", "Drahom");

// console.log(house.info);

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor(public name: string, public age: number) {
//     if (this.age < 28) {
//       throw new Error("Pilot too young");
//     }
//   }

//   greet(phrase: string): void {
//     console.log(phrase + " " + this.name);
//   }

//   flyMessage(): void {
//     console.log("Літак набрав висоту, всім приємного польоту!");
//   }
// }

// const pilot = new Pilot("Anthony", 32);

// pilot.greet("Вас вітає капітан корабля");
// pilot.flyMessage();
// abstract class Plane {
//   protected pilotInCabin = false;

//   public sitInPlane() {
//     this.pilotInCabin = true;
//   }

//   public abstract startEngine(): boolean;
// }

// class Maize extends Plane {
//   public startEngine() {
//     // Запускаємо винти двигуна.

//     return true;
//   }
// }

// const plane = new Maize();
// console.log(plane.sitInPlane());

// class Captain {
//   constructor(public name: string) {}
// }

// class Ship {
//   constructor(private captain: Captain) {}

//   getCaptain(): void {
//     console.log(this.captain);
//   }
// }
// const ship = new Ship(new Captain("Joe"));
// ship.getCaptain();

// class Captain {
//   constructor(public name: string) {}
// }

// class Ship {
//   //   private captain: Captain = { name: "" };
//   private static captain: Captain;

//   setCaptain(name: string) {
//     Ship.captain = new Captain(name);
//   }

//   sink() {
//     console.log(
//       `Ship is sinking! Captain ${Ship.captain.name} goes down with the ship.`
//     );
//   }
// }

// const ship = new Ship();
// ship.setCaptain("John");
// ship.sink();
// console.log(ship);

// class App {
//   private static instance: App;

//   constructor() {
//     if (!App.instance) {
//       App.instance = this;
//     }

//     return App.instance;
//   }

//   // ...
// }

// class Car {
//   constructor(
//     public model: string,

//     public year: number,

//     public color: string
//   ) {}
// }

// class CarBuilder {
//   private model: string = "";

//   private year: number = 0;

//   private color: string = "";

//   setModel(model: string): CarBuilder {
//     this.model = model;

//     return this;
//   }

//   setYear(year: number): CarBuilder {
//     this.year = year;

//     return this;
//   }

//   setColor(color: string): CarBuilder {
//     this.color = color;

//     return this;
//   }

//   build(): Car {
//     return new Car(this.model, this.year, this.color);
//   }
// }

// const builder = new CarBuilder();

// const car = builder
//   .setModel("Tesla Model S")
//   .setYear(2023)
//   .setColor("Red")
//   .build();
// console.log(car);
