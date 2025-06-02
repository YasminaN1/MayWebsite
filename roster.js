document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('rosterGrid');

    const render = list => {
        grid.innerHTML = '';

        list.forEach(p => {
            const col = document.createElement('div');
            col.className = 'col-6 col-lg-2';
            col.innerHTML = `
<div class="card h-100 shadow-sn">
    <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
    <div class="card-body text-center">
        <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
        <div class='badge badge-position badge-pos-${p.position}'>${p.position}</div>
        <p class="small text-muted mb-0">Age ${p.age}</p>
        <button class="btn btn-primary btn-sm mt-2" data-player="${p.firstName}${p.lastName}">Fun Facts</button>
    </div>
</div>
`;
            grid.appendChild(col);
        });
    };

    render(players);

   // When anything is clicked on the page, run this function
document.addEventListener('click', event => {

    // Check if the thing clicked is a button with a "data-player" attribute
    if (event.target.matches('button[data-player]')) {

        // Get the value of "data-player" from the button (like "JohnSmith")
        const playerKey = event.target.getAttribute('data-player');

        // Find the player in the list whose name matches the button value
        const player = players.find(p => `${p.firstName}${p.lastName}` === playerKey);

        // If we found a player, show their info in a pop-up
        if (player) {
            showModal(player);
        }
    }
});

   // This function shows a pop-up with player info
function showModal(player) {
    // Get the title part of the pop-up
    const modalTitle = document.getElementById('playerModalLabel');

    // Get the body part of the pop-up
    const modalBody = document.getElementById('playerModalBody');

    // Set the title to the player's full name
    modalTitle.textContent = `${player.firstName} ${player.lastName}`;

    // Add a fun fact to the body of the pop-up
    modalBody.innerHTML = `
        <p><strong>🏒 Fun Fact:</strong> ${getFunFact(player)}</p>
    `;

    // Find the pop-up box
    const modal = new bootstrap.Modal(document.getElementById('playerModal'));

    // Show the pop-up box
    modal.show();
}

});
