//This code was created without chatGPT
const example = "hello world, this is a new text generated by me to test the huffman coding"

//count and segment of occurence in the text
function countText(text){
 let obj = {}; 
 for(let i = 0; i < text.length; i++) {
    obj[text[i]] = (obj[text[i]]+1) || 1;
 };
  return obj;
}

//fonction de tri par ordre d'occurence de charactères
function tri(callback) {
  let tri = [];
  for(const char in callback){
    tri.push([char, callback[char]])
  }
  const final = tri.sort((a, b) => {
    return a[1] - b[1];
  });
  return final
}


function generateTree() {
  let tree = [];
  const result = tri(countText(example));
  //separated line for readability
    function add() {
    let segment = []
    for(let i = 0; i < 2; i++){
     const heap = result.splice(Math.min(result[i]),1)
     segment.push(heap)
  }

  //flat() important to remember for removing nested array !
  const flatened = segment.flat();
  return flatened[0][1] +  flatened[1][1]
  }
  
  while(result.length !== 0){
  tree.push(add());
  }


  return tree.flat();
  
}

console.log(generateTree());
