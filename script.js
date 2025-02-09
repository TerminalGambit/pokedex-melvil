document.addEventListener('DOMContentLoaded', () => {
    const pokemonList = document.getElementById('pokemon-list');

    // Fetch the first 10 Pokémon
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.results.forEach(pokemon => {
                // Create a list item
                const listItem = document.createElement('li');

                // Create a link element
                const link = document.createElement('a');
                link.href = pokemon.url;
                link.textContent = capitalizeFirstLetter(pokemon.name);

                // Append the link to the list item
                listItem.appendChild(link);

                // Append the list item to the Pokémon list
                pokemonList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error);
        });
});

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}