// //Set
//     //Create empty set
//     // let language =new Set();
//     // console.log(language);
//     //create set from array
//     let lang=["tanmil","english","malayalam","english2"]
//     let language =new Set(lang);
//     //adding set 
//     language.add("telegu")
//     for(var langw of language){
//         console.log(langw);
//     }
//     //delete
//     console.log(language.delete("tanmil3"));
//     console.log(language);

//     //checking
//     console.log(language.has("tanmil"));
//     //clearing
//     language.clear()
//     console.log(language)
//     //union
//     //A U B
//     // let a =[1,2,3,4,5,6,7]
//     // let b=[4,5,6,7,8,9,10]
//     // let c=a.concat(b)
//     // console.log(new Set(c));
//     //intersection
//     // let a =[1,2,3,4,5,6,7]
//     // let b=[4,5,6,7,8,9,10]
//     // let c=a.filter(x=>new Set(b).has(x))
//     // console.log(c);
//     //difference
//     //a-b
//     let a =[1,2,3,4,5,6,7]
//     let b=[4,5,6,7,8,9,10]
//     let c=a.filter(x=>!new Set(b).has(x))
//     console.log(c);
//Map
    //create empty
    let sam= new Map()
    console.log(sam);
    //create with array
    var person ={
        name:"test",
        city:"chennai"
    }
    console.log(Object.entries(person));
    let per= new Map(Object.entries(person));
    //add
    per.set("age",20)
    //get
    console.log(per.get("name"));
    //check
    console.log(per.has("named"));
    //remove
    console.log(per.delete("name"));
    console.log(per);
