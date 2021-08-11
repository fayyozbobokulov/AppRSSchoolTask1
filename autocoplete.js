const createAutoComplete = (arr) => (str) => {
  const result = [];
  const len = arr.length;
  let i = 0;
  while(i<len){
    if(str === undefined || str === '') return result;
    let literal = str === arr[i] ? arr[i] : arr[i][0];
    if(str.toLowerCase() === literal.toLowerCase() || arr[i].startsWith(str)){
      result.push(arr[i]);
    }
    i++;
  }
  return result; 
}

module.exports = { createAutoComplete };