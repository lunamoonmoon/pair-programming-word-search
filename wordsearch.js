const wordSearch = (letters, word) => { 
  if (letters.length === 0 || word.length === 0 && typeof word === 'string') { //check that inputs are not empty and word is a string
      return false;
  }

  // Horizontal search    
  const horizontalJoin = letters.map(ls => ls.join('')) //concatenates array
  for (l of horizontalJoin) { //loop horizontal arrays
      if (l.includes(word)) return true //if row contains word
  }

  // Transpose the matrix (Vertical search)
  const rows = letters.length;
  const columns = letters[0].length;
  const verticalJoin = [];
  
  //logic to transpose the array and concatenates all elements of the column into a single string
  for (let i = 0; i < columns; i++) {
      let columnString = '';
      for (let j = 0; j < rows; j++) {
          columnString += letters[j][i];
      }
      verticalJoin.push(columnString);
  }
  for (l of verticalJoin) {
      if (l.includes(word)) return true;
  }
  return false;
}

module.exports = wordSearch
