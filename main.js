//FACT-BOX
//Declare fact array and values
const fact1 = "Did you know it takes at least 30 to 40 years for Monkey Puzzles to produce male or female cones.";
const fact2 = "The seeds/nuts of a Monkey Puzzle are actually edible, and have a nutty and milky flavour.";
const fact3 = "Monkey Puzzles in their native range have been recorded to live for over 1000 years.";
const fact4 = "In the native Chilean homeland of Monkey Puzzles, their wood was used to make salad bowls and salad tongs with.";
const fact5 = "Although a Monkey Puzzle is either male of female (dioecious) there are very ocassionaly trees of both sexes (monoecious).";
const facts = [fact1, fact2, fact3, fact4, fact5];

const para = document.getElementById('fact-box');

function displayFact(facts){
  const random = Math.floor(Math.random()*facts.length);
  para.textContent = facts[random];
}
//Call the display fact method
displayFact(facts);

//AGE BUTTON
const agebutton = document.getElementById("age-button");
const agePara = document.getElementById("age-contents");
const ageMessage = document.getElementById("age-message");

let age = 0;
ageMessage.hidden = true;


const ageButtonHandler = () => {
  //Hide ageMessage again once button is clicked
  ageMessage.hidden = true;
  //Clear the age message each time the button is clicked
  ageMessage.textContent = null;
  
  age++
  //Age 
  agePara.textContent = (`Age of Monkey Puzzle: ${age}`);
  ageHandler()
}
function ageHandler(){
  if (age === 10){
    /*var node = document.createTextNode(" You reached 10")
    document.getElementById("age-message").appendChild(node);*/
    ageMessage.hidden = false;
    ageMessage.textContent = "A 10 year old Monkey Puzzle will just be above grass height (40cm tall)";
  }
  else if (age === 40){
    ageMessage.hidden = false;
    ageMessage.textContent = "A 40 year Monkey Puzzle will start to produce either male or female cones, marking the beginning of its reproductive life";
  }
}

agebutton.addEventListener("click", ageButtonHandler);














