// document.addEventListener("DOMContentLoaded", () => {
//     const grid = document.getElementById('rosterGrid');

//     const render = list => {
//         grid.innerHTML = '';

//         list.forEach(p => {
//             const col = document.createElement('div');
//             col.className = 'col-6 col-lg-2';
//             col.innerHTML = `
// <div class="card h-100 shadow-sn">
//     <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
//     <div class="card-body text-center">
//         <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
//         <div class='badge badge-position badge-pos-${p.position}'>${p.position}</div>
//         <p class="small text-muted mb-0">Age ${p.age}</p>
//         <button class="btn btn-primary btn-sm mt-2" data-player="${p.firstName}${p.lastName}">Fun Facts</button>
//     </div>
// </div>
// `;
//             grid.appendChild(col);
//         });
//     };

//     render(players);

//    // When anything is clicked on the page, run this function
// document.addEventListener('click', event => {

//     // Check if the thing clicked is a button with a "data-player" attribute
//     if (event.target.matches('button[data-player]')) {

//         // Get the value of "data-player" from the button (like "JohnSmith")
//         const playerKey = event.target.getAttribute('data-player');

//         // Find the player in the list whose name matches the button value
//         const player = players.find(p => `${p.firstName}${p.lastName}` === playerKey);

//         // If we found a player, show their info in a pop-up
//         if (player) {
//             showModal(player);
//         }
//     }
// });

//    // This function shows a pop-up with player info
// function showModal(player) {
//     // Get the title part of the pop-up
//     const modalTitle = document.getElementById('playerModalLabel');

//     // Get the body part of the pop-up
//     const modalBody = document.getElementById('playerModalBody');

//     // Set the title to the player's full name
//     modalTitle.textContent = `${player.firstName} ${player.lastName}`;

//     // Add a fun fact to the body of the pop-up
//     modalBody.innerHTML = `
//         <p><strong>🏒 Fun Fact:</strong> ${getFunFact(player)}</p>
//     `;

//     // Find the pop-up box
//     const modal = new bootstrap.Modal(document.getElementById('playerModal'));

//     // Show the pop-up box
//     modal.show();
// }

// });








// document.addEventListener("DOMContentLoaded", () => {
//     const grid = document.getElementById('rosterGrid');
//     const nameFilter = document.getElementById('nameFilter');
//     const ageFilter = document.getElementById('ageFilter');
//     const positionFilter = document.getElementById('positionFilter');

//     const render = list => {
//         grid.innerHTML = '';

//         list.forEach(p => {
//             const col = document.createElement('div');
//             col.className = 'col-6 col-lg-2';
//             col.innerHTML = `
//                 <div class="card h-100 shadow-sn">
//                     <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
//                     <div class="card-body text-center">
//                         <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
//                         <div class='badge badge-position badge-pos-${p.position}'>${p.position}</div>
//                         <p class="small text-muted mb-0">Age ${p.age}</p>
//                         <button class="btn btn-primary btn-sm mt-2" data-player="${p.firstName}${p.lastName}">Fun Facts</button>
//                     </div>
//                 </div>
//             `;
//             grid.appendChild(col);
//         });
//     };

//     const applyFilters = () => {
//         let filtered = [...players];

//         // Sort by name
//         const nameSort = nameFilter.value;
//         if (nameSort === 'az') {
//             filtered.sort((a, b) => a.firstName.localeCompare(b.firstName));
//         } else if (nameSort === 'za') {
//             filtered.sort((a, b) => b.firstName.localeCompare(a.firstName));
//         }

//         // Sort by age
//         const ageSort = ageFilter.value;
//         if (ageSort === 'asc') {
//             filtered.sort((a, b) => a.age - b.age);
//         } else if (ageSort === 'desc') {
//             filtered.sort((a, b) => b.age - a.age);
//         }

//         // Filter by position
//         const pos = positionFilter.value;
//         if (pos) {
//             filtered = filtered.filter(p => p.position === pos);
//         }

//         render(filtered);
//     };

//     // Attach change event to filters
//     nameFilter.addEventListener('change', applyFilters);
//     ageFilter.addEventListener('change', applyFilters);
//     positionFilter.addEventListener('change', applyFilters);

//     render(players);

//     // Button click logic for Fun Facts
//     document.addEventListener('click', event => {
//         if (event.target.matches('button[data-player]')) {
//             const playerKey = event.target.getAttribute('data-player');
//             const player = players.find(p => `${p.firstName}${p.lastName}` === playerKey);
//             if (player) {
//                 showModal(player);
//             }
//         }
//     });

//     // This function shows a pop-up with player info
//     function showModal(player) {
//         // Get the title part of the pop-up
//         const modalTitle = document.getElementById('playerModalLabel');

//         // Get the body part of the pop-up
//         const modalBody = document.getElementById('playerModalBody');

//         // Set the title to the player's full name
//         modalTitle.textContent = `${player.firstName} ${player.lastName}`;

//         // Add a fun fact to the body of the pop-up
//         modalBody.innerHTML = `
//         <p><strong>🏒 Fun Fact:</strong> ${getFunFact(player)}</p>
//     `;

//         // Find the pop-up box
//         const modal = new bootstrap.Modal(document.getElementById('playerModal'));

//         // Show the pop-up box
//         modal.show();
//     }

// }); 



document.addEventListener('DOMContentLoaded', () => {
    const rosterGrid = document.getElementById('rosterGrid');

    players.forEach(player => {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        const card = document.createElement('div');
        card.className = 'card h-100';

        const img = document.createElement('img');
        img.src = player.photo;
        img.className = 'card-img-top';
        img.alt = `${player.firstName} ${player.lastName}`;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const name = document.createElement('h5');
        name.className = 'card-title';
        name.textContent = `${player.firstName} ${player.lastName}`;

        const position = document.createElement('p');
        position.className = 'card-text';
        position.textContent = `Position: ${player.position}`;

        const age = document.createElement('p');
        age.className = 'card-text';
        age.textContent = `Age: ${player.age}`;

        const button = document.createElement('button');
        button.className = 'btn btn-primary btn-sm mt-2';
        button.textContent = 'Fun Fact';
        button.addEventListener('click', () => {
            showModal(player);
        });

        cardBody.append(name, position, age, button);
        card.append(img, cardBody);
        col.append(card);
        rosterGrid.append(col);
    });
});

function showModal(player) {
    const modalElement = document.getElementById('playerModal');
    const modalTitle = document.getElementById('playerModalLabel');
    const modalBody = document.getElementById('playerModalBody');

    if (!modalElement || !modalTitle || !modalBody) {
        console.error('Modal elements missing');
        return;
    }

    modalTitle.textContent = `${player.firstName} ${player.lastName}`;
    modalBody.textContent = player.funFact;

    const modal = new bootstrap.Modal(modalElement);
    modal.show();
};

