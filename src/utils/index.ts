function shuffle(array: any[]) {
  let currentIdx = array.length, temp, randomIndex;
  while (0 !== currentIdx) {
    randomIndex = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;
    temp = array[currentIdx];
    array[currentIdx] = array[randomIndex];
    array[randomIndex] = temp;
  }
  console.log('shuffled');
  return array;
}

function fullCopy(obj: Object) {
  return JSON.parse(JSON.stringify(obj));
}

export { shuffle, fullCopy };
