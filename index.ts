// let arg1: number = 2;
// let arg2: number = 2;

// let greeting: string = "abc def";

// console.log(greeting.toLocaleLowerCase());

// console.log(arg1+arg2);

// let hero;

// function getHero() : number {
//     return 1;
// }

// function getVillain() : string {
//     return "bad hero";
// }

// hero = getHero();
// hero = getVillain();

// function addTwo(num : number) : number {
//     return num + 2;
// }

// console.log(addTwo(5));

// const loginUser = (name: string, email: string, isPaid: boolean) : boolean => {
//     return true;
// }

// export {}

// class User {
//     name: string;
//     isPaid: boolean;

//     constructor(name: string, isPaid: boolean) {
//         this.name = name;
//         this.isPaid = isPaid;
//     }

//     toString() : string {
//         return `name = ${this.name} isPaid = ${this.isPaid}`;
//     }
// }

// function createUser(name: string, isPaid: boolean) : User {
//     return new User(name, isPaid);
// }

// console.log((createUser("Relu", true)).toString());

// type Point = {
//     x: number;
//     y: number;
// }

// function printCoord(point : Point) {
//     console.log(point.x + " . " + point.y);
// }

// printCoord({x : 4, y : 5});

// type User = {
//     readonly _id: string,
//     name: string,
//     email: string,
//     isActive: boolean
// }

// let myUser: User = {
//     _id: "1234",
//     name: "john",
//     email: "j@g.com",
//     isActive: true
// }

// myUser._id

// let cars: string[] = ["bmw", "mercedes", "audi"];
// let carsIndex: Array<string> = cars.map((name, index) => {
//     return `${name} has index ${index}`;
// });
// console.log(carsIndex);

// enum myEnum {
//     V1 = "sfr",
//     V2 = 2,
//     V3 = 2.33
// }

// console.log(myEnum);

// interface A {
//     b(): string;
// }

// class B implements A {
//     private a: number;

//     b() {
//         return "bbb"
//     }

//     constructor(a: number) {
//         this.a = a;
//     }
// }

// function f<T extends number>(value: T) : T {
//     let result: T = value;
//     return result;
// }