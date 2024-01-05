fetch ("db.json")
.then (function name(response) {
    return response.json();
})

.then(function name(db) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let db of dbs){
        out +=`
        ${db.name}
        ${db.image}
        ${db.votes}

        `;
    }
    placeholder.innerHTML = out;
})