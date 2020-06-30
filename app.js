///////////////////////////// diff between let & var

/* let name = 'Satadru';
let hobbies;

if (name === 'Satadru') {
  hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);
}

function greet() {
  let age = 22;
  let name = 'Santanu';
  console.log(name, age, hobbies);
}

console.log(name, hobbies);

greet(); */

/////////////////////////// using strict

// 'use strict';

// const userName = 'Satadru';
// var undefined = 5;

// console.log(userName);

/////////////////////////// function stack
// function getName() {
//   return prompt('Your name: ', '');
// }

// function greet() {
//   const userName = getName();
//   console.log('Hello ' + userName);
// }

// greet();

const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

let person = {name: 'Satx'};

person = null;

function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

function addListener() {
  clickableBtn.addEventListener('click', function() {
    const value = messageInput.value;
    console.log(value || 'Clicked me!');
  });
}

addListenerBtn.addEventListener('click', addListener);
