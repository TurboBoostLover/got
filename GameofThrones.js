
//Jon's Stats
let johnSnowAttack = 25;
let johnSnowHealth = 100;
let johnSnowDefense = 0;
//Jamie's stats
let jamieLannisterAttack = 35;

if (johnSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister");
} else if (johnSnowAttack < jamieLannisterAttack) {
    console.log("Jamie Lannister has better attack then Jon Snow");
}else{
    console.log("Same Attack");
}

if (johnSnowHealth <= jamieLannisterAttack){
    console.log("Jon  Snow has been slain");
} 
else {
    //johnSnowHealth = johnSnowHealth - jamieLannisterAttack
    johnSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${johnSnowHealth}`);
}
//John pick's up a shield
johnSnowDefense += 25;

if (johnSnowHealth <= jamieLannisterAttack - johnSnowDefense){
    console.log("Jon  Snow has been slain");
} 
else {
    johnSnowHealth -= (jamieLannisterAttack - johnSnowDefense);
    console.log(`Jon Snow's health is down to ${johnSnowHealth}`);
}

//Peasant throws Jon a health kit of 50: heal up!
if ((johnSnowHealth + 50) >= 100 ) {
    johnSnowHealth = 100;
} else {
    johnSnowHealth += 50;
}

