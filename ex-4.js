//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let message;
//Start coding here
switch(lightBulbStatus){
    case "On":
        message = "Light bulb is On.";
        break;
    case "Broken":
        message = "Light bulb is Broken.";
        break;
        default:
        message ="Light bulb is Off.";
}
console.log(message);