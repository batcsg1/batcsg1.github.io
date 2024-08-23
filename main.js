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









