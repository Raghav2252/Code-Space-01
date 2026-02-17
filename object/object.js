console.log("We are in object testing area")
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
console.log(Object.values(employPhonerecord));
console.log(Object.keys(employPhonerecord));