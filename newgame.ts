import inquirer from "inquirer";
//--------------------------------------INVENTORY-------------------------------------------
const inventory:string[]= [];

//--------------------------------------Your Character Properties-------------------------------------------
let yourDamageByHand = 25;
let yourDamageByWeapon = 40;
let yourHealth = 100;


//--------------------------------------Enemy properties-------------------------------------------
let enemyDamage = 19;
let enemyHealth = 75;

console.log(`You are strayed in the jungle in the search of treasure`);

//--------------------------------------starting game function-------------------------------------------

async function gameloop(){
    while (true) {
        
    



//--------------------------------------starting options-------------------------------------------

let startingOptions = await inquirer.prompt([{
    type: "list",
    name: "s_Options",
    message:"Select One route from the  given two",
    choices:["Go_Left", "Go-Right", "See_inventory", "Exit"]
}])



//--------------------------------------go right option start-------------------------------------------
if (startingOptions.s_Options ==="Go-Right" ) {
    console.log(`You found a huge ladder`);
console.log(`ladder is added to your inventory`);
inventory.push("ladder");
}
//--------------------------------------go right option end-------------------------------------------



//--------------------------------------go left option start-------------------------------------------
if(startingOptions.s_Options === "Go_Left"){


 //--------------------------------------go left option without ladder start-------------------------------------------
if(!inventory.includes("ladder")){
console.log(`Stop! look there is almost a 8 feet gap between two surfaces`);
console.log(`Go and find something to cross it safely`);
}
    //--------------------------------------go left option without ladder end-------------------------------------------



    //--------------------------------------go left option with ladder start-------------------------------------------

    if(inventory.includes("ladder")){
console.log(`You have a huge ladder you can place it horizontally and can cross it safely `);
    




    //--------------------------------------scene2 :  crossing bridge started-------------------------------------------
let scene2 = await inquirer.prompt([{
    type: "list",
    name: "s2_Options",
    message:"Cross the bridge",
    choices: ["Cross"]
}])
if(scene2.s2_Options ==="Cross"){
    console.log(`You have crossed the bridge safely`)
    inventory.pop()
}
    //--------------------------------------scene2 :  crossing bridge end-------------------------------------------





        //--------------------------------------scene3 : after crossing bridge start-------------------------------------------
let scene3 = await inquirer.prompt([{
    type: "list",
    name: "s3_Options",
    message:"You have crossed the bridge safely now what you want to do ?",
    choices: ["Explore the jungle", "No, I am rushing to find treasure"]
}])

if(scene3.s3_Options === "Explore the jungle" ){
console.log("POV: You are exploring the beauty of the jungle but suddenly you see the Beast is rushing towards you");

//---------------------------------------------options after seeing beast---------------------------------------
let scene4 = await inquirer.prompt([{
    type: "list",
    name: "s4_Options",
    message:"What you want to do ?",
    choices: ["Run", "Fight", "Find weapon"]
}])

//---------------------------------------------if select Run after seeing beast---------------------------------------
if(scene4.s4_Options === "Run" ){
    console.log("POV: You are running away from the beast but You are caught by him because beast is faster than you")
    console.log("POV: You are dead")
    process.exit(0);
}
//---------------------------------------------if select Run after seeing beast ENDED---------------------------------------


//---------------------------------------------if select fight after seeing beast---------------------------------------
if(scene4.s4_Options === "Fight" ){
    while(enemyHealth>0){
        let fight = await inquirer.prompt([{
            type: "list",
            name: "fight_button",
            message:"Try your best to kill the BEAST",
            choices: ["Attack"]
        }])
        if(fight.fight_button === "Attack"){
            let yourAttack = Math.floor(Math.random() * yourDamageByHand)
            enemyHealth = enemyHealth - yourAttack;
            console.log(`You have attacked the beast and you have done ${yourAttack} damage to him`)

            let enemyAttack = Math.floor(Math.random() * enemyDamage)
            yourHealth = yourHealth - enemyAttack;
            console.log(`The beast has attacked you and you have done ${enemyAttack} damage to you`)
            console.log("\n");
            
            console.log(`You have ${yourHealth} Health left`);
            console.log(`Beast have ${enemyHealth} Health left`);
        }
        if(yourHealth <= 0){
            console.log("POV: You are dead")
            process.exit(0);
        }
        if(enemyHealth <= 0){
            console.log("POV: You have killed the beast")
        }
    }

let scene_5 = await inquirer.prompt([{
    type: "list",
    name: "s_5Options",
    message:"Ready for the puzzle?",
    choices: ["YES"]
}])
//----------------------------slecting YES after killing beast----------------------------------------
if(scene_5.s_5Options === "YES"){
let num3 = Math.floor(Math.random() * 10)
let num4 =  Math.floor(Math.random() * 10)
let Q2 = `${num3} x ${num4} = ?`
let A2 = num3 * num4;

let quiz2 = await inquirer.prompt([{
    type: "number",
    name: "Q2",
    message: Q2
}])
if(quiz2.Q2 === A2){
    console.log("POV: You have solved the puzzle and got the key of the treasure box")
    console.log("POV: You are opening treasure box");
    console.log("Congratulations!!!  You Finally found the treasure");
process.exit(0);
}else if (quiz2.Q2 !== A2){
    console.log("YOU ARE FAILED !!!")
    process.exit(0);
}

}}
//---------------------------------------------if select fight after seeing beast ENDED---------------------------------------


//---------------------------------------------if select find weapon after seeing beast---------------------------------------
if(scene4.s4_Options === "Find weapon" ){
    console.log("POV: You are looking for a weapon to kill the beast")
    console.log("Fortunately, You found a Sword");
    inventory.push("Sword")
    while(enemyHealth> 0){
    let attackWithWeapon = await inquirer.prompt([{
        type: "list",
        name: "attackWithWeapon_button",
        message:"Try your best to kill the BEAST",
        choices: ["Attack with Sword","Check_inventory"]
    }]);
if(attackWithWeapon.attackWithWeapon_button === "Check_inventory"){
    console.log(inventory);
    
}

if(attackWithWeapon.attackWithWeapon_button === "Attack with Sword"){
    let yourAttack = Math.floor(Math.random() * yourDamageByWeapon)
    enemyHealth = enemyHealth - yourAttack;
    console.log(`You give ${yourAttack} damage to Beast`);
    console.log(`BEAST Health: ${enemyHealth}`);


    let enemyAttack = Math.floor(Math.random() * enemyDamage)
    yourHealth = yourHealth - enemyAttack;
    console.log(`BEAST give ${enemyAttack} damage to you`)
    console.log(`Your Health: ${yourHealth}`)
        
}
if(yourHealth <= 0){
    console.log("POV: You are dead")
    process.exit(0);
}
if(enemyHealth <= 0){
    console.log("POV: You have killed the beast")
}

}

//-----------------------------------------------------------scene5: solve quiz------------------------------------
let scene5 = await inquirer.prompt([{
    type: "list",
    name: "s5_Options",
    message: "Solve Puzzle to get the key of treasure box...",
    choices: ["Give me the Puzzle"]
}])
if(scene5.s5_Options ==="Give me the Puzzle" ){
let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)
let Q1 = `${num1} + ${num2}`
let A1 = num1 + num2;

let quiz = await inquirer.prompt([{
    type: "number",
    name: "Question",
    message: Q1
}])
if(quiz.Question === A1){
    console.log("POV: You have solved the puzzle")
    console.log("POV: You have got the key of treasure box")
    console.log("Congratulations!!! You Finally found the treasure ");
    process.exit(0);
}else if(quiz.Question !== A1){
    console.log("POV: You have failed to solve the puzzle")
process.exit(0);
}


}












//---------------------------------------------if select find weapon after seeing beast ENDED---------------------------------------
}
//------------------------------------scene 3: if select explore jungle-------------------------------------------
}

if(scene3.s3_Options === "No, I am rushing to find treasure"){
    console.log("POV: You are rushing to find treasure")
    console.log("OOPS!  You are in So hurry And fell from the bridge");
    console.log("DON'T BE HURRY & PLAY CALMLY NEXT TIME");
    process.exit(0);
}













    //--------------------------------------closing bracket if user have ladder-------------------------------------------
    }
    //--------------------------------------go left option end-------------------------------------------
}
//------------------------------------------ if selected inventory---------------------------------

if(startingOptions.s_Options === "See_inventory"){
    console.log(inventory);
    
}


if(startingOptions.s_Options === "Exit" ){
    console.log("You are exiting the game");
    process.exit(0);
}



//--------------------------------------main while loop ending-------------------------------------------
}
//--------------------------------------gameloop ending bracket-------------------------------------------
}
//--------------------------------------gameloop calling-------------------------------------------
gameloop();
