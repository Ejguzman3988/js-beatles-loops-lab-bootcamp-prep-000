// add solution here
function theBeatlesPlay(artist, instrument){
  var array = {}
  
  for (let i = 0; i < artist.length-1; i++){
    for (let j = 0; j < instrument.length-1; j++){
      array.push(`${artist[i]} plays ${instrument[j]}`)
    }
  }
  return array
}