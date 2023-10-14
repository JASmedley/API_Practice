//Getting Pokemon Names, Images, & Abilities 
function returnPokemon (){
fetch("https://pokeapi.co/api/v2/pokemon")

.then(function(response){
  return response.json()
})

.then(function(data){

  console.log("Data I got back for ", data)
  
  for (let index = 0; index < data.results.length; index++) {
    fetch(data.results[index].url)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      let pokemonName = document.createElement("h3")
      let ability1 = document.createElement("li");
      let ability2 = document.createElement("li");
      let pokemonImage = document.createElement("img");
      pokemonName.innerText = data.name
      pokemonImage.src = data.sprites.front_default
      ability1.innerText = data.abilities[0].ability.name
      ability2.innerText = data.abilities[1].ability.name     
      document.getElementById("info").appendChild(pokemonName) 
      document.getElementById("info").appendChild(pokemonImage)
      document.getElementById("info").appendChild(ability1)
      document.getElementById("info").appendChild(ability2)
    })
  }
  });

  fetch("https://pokeapi.co/api/v2/pokemon/1/")

.then(function(response){
  return response.json()
})

.then(function(data){
  console.log("Data I got back", data)
})

  }

