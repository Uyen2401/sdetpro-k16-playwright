const givenStr = 'Hello ban, tui ten Uyen, ban cung ten Uyen luon a';
let individualWords = givenStr.replace(/,/gi, '').split(' ');
const groupWords = groupWord(individualWords);
console.log(groupWords);
/**
 *
 * Hello: 1
 * ban: 2
 */
function groupWord(individualWords) {
  let worMap = new Map();
  for (const word of individualWords) {
    if (!worMap.has(word)) {
      worMap.set(word, 1);
    } else {
      worMap.set(word, worMap.get(word) + 1);
    }
  }
  return worMap;
}
