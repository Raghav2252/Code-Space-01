//console.log("We are in object testing area")
const personData ={
    name : "Keshav Kumar",
    age : 42,
    sex : "male",
    id : 1234,
    mailID : "abc@gogo.com",
    greet: function(){
       //console.log("Hello!", this.name);
    }
}
//console.log(personData)
personData.greet()
const employPhonerecord = {
    SrishtiSoni : 100,  
    LaveenaKakani : 101,
    KarnSinghKumawat : 104,
    Pantry : 105,
    ConferenceRoom :  106,
    RajatMendiratta : 107,
    KavitaVerma :108,
    KavitaSain : 109,
    PriyaSingh : 110,
    JiteshSharma :111, 
    Ikram : 112,
}
//console.log(Object.values(employPhonerecord));
//console.log(Object.keys(employPhonerecord));
//console.log(this);
function fruit(){
    return this
}
//console.log(fruit());
const person ={
    name : 'Keshav',
    netureOfDuty: function(){
        console.log(`${this.name}, perform IT work in office`)
    }
}
person.netureOfDuty();
// When a function is called as a method of an object,
// this refers to that object.
// In browser (non-strict mode) → this = window
// In strict mode → this = undefined
const person1 ={
    name : 'Raghav',
    netureOfDuty: ()=>{
        console.log(this.netureOfDuty)
    }
}
person1.netureOfDuty();