const person ={
name: "Mithun" ,
age: 21,
address: {
street: "88, Block B, Industrial Area. " ,
city: "Sector 62, Noida",
state:"Uttar Pradesh" ,},
};

function extractInfo(person){
    const {name,address:{street}} = person;
    console.log(name,street);
}
// error code
// const {name2,address2:{street2}} = person;
//     console.log(name2,street2);

// extractInfo(person)
