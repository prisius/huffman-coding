//Ce code à été créer sans ChatGPT
const example = "hello world, this is a new text generated by me to test the huffman coding"

//count and segment of occurence in the text
function countText(text){
 let obj = {}; 
 for(let i = 0; i < text.length; i++) {
    obj[text[i]] = (obj[text[i]]+1) || 1;
 };
  return obj;
}


function tri(callback) {
  let tri = [];
  for(const char in callback){
    tri.push([char, callback[char]])
  }
  const final = tri.sort((a, b) => {
    return b[1] - a[1];
  });
  return final
}


/*
function generateTree(callback) {
  for(let j = 0; j < callback.length; j++){
    
  }
  

}
*/

console.log(tri(countText(example)));