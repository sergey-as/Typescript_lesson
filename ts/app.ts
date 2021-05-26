// let age: number = 22;
// let age: any = 22;
// let age: number | string | boolean = 22;
//
// age = 'hello';

// function multiplier(a: number, b: number = 10):number {
//     return a * b;
// }

//let number = multiplier(10, 9);

// function multiplier(a: number, b?: number | string):void {
//     // @ts-ignore
//     console.log(a + b);
// }
// multiplier(10);

// class Car {
//     protected year: number;
//     private producer: string;
//     public power: number = 200;
//
//     constructor(year: number, producer: string, power?: number) {
//         this.year = year;
//         this.producer = producer;
//         this.power = power;
//     }
//
//     getYear() {
//         return this.year
//     }
//
//     protected setYear(newYear) {
//         this.year = newYear;
//     }
//
//     private privateTest() {
//         console.log('TEST');
//     }
// }
//
//
// class SuperCar extends Car {
//     public color: string;
//
//
//     constructor(year: number, producer: string, power: number, color: string) {
//         super(year, producer, power);
//         this.color = color;
//     }
//
//     protected setYear(newYear) {
//         console.log(newYear);
//     }
//
//     // privateTest() { // will throw and error
//     //
//     // }
// }
//
//
// let car1 = new Car(2008, 'Vaz');
// let superCar = new SuperCar(2000, 'Mazda', 444, 'red');
//
// car1.power
// car1.getYear()
//
// superCar.getYear()

// const user = {
//     name: 'Viktor',
//     age: 25,
//     laptop: {
//         model: 'Dell',
//         memory: 16
//     },
//     car: {
//         year: 2007
//     }
// }
//
// console.log(user && user.bike && user.bike.price && user.bike.price.currency);
// console.log(user?.bike?.price?.currency);
// console.log(user.bike.price.currency);

// let names1: string[] = ['Anna', 'Anton', 'Dimas'];
// let names2: Array<string> = ['Anna', 'Anton', 'Dimas'];
//
// let names3: string[] | number[] = ['Anna', 'Anton', 'Dimas'];
// let names4: Array<string | number> = ['Anna', 'Anton', 'Dimas'];
//
// names1 = ['Khrystyna'];


import {EGenders} from "./constants/genders.enum";
import {IUser} from "./models/user.interface";
import {IMinimazedUser} from "./models/userminimized.interface";

let ivan: IUser = {
    age: 22,
    name: 'Ivan',
    // gender: 'male'
    gender: EGenders.MALE

    // // cars: [{model:10}]
    // cars: [{color: 'x'}]
}

// // function logToDB(user: IUser) {
// // function logToDB(user: IMinimazedUser) {
// function logToDB(user: Partial<IUser>) {
//     console.log(user);
// }
//
// logToDB({name: 'Dimas', age: 88});
// logToDB({});

// let viktor: Partial<IUser> = {
//     age: 25,
//     name: 'Viktor',
//     // gender: 'AH-29'
//     gender: EGenders.MALE
// }

function userLogger(users: Array<IUser>): void {
    users.forEach((user) => {
        // console.log('----------------------------------------------');
        // console.log(user);
        // console.log(user.cars);
        // console.log('----------------------------------------------');

        // user.cars && user.cars.forEach((car) => {
        user.cars?.forEach((car) => {
            console.log(car.color);
        })
    })
}

userLogger([ivan]);

const keys: Array<keyof IUser> = ["age","name","cars","gender","wife"];

function getValueOfKey(key: keyof IUser) {
    console.log(ivan[key]);
}

// getValueOfKey('xxx')
getValueOfKey("age");



abstract class ACar {
    wheel: number;
    power: number;


    constructor(wheel: number, power: number) {
        this.wheel = wheel;
        this.power = power;
    }

    ride(): void{
        console.log(`Ride with ${this.power * 2} km\h`)
    }
}

// let cara = new ACar ...
class Car extends ACar{
    color: string = 'white';


    constructor(wheel: number, power: number, color?: string) {
        super(wheel, power);
        this.color = color;
    }
}

const bibizika = new Car(4,100);

bibizika.ride();


// HW
//https://github.com/VictorKmin/JS_Tasks/blob/master/TypeScript
