document.addEventListener('DOMContentLoaded', () => {
    const pokemonList = document.getElementById('pokemon-list');

    // Add a button to go to Bulbasaur's page
    const bulbasaurSection = document.getElementById('bulbasaur-link');
    // const button = document.createElement('button');
    // button.textContent = 'Go to Bulbasaur';
    // button.onclick = () => {
    //     window.location.href = 'bulbasaur.html';
    // };
    // bulbasaurSection.appendChild(button);

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
                link.href = `bulbasaur.html`; // Change this dynamically if needed
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