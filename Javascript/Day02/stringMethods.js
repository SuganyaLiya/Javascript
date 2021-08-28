//StringsMethods
var fruits = "apple,orange,grapes";
/*console.log(fruits);

console.log(fruits.toUpperCase());
console.log(fruits.toLowerCase());
console.log(fruits.substring(2,4));
console.log(fruits.split("p"));
console.log(fruits.trimEnd());
console.log(fruits.charAt(5));
console.log(fruits.indexOf("l"));
console.log(fruits.lastIndexOf("e"));
console.log(fruits.concat(",pineapple"));
console.log(fruits.startsWith("app"));
console.log(fruits.endsWith("apple"));
console.log(fruits.search("ran"));
console.log(fruits.match("ran"));
console.log(fruits.repeat(2));*/
// console.log(fruits.);
//Type casting
    //type checking
/*let firstname= "suganya";
let lastname="liya"
let pi="3";
let country="india";
console.log(typeof age);
console.log(typeof 3.14);
console.log(typeof "3.14");
console.log(typeof NaN);
console.log(typeof NaN);
    //type casting
console.log(parseInt(pi));
console.log(parseFloat(pi));
console.log(Number(pi));
console.log(Number(pi));
console.log(+pi);*/
//Booleans
// console.log(Boolean(NaN))
/**
 * 0
 * false
 * null
 * undefined
 * NaN
 * ""
 */
//undefined
// let first;
// console.log(first);
// //null
// first=null;
// console.log(first);

//operators
    //arthimetic
    /** 
     * +
     * -
     * *
     * /
     * +=
     * -=
     * *=
     * /=
     * 
     */
    // console.log(5+6);//11
    // console.log(5-6);//-1
    // console.log(5*6);//30
    // console.log(5/6);//0
    // let a=3;
    // a+=5  //a=a+5
    // console.log(a);//8
    // a-=5
    // console.log(a);//3
    // a*=5
    // console.log(a);//15
    // a//=5
    // console.log(a);//3
    //comparsion
    // console.log(5==6);
    // console.log(5<6);
    // console.log(5>6);
    // console.log(6===6);
    // console.log(6=="6");
    /**
     * ==
     * >
     * <
     * >=
     * <=
     * !=
     * ===
     */
    //logical
    /**
     * &&
     * ||
     * !
     */
    //  console.log(6==6  &&  5==6);
     /**
      * &&
      * true true =  true
      * true false= f
      * false true =false
      * false false =fal
      */
    //  console.log(6==6  ||  5==6);
    /**
     * ||
     * t t = t
     * f f =f
     */
    // console.log(!(5==6));
    //increment
     /**
      * ++
      */
     //pre  increment
     //post incremen
    //  var b =5;
    //  console.log(++b);
    //  console.log(b);
    //decrement
    //  b =5;
    // console.log(--b);
    // console.log(b);
    //ternary
    /**
     * ?:
     */
    // let WhichNumbwer = -5>0  ? console.log("postiive"):console.log("negative");
    // console.log(WhichNumbwer);
//windows
// alert()
// var  name = prompt("Enter your name: ")
// console.log(name);
// var  name = confirm("are you male?")
// console.log(name);
//date
let first =new Date()
console.log(first);
first =new Date("2021-05-01 03:45 PM")
console.log(first);
first =new Date()
console.log(new Date(first.getTime()+25000));//unix time
console.log(first.getUTCHours() +":"+  first.getUTCMinutes());//unix time