// add solution here
function theBeatlesPlay(artist, instrument){
  var array = []
  
  for (let i = 0; i < artist.length; i++){
    array.push(`${artist[i]} plays ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var excited = []
  let i = 0;
  while (excited.length <= facts.length){
    
    excited.push(facts[i]+'!!!')
    i++
  }
}