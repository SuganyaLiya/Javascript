// //create an array
//     // var city = [];
//     // var city=Array();
// //creating array with values
// //  var city=["paris","goa"]
//     // var a=[1,5,6,8,9,1,2]
//     // var a = ["string",23,34.2,true,undefined,null]

// //create array using split
   //var a="apple,orange,grapes"
    //a=a.split();
    //console.log(a);
// //accessing array items using index
 var a=[1,5,6,8,9,1,2]
 console.log(a[0]);


// //accessing array without index
 //var a=[1,5,6,8,9,1,2]
 //for(var num of a){
    //if(num==5)
       // console.log(5);
 //}
// //modifying array elements
//var a=[1,5,6,8,9,1,2]
 //console.log(a);
   //  a[1]=10
    // console.log(a);
     //console.log(a.indexOf(8));
    // a[a.indexOf(8)]=10;        
    // console.log(a);
// //manipulate arrays
//     //array constructor
//     // var a =Array(10)
//     //creatingstatioc values with fill
//     // var a =Array(10).fill("x")

//     //concating aray using concat
//     //  var a =[1,2,3]
//     //  var b= [4,5,6]
//     //  var c= a.concat(b)
//     //array lenth
//         // var a =[1,2,4,4,1,2,4,5,2,1]

//     //getting index of an array
//     a = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

//         // console.log(a.indexOf("ever"));
//     //getting last iindex of array
//     // console.log(a.lastIndexOf("Ipsum"));

//     //checking array
//     // console.log(Array.isArray(a));
//     //converting array to string
//     var a =[1,2,4,4,1,2,4,5,2,1]
//     // console.log(a.toString());
//     //join array
//     // console.log(a.join(" "));
//     //slice
//     // console.log(a.slice(3,6));
//     //splice
//     // a.splice(1,3)
//     // console.log(a);
//     //add item
//     a.push(8)
//     //removing item
//     a.pop()
//     //add begining
//     a.unshift(100)
//     //remove from end
//     a.shift(100)
//     //reverse an array
//     console.log(a);
//     console.log(a.reverse());

//     //sorting of an array
//     console.log(a.sort().reverse())
//     //array of array
//   var a= [[1,2,3],[4,5,6],[7,8,9]]
//     console.log(a);
//     // console.log(a.length);
// //     console.log(b);
// // console.log(a);


//Exercise 1
 //var cart= ["milk","vegetable","tea","meat","coffee","tea","meat",]
//  console.log(cart.splice(cart.indexOf("meat"),1));
// var cart1 =[];
// for(let i=0;i<cart.length;i++){
//     if(cart[i]!="meat")cart1.push(cart[i])
// }
// cart= cart1;
//  cart.unshift("meat")
//  cart.push("sugar")
//  console.log(cart);
 //cart[cart.indexOf("tea")]="green tea";
// cart = cart.join(",").replaceAll("tea","green tea").split(",")
 //console.log(cart)
 
 var cart= ["milk","vegetable","tea","meat","coffee","tea"]


/**
 * Adding meat begginning check the cart
 * add sugar in last
 * modify tea to green tea
 */

//Exercise 2
// var ages = [19,22,19,24,20,25,26,24,25,24]
// console.log(ages.sort());
// console.log(ages[0]);
// console.log(ages);
// console.log(ages[ages.length-1]);
// console.log(ages[ages.length/2])
// var total = 0;
// for(var age of ages){
//     total=total+age
// }

// console.log(total/ages.length);

// var range=[];
// for(let i=0;i<ages.length-1;i++){
//     // console.log(ages[i+1]);
//     // console.log(ages[i]);
//     // console.log(ages[i+1]-ages[i]);
//     range.push(ages[i+1]-ages[i])
// }
// console.log(range);
// range.sort()
// console.log(range[0]);
// console.log(range[range.length-1]);
/**
 * sort the array and find min and max age
 * 
 * find the median age(one middle or two middle items diveidd by two)
 * find the average age(all item divided by numbers)
 * fins the range of age(max minus min)
 * compare the value(min-average) and (max-average)  use abs()
 */
//Exercise 3 
// find middle contries in array
// const countries=["Afghanistan","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombi","Comoros","Congo (Brazzaville)","Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor (Timor Timur)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia, The","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
// console.log(countries.length);
// console.log(countries.length/2);
// console.log(countries[countries.length/2]);

// divide the countries into two equal array if it is even.if countries is not even,one more country for the first half
 const countries=["Afghanistan","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombi","Comoros","Congo (Brazzaville)","Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor (Timor Timur)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia, The","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
// console.log(countries.length);
// len=(countries.length/2);
// console.log(len);
// if(len=(len%2==0))
//     console.log("even");
//     else
// console.log("odd");
// var firstHalf=countries.slice(0,len);
//     console.log(firstHalf);
var evenCountries=[];
var oddCountries=[];
for(let i=0;i<countries.length;i++){
    if(i%2==0){
        evenCountries.push(countries[i])
    }else{
        oddCountries.push(countries[i])
    }
}

console.log(evenCountries);;
console.log(oddCountries);

const list = [1, 2, 3, 4, 5, 6]
// first=(list.length/2);
// console.log(first);
// var firsthalf=list.slice(0,first);
// console.log(firsthalf);

const firstHalf = list.slice(0, list.length/2)
const secondHalf = list.slice(list.length/2,list.length)
console.log(firstHalf);
console.log(secondHalf);


