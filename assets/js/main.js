const offset = 0;
const limit = 10;

const pokemonListHtml = document.getElementsByClassName('pokemonsItens')[0];


pokeAPI.getPokemons(offset, limit).then((pokemonList) => {
    pokemonListHtml.innerHTML = '';
    pokemonList.forEach((pokemon) => {
      pokemonListHtml.innerHTML += pokemonConvertToHtml(pokemon);
    });
  })
  .catch((error) => console.log(error));

function pokemonConvertToHtml(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
      </div>
    </li>
  `;
}
