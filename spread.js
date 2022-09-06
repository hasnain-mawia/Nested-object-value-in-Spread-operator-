
// ========================= Nested Array Nested Object ============================


let man = [{
    Hasnain:{
    name:"Hasnain Mawia",
    age : 20,
    height: 5.8,
    gender: 'Male',
    nationality: 'Pakistani',
    
},
    Osama:{
    name:"Osama khan",
    age : 18,
    height: 5.9,
    gender: 'Male',
    nationality: 'Pakistani',
    
},
    Talha:{
    name:"Talha Gous",
    age : 22,
    height: 5.4,
    gender: 'Male',
    nationality: 'Pakistani',
    
},
    Usman:{
    name:"Usman lakhani",
    age : 21,
    height: 4.9,
    gender: 'Male',
    nationality: 'Pakistani',
    
}

// ========================= /Nested Array Nested Object ============================



}]
// ========================= Using Spread operator ============================
 

let a = { ...man[0].Hasnain};
console.log(a);
let b ={...man[0].Osama};
console.log(b);
 let c = {...man[0].Talha};
console.log(c);
let d = {...man[0].Usman};
console.log(d);

// ========================= /Using Spread operator ============================




