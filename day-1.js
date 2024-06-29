let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  playerOne.superpower = prompt("What would you like your super power to be?");

  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore}? Of course you would pick the super power of ${playerOne.superpower}, that is one amazing super power to have, lets see how it will help you beat your previous high score.`;

}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  customer.phone = prompt("What is your phone number?");

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}. With a phone number of ${customer.phone}.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};

  // Try it!
  // TODO: create a prompt to ask about a pet
  pet.name = prompt("What is your pet's name?");
  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML =  `Welcome ${pet.name} to the playground, a helpful place to find advice, meet-ups for play dates, and listings for pet friendly establishments.`;
}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  alert("hello!");
let species;
species = {};
species.name = prompt("What species is your pet?");
messageParagraph.innerHTML = `We are a species friendly environment. ${species} are always welcome. We just ask that each patron is respectful of others and their choice of pet.`;
  
}

part4.onclick = day1Part4;