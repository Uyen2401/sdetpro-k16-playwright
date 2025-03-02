const readline = require("readline-sync");
// let givenStr = readline.question("Please input a sentence: ").trim();

// if(!givenStr){
//     console.log('No input provided');
//     process.exit(1);
// }

// let individualWords = givenStr.replace(/[^a-zA-ZÀ-ỹ0-9\s]/g, "").toLowerCase().split(/\s+/);

// function groupWord(individualWords) {
//   const groupWords = {};
//   for (let i = 0; i < individualWords.length; i++) {
//     const word = individualWords[i];
//     if (groupWords[word]) {
//       groupWords[word] += 1;
//     } else {
//       groupWords[word] = 1;
//     }
//   }
//   return groupWords;
// }

// const groupWords = groupWord(individualWords);
// console.log(groupWords);

//Sửa bài tập
/**
 * IDEA
 * 0. Process the given string
 * 1.Init an object {}
 * 2.Loop over the givenStringArray
 * if(initObj[word])
 *      innitObj[word] += 1
 * else
 *      initObj[word] = 1 
 */

const givenString = getSentenceFromUser();
let individualWords = givenString.replace(/,/gi, "").split(" ");
let groupWords = groupWordFromString(individualWords);

console.log(groupWords);

function getSentenceFromUser(){
  return readline.question('Enter a sentence:')
}

function groupWordFromString(individualWords) {
  const returnedObj = {};
  for (const word of individualWords) {
    if (returnedObj[word]) {
      returnedObj[word] += 1;
    } else {
      returnedObj[word] = 1;
    }
  }
  return returnedObj;
}
