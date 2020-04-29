//alert('hello');
/*const  surName = "familiya ";
let  b= 'elcin';
let z = 100;
let x = '85';
let y = x+z
console.log(surName + b);
console.log( typeof y);
console.log(typeof b);
console.log(z);*/

let x = 8;
let y = 5;
//let z = x + y;
//let z = x-y;
//let z = x*y;
//let z = x/y;
//let z = x%y;
//let z = x**y;

//y--;
/*laptopun qiymeti 
1500azn 30% odenilecek mebleg
eded*%ededi/100
*/
/*let price = 1500;
let sale = 30;
const a = 100;
let salePrice = price-price*sale/a;
console.log(salePrice);

let e = '10';
let b = '20';
//let c = Number(e)+Number(b);
let c = e*b;
console.log(c)*/

/*let d = new Date();
let myDate = new Date( 1975, 9, 9);
let myStrDate = new Date("September 15, 2020")
let mSecond = new Date(4999934558587);
console.log(d);
console.log(myDate);
console.log(myStrDate);
console.log(mSecond);*/

/*let d = new Date();
let myDate = new Date( 1975, 9, 9);
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
let hours = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();
let time = d.getTime();
let myTime = myDate.getTime();
console.log(d);
console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minute);
console.log(second); console.log(time); console.log(myTime);
*/

/*1956ci ilde dogulmus birinin 2029 
nece yasi olacaq*/
//let d = new Date();
let myYear = new Date(1956, 10, 9);
let year = new Date(2029, 9, 5);
//let age = d.getFullYear()-myYear.getFullYear(); //millisaniye ile cixdi
let age = year - myYear
console.log(myYear);
console.log(year);
console.log(age/1000/60/60/24); //millisaniyeni gune cevirmek
//let birthdayYear = new Date(2029);

let start = new Date( 2020, 3, 5);
let end = new Date( 2020, 9, 8);
let month = end.getMonth()-start.getMonth();
console.log(month)



