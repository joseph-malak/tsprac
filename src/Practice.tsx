import axios from "axios";

// const url = "https://jsonplaceholder.typicode.com/todos/1";

// axios.get(url) .then(response =>{
//     const todo = response.data;

//     const ID = todo.ID;
//     const title = todo.Title;
//     const finished = todo.Finished;

//     console.log(`
//     The Todo with ID: ${ID}
//     Has a title of: ${title}
//     Is it Finished: ${finished}
//     `);
// });


// let now: Date = new Date();
// let colors: string[] = ['red', 'green', 'blue'];
// let myNumbers: number[] = [1,2,3];


// class Car{

// }
// let car: Car = new Car();

// let point: {x:number; y:number} = {
//     x:10,
//     y:20
// }

// //Function
// const logNumber: (i:number) => void = (i:number) => {
//     console.log(i);
// };

// const json = '{"x":10, "y": 20}';

// const logger = (message:string):void =>{

// }

// const profile = {
//     name: "alex",
//     age:20,
//     coords:{
//         lat:0,
//         lng:15
//     },
//     setAge (age:number): void{
//         this.age = age;
//     }

// };


// const {age}: {age:number} = profile;

// const {coords:{lat,lng}}: {coords: {lat:number,lng:number}} = profile;

// const carMakers: string[] = ['ford', 'toyota', 'chevy']

// const carsByMake:string[][] = [
//     [],
// ]

// //const car = carMakers[0];
// const myCar = carMakers.pop();

// carMakers.map((car:string):string =>{
//     return car.toUpperCase();
// })

// const importantDates: (Date | string)[] = [new Date(), '2040-10-10'];
// importantDates.push('2030-10-10');


//     interface Car {
//         name: string,
//         year: number,
//         broken: boolean,
//         summary():string;
//     }

//     const oldCar = {
//         name: 'civic',
//         year: 2000,
//         broken: true,
//         summary():string{
//             return `Name ${this.name}`;
//         }

//     };



//     // const printVehicle = (vehicle: {name: string; year: number; broken: boolean}):void => {
//     //         console.log(`Name: ${vehicle.name}`);
//     // };

//     const printVehicle = (vehicle: Car):void => {
//         console.log(`Name: ${vehicle.name}`);
// };

//     printVehicle(oldCar);


//     const drink = {
//         color: 'brown'
//     }


//     class Vehicle{
//         color:string = 'red';
//         drive(): void{
//             console.log("vroom");
//         }
//         constructor(color:string){
//             this.color = color;
//         }
//     }

//     class Carz extends Vehicle{
//             constructor(public wheels:number, ){

//             }
//     }

//     const vehicle = new Vehicle();






