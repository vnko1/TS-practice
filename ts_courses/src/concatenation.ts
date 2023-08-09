// * Base Type

// type User = {
//   name: string;
//   age: number;
// }[];

// let users: User = [
//   { name: "Tom", age: 30 },
//   { name: "Jack", age: 25 },
//   { name: "Alice", age: 32 },
// ];

// {
//   let notSure: unknown = 4;
//   notSure = "hello";

//   // const num: number = notSure;
//   // num = notSure;

//  Any Type

//   let any: any;

//   any = 10;
// }

// const fetchUserData = () => "name";

// let userData: unknown = fetchUserData();

// let logUserData: string;

// if (typeof userData === "string") logUserData = userData;

// let tupleType: [string, boolean];

// // tupleType = ["hekko", false, "sd"];
// // tupleType = ["hed"];
// let arr: string[];
// arr = ["2, 3"];

// let arrTuple: [string, ...number[]];

// arrTuple = ["hello", 2];

// enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// function enumRespond(status: HttpCodes) {
//   return status;
// }

// const enum constHttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// function constEnumRespond(status: constHttpCodes) {
//   console.log(status);
// }

// let mixedType: string | number;
// mixedType = 2;
// mixedType = [];

// const concatenation = (firstWord: string, secondWord: string) => {
//   console.log(firstWord + " " + secondWord);
//   // console.log(enumRespond(HttpCodes.OK));
//   // for (let item in HttpCodes) console.log(item);
//   // for (let item in constHttpCodes) console.log(item);
// };

// const concatenation = (firstWord: string, secondWord: string | number) => {
//   console.log(firstWord + " " + secondWord);
// };

// type Dog = {
//   legs: 4;
//   bark: () => void;
// };

// type Fish = {
//   fins: 2;
//   swim: () => void;
// };

// let pet: Dog | Fish;

// // type guard function
// function isDog(pet: Dog | Fish): pet is Dog {
//   return "bark" in pet;
// }

// // Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
// if (isDog(pet)) {
//   pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
// } else {
//   pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
// }

// type Employee = { name: string; id: number };
// type Manager = { employees: Employee[] };

// type CEO = Employee & Manager;

// const ceo: CEO = {
//   name: "John",
//   id: 123,
//   employees: [{ name: "Jack", id: 234 }],
// };

// type OneOrTwo = 1 | 2;

// const one: OneOrTwo = 2;
// const one: OneOrTwo = 3;

// type Size = "s" | "m";

// function getSize(sizeS: Size) {
//   switch (sizeS) {
//     case "s":
//       return "small";
//     case "m":
//       return "medium";
//   }
// }

// getSize("s");

// const concatenation = (
//   firstWord: string | number,
//   secondWord: string | number
// ) => {
//   if (typeof firstWord === "string" && typeof secondWord === "string")
//     console.log(firstWord + " " + secondWord);

//   if (typeof firstWord === "number" && typeof secondWord === "number")
//     console.log(firstWord + secondWord);
// };

// * Return type
// const concatenationReturn = (): string | number => {
//   return "[]";
// };

// type User = { name: string; age: number };

// function getUsersAge(users: User[]): number[] {
//   return users.map((item: User) => item.age);
// }

// const users: User[] = [
//   { age: 1, name: "Alice" },
//   { age: 2, name: "Bob" },
//   { age: 3, name: "Charlie" },
// ];

// getUsersAge(users);

// * Void

// function doSomething(cb: () => void) {
//   cb();
// }
// doSomething(() => {
//   console.log("object");
// });

// * Never

// function throwError(message: string): never {
//   throw new Error(message);
// }

// * Function Type
// let foo: (arg1: string, arg2: string) => void;

// foo = (name: string, fullname: string) => console.log(name + fullname);

// type Cb = (num1: number, num2: number) => number;

// function calc(num1: number, num2: number, cb: Cb): void {
//   console.log(cb(num1, num2));
// }

// calc(1, 2, (num1, num2) => num1 + num2);

// type Cb = (...numbers: number[]) => number;

// function calc(num1: number, num2: number, cb: Cb): void {
//   console.log(cb(num1, num2));
// }

// calc(1, 2, (num1, num2) => num1 + num2);

// *Custom types

// type UserCoords = [string, string];
// type User = {
//   name: string;
//   coords: UserCoords;
// };

// const user: User = { name: "2", coords: ["2", "2"] };

enum AnimalId {
  cat = "cat",
  dog = "dog",
  fish = "fish",
}

// type Animal = {
//   [AnimalId.cat]: () => "string";
//   [AnimalId.dog]: () => "string";
//   [AnimalId.fish]: () => void;
// };

// const fish = (): Animal[AnimalId.fish] => {
//   console.log("object");
// };

// type Animals = {
//   [AnimalId.cat]: { meow: () => "string" };
//   [AnimalId.dog]: { wuf: () => "string" };
//   [AnimalId.fish]: { swim: () => undefined };
// };

// let fish: Animals[AnimalId.fish] = { swim: () => undefined };

// * Optional params and values

// function foo(value?: string) {
//   console.log(value);
// }

// foo();
// foo("2");

// type User = { name: string; age?: number };

// const user: User = { name: "John" };

// user.age = 2;
// const newUser: User = { name: "John", age: 2 };

// * Type vs Interface

// type User = { name: string; age?: number };

// type User = { surName: string };

// type UserData = User & { surname: string };

// type UserSurname = { surname: string };

// type UserData = User & UserSurname;

// interface Users {
//   name: string;
//   age?: number;
// }
// interface Worker extends Users {
//   surname: string;
// }

// interface Users {
//   surName: string;
// }
// const user: Worker = { name: "sda", surname: "kssd" };

// const user: UserData = { name: "sda", surname: "kssd" };

// type UserName = { name: string };

// interface UserAge {
//   age: number;
// }

// type UserData = UserName | UserAge;

// type UserData = UserName & UserAge;
// const user: UserData = { age: 12, name: "Asd" };

// interface User {
//   name: string;
//   age: number;
// }

// class Users implements User {
//   name = "Joe";
//   age = 2;
// }

// interface UserName {
//   name: string;
// }

// interface UserAge {
//   age: number;
// }

// class Users implements UserName, UserAge {
//   name = "Joe";
//   age = 2;
// }

// * Advanced types
// * Type guards

// type MiscType = string | number;

// function foo(a: MiscType, b: MiscType) {
//   if (typeof a === "string" && typeof b === "string") {
//     return a.toString() + b.toString();
//   }

//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
// }

// type Cat = {
//   name: string;
//   animal: number;
// };

// type User = {
//   name: string;
//   person: boolean;
// };

// type UserOrCat = Cat | User;

// function foo1(obj: UserOrCat): any {
//   if ("person" in obj) return { name: obj.name, person: obj.person };
//   if ("animal" in obj) return { animal: obj.animal, name: obj.name };
// }

// foo1({ name: "Joe", person: true });

// * Generics

// let arr: any[] = [];

// let arr2: (string | number)[] = [];

// let genArr: Array<string> = [];
// let genArr1: Array<string | number>;
// genArr1 = [1, "sds"];

// const promise: Promise<string> = new Promise((res) => {
//   setTimeout(() => {
//     res("KLG");
//   }, 1000);
// });

// promise.then((data): string => data);

// function foobar<I>(a: I[]): I[] {
//   return a;
// }

// // foobar<number>(2);
// // foobar("str");
// foobar([2]);

// function goo(a: object, b: object) {
//   return Object.assign(a, b);
// }
// const a = goo({ name: "asd" }, { age: 23 }) as { name: string; age: number };
// a.name;

// function goo<I, U>(a: I, b: U) {
//   return { ...a, ...b };
// }

// const a = goo({ name: "asd" }, { age: 23 });
// a.name;

// type Name = { name: string };
// type Age = { age: number };
// const b = goo<Name, Age>({ name: "asd" }, { age: 23 });
// b.name;

// type UserName = { name: string };
// type UserAge = { age: number };

// function goo<I extends object, U extends object>(a: I, b: U) {
//   return { ...a, ...b };
// }
// const a = goo<UserName, UserAge>({ name: "asd" }, { age: 23 });
// a.name;

// type Length = {
//   length: number;
// };

// function foo<I extends Length>(a: I) {
//   return a.length;
// }
// foo("2");
// foo([1, 2]);
// foo(2);

// function foo<I extends Array<string>>(arr: I): I {
//   return arr;
// }

// // foo([1, 2, 3]);
// foo(["1", "2", "3"]);

// enum N {
//   name = "number",
// }

// const arr = { [N.name]: 2 };

// *------------------------------------------------------------//
const concatenation = (
  firstWord: string | number,
  secondWord: string | number
): void => {
  if (typeof firstWord === "string" && typeof secondWord === "string")
    console.log(firstWord + " " + secondWord);

  if (typeof firstWord === "number" && typeof secondWord === "number")
    console.log(firstWord + secondWord);
};

export { concatenation };
