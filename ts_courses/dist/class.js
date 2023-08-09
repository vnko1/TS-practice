"use strict";
class A {
    constructor() {
        //   private someAProperty = "Astr";
        this.someProperty = "Astr";
        //   public showAProperty() {
        //     console.log(this.someAProperty);
        //   }
    }
}
class B extends A {
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
    showProperty() {
        console.log(this.someProperty);
    }
}
const b = new B();
// b.showFromAProperty();
// b.showBProperty();
// b.showAProperty();
b.showProperty();
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
class Plane {
    constructor() {
        this.pilotInCabin = false;
    }
    sitInPlane() {
        this.pilotInCabin = true;
    }
}
class Maize extends Plane {
    startEngine() {
        // Запускаємо винти двигуна.
        return true;
    }
}
const plane = new Maize();
console.log(plane.sitInPlane());
//# sourceMappingURL=class.js.map