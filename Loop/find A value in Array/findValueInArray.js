let friendName = ["Ram", "Shyam", "mohan", "july", "frida"];
let notFound = true;

while(notFound && friendName.length > 0){
    if(friendName[0] === "raghav"){console.log("Found her!");
    notFound = false;
    }else{
        friendName.shift('raghav');
    }
}
