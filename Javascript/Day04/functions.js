//Function
    //function declartion
 //   function test(){
       // console.log("test called");
   // }
    //est(); //function calling
    //function without parameter and return
    //function add(a,b){
        
       // var c=a+b;
      /// return c;
   // }
   // console.log(add(2,3));
    // function square (){
    //     let num = 5;
    //     let sq =num*num;
    //     console.log(sq);
    // }
    // square()
    //function returning value
    // function square (){
    //     let num = 5;
    //     let sq =num*num;
    //     return sq;
    // }
    // console.log(square());
    //function parameter
    //  function square (num){
    //     let sq =num*num;
    //     return sq;
    // }
    // console.log(square(6));
    //f2 parameter
    // function multiple (num1,num2){
    //     let sq =num1*num2;
    //     return sq;
    // }
    // console.log(multiple(6,5));
    //fn many parameter
    // function addMultiple(arr){
    //     let sum=0;
    //     for(let i=0;i<arr.length;i++){
    //         sum=sum+arr[i]
    //     }
    //     return sum;
    // }
    // console.log(addMultiple([1,2,3,4,5]));
    //fn unlimited parameter
        //regular fn
       // console.log(addMultiple(1,2,3,4,5,6,7,8,9));
          //  console.log(addMultiple(1,2,3,4,5,6,7,8,9,10));
       //  function addMultiple(){
              //  let sum=0;
            //    for(let i=0;i<arguments.length;i++){
             //       sum=sum+arguments[i]
             //   }
              //  return sum;
        //    }
            
    //anaymous fn
    // const add =function(){
    //     console.log("analmous");
    // }
    // console.log(add(5,4));
    // //expression fn
    // const adda = function(num1,num2){
    //     return num1+num2;
    // }
    // console.log(adda(5,5));
    //self invoking fn //IIFE
    // (function(n){
    //     console.log(n*n);
    // })(5);
    //arrow fn
    // const add = (num1,num2)=>num1+num2;
    // const add = (num1,num2)=>{
    //    return  num1+num2;
    // }
    // console.log(add(9,10));
        //arraow fn
        // const sumAllnums = (...args)=>{
        //     let sum=0;
        //         for(let i=0;i<args.length;i++){
        //             sum=sum+args[i]
        //         }
        //         return sum;
        // }
        // console.log(sumAllnums(1,2,3,4,5,6,7,8,9));
        // console.log(sumAllnums(1,2,3,4,5,6,7,8,9,10));
    //default paramter
   // function lastName (firstName ="teest" ,age =20){
        //return `${firstName} lastName  ${age}`
   // }
    //console.log(lastName("changes",30));
    //function declartion versus arrow fn

         
         
          
          
    
     //exercise 1 
     //declare a function fullname and print your full name
     // function fullname(){
        //     console.log("suganyaliya")
       //  }
        // fullname();
//

     //declare a function fullName and it takes paramter firstname,lastname asa a parameter and it returns your fullName
     // function fullname(firstname,lastname){
            // var a=firstname+lastname;
           // return a;
         //}
         // console.log(fullname("liya","arun"));
         
          

     //temperate in celsius can be converted to of using this formula f = (c*9/5)+32. find convert celius to fhrenheit


     //BMI = weight/height in cm  . write function by age 1) underweight below 18.5 2) normal weight 18.5 to 24.9 ,3) overweight 25 to 29.9 4 obeses is 30 or more
     function solve(weight, height) {
        let bmi = weight / Math.pow(height / 100, 2);
     console.log(bmi);
        let status;
        if (bmi < 18.5) {
            status = "underweight"
        } else if (bmi < 25) {
            status = "normal"
        } else if (bmi < 30) {
            status = "overweight"
        } else {
            status = "obese"
        }
     
        
        return status;
    }
     
    console.log(solve(50, 185));
     
     
     
    
     // Exercise 2 
     // Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
      //  console.log(solveQuadratic()) // {0}
        //console.log(solveQuadratic(1, 4, 4)) // {-2}
        //console.log(solveQuadratic(1, -1, -2)) // {2, -1}
        //console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
        //console.log(solveQuadratic(1, 0, -4)) //{2, -2}
        //console.log(solveQuadratic(1, -1, 0)) //{1, 0}

        let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
       
     //Write date show datatimes in format 08/01/2020 04:08
        //showDateTime()
        //08/01/2020 04:08    


   // *Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
        //evensAndOdds(100);
       // The number of odds are 50.
        //The number of evens are 51.
   // */
   /**
    * Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

        userIdGeneratedByUser()
        'kcsy2
        SMFYb
        bWmeq
        ZXOYh
        2Rgxf
        '
        userIdGeneratedByUser()
        '1GCSgPLMaBAVQZ26
        YD7eFwNQKNs7qXaT
        ycArC5yrRupyG00S
        UbGxOFI7UXSWAyKN
        dIV0SSUTgAdKwStr
        '
    *Write a function generateColors which can generate any number of hexa or rgb colors.

        console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
        console.log(generateColors('hexa', 1)) // '#b334ef'
        console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
        console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    
    
        *Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

        console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
        ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
        console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
        ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
        console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
        'Not Found'

    */
       
        
        







        