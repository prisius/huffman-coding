//This code was created without chatGPT
//This implementation is not the true nature of the huffman coding, but my interpretation WIP
const example = "hello world, this is a new text generated by me to test the huffman coding"

//count and segment of occurence in the text
function countText(text: string){
  let obj = {}; 
  for(let i = 0; i < text.length; i++) {
    obj[text[i]] = (obj[text[i]]+1) || 1;
  };
  return obj;
}

//fonction de tri par ordre d'occurence de charactères
function tri(callback: () => number) {
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

/*
function generateTree2() {
  let tree = [];
  let leaf = [];
  const result = tri(countText(example));

  while(result.length !== 0){
    for(let i = 0; i < 2; i++){
      //shift() remove the first element of the array and returns it
      const char = result.shift()
      leaf.push(char[1])
      tree.push([char[0], char[1]]);
    }
    const sum = leaf[leaf.length - 2] + leaf[leaf.length - 1];
    //define a condition to sort the number left to right
    leaf = []; 
    tree.push(sum) 
  }
  return tree;
}

*/


function huffman() {
  let alternance;
  let huffmanList = [];
  const list = generateTree2();
  for(let i = 0; i < list.length; i++){
    huffmanList.push(list[i])
    alternance ? list[i] = 0 : list[i]= 1;
    alternance = !alternance;
    huffmanList.push(list[i])
    
  }
  return huffmanList

}

function assignNumber() {
  const huffman = huffman();
  for(let i = 0; i < huffman.length; i % 2 == 0){



  }

}


console.log(tri(countText(example)))
console.log(generateTree2())
console.log(huffman())

