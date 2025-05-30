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

    // Click listener for modal buttons
    document.addEventListener('click', event => {
        if (event.target.matches('button[data-player]')) {
            const playerKey = event.target.getAttribute('data-player');
            const player = players.find(p => `${p.firstName}${p.lastName}` === playerKey);

            if (player) {
                showModal(player);
            }
        }
    });

    // Show modal function
    function showModal(player) {
        const modalTitle = document.getElementById('playerModalLabel');
        const modalBody = document.getElementById('playerModalBody');

        modalTitle.textContent = `${player.firstName} ${player.lastName}`;
        modalBody.innerHTML = `
            <p><strong>🏒 Fun Fact:</strong> ${getFunFact(player)}</p>
        `;

        const modal = new bootstrap.Modal(document.getElementById('playerModal'));
        modal.show();
    }

    // Get fun fact (fallback if missing)
    function getFunFact(player) {
        return player.funFact || 'No fun facts available.';
    }
});
