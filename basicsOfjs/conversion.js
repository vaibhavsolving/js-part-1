let score = 33;
let map = "vaibhav";
let b7 = '7';            //'' or  " " ye dono string mai consider hoga
let b8 = null;                      //null object ka type hota h;
console.log(typeof(score));
console.log(typeof(map));
console.log(typeof(b7));
console.log(typeof(b8));

// console.log(typeof (score,map,b7,b8));

//CONVERSION
let ValueInInteger = Number(b7);      //b7 int bn chuka h;

console.log(ValueInInteger);
console.log(typeof ValueInInteger);


//"33" --> 33
//"323asd" --> NaN
//NULL --> 0



let ram = 4;    //if ram="";  o/p-->false
let goInBoolean = Boolean(ram);
console.log(goInBoolean);



let someNumber = 555;
let NumToString = String(someNumber);
console.log(NumToString);
console.log(typeof NumToString);

console.log("4" == 4);
console.log("4" === 4);


//*************************************************** */

//String
const name = "taibhav";
const name1 = name.toUpperCase();
const age = 21;
console.log(`My name is ${name1} and at this age ${age} i donn't like anything easily`);

console.log(name.charAt('a'));     //charAt() mai index likhte h ye wrong h
console.log(name.charAt(4));
console.log(name.indexOf('b'));

var name2 = name.substring(0,4);       // small String, ka 's'
console.log(name2);

var name3 = name.slice(-7,3);           //in order to achieve first element in -ve no. = index + 1 then -ve sign
console.log(name3);

var name4 = "           vai          ";
console.log(name4.trim());

const url = "https://vaibhav.com/maurya%30choudhary"
console.log(url.replace('%30', "-"));
console.log(name4.split("-"));