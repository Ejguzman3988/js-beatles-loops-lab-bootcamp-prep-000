// add solution here
function theBeatlesPlay(artist, instrument){
  var array = []
  
  for (let i = 0; i < artist.length; i++){
    array.push(`${artist[i]} plays ${instrument[i]}`)
  }
  return array
}