//Exercise 2
let lightBulbStatus = "On";

if (lightBulbStatus === "On") {
  console.log("Light bulb is On.");
} else {
  console.log("light bulb is off.");
}

console.log(lightBulbStatus);

lightBulbStatus = "aaa";

if (lightBulbStatus === "On") {
  console("Light bulb is On.");
} else if (lightBulbStatus === "of") {
  console.log("Light bulb is Off.");
} else if (lightBulbStatus === "Broken") {
  console.log("Light bulb is Broken.");
} else {
  console.log("Please choose the correct input (On/Off)");
}

console.log(lightBulbStatus);
