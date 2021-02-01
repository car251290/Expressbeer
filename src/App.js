const setEditModal = (id) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', `http://localhost:8080/beer/${id}`, false);
    xhttp.send();

    const beer = JSON.parse(xhttp.responseText);

    const {
        name,
        tagline,
        first_brewed,
        description,
        brewed_before,
    } = beer;

    document.getElementById('id').value = id;
    document.getElementById('name').value = name;
    document.getElementById('tagline').value = tagline;
    document.getElementById('first_brewed').value = first_brewed;
    document.getElementById('description').value = description;
    // eslint-disable-next-line camelcase
    document.getElementById('brewed_before').value = brewed_before;

    // setting up the action url for the book
    document.getElementById('editForm').action = `http://localhost:8080/beer/${id}`;
};

const deleteBeers = (id) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open('DELETE', `http://localhost:8080/beer/${id}`, false);
    xhttp.send();

    location.reload();
};
deleteBeers();

const loadBeers = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'http://localhost:8080/beer', false);
    xhttp.send();

    const beer = JSON.parse(xhttp.responseText);

    for (const beer of beers) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${beer.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${beer.id}</h6>
                        <div>tagline: ${beer.tagline}</div>
                        <div>fisrt brewed: ${beer.first_brewed}</div>
                        <div>description: ${beer.description}</div>
                        <hr>
                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal" 
                            data-target="#editBeerModal" onClick="setBeerModal(${beer.id})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('beers').innerHTML = document.getElementById('beers').innerHTML + x;
    }
};

loadBeers();