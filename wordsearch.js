const transpose = function(matrix) {
    let transposedArray = [];
    for (let item of matrix[0]) {
      transposedArray.push([]);
    }
    for (let item of matrix){
      let i = 0;
      for(let item2 of item){
        transposedArray[i].push(item2);
        i++;
      }
      
    }
    return transposedArray;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    return false
}


const WS = 
[['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],]

console.log(wordSearch(WS, "SEWING"))

module.exports = wordSearch