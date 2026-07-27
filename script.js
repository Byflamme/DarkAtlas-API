const archives = [

    {
        titre: "Dark Atlas",
        texte: "Portail principal des archives obscures."
    },

    {
        titre: "Astral Searcher",
        texte: "Exploration des mondes inconnus."
    },

    {
        titre: "Civilisations perdues",
        texte: "Archives des anciennes civilisations."
    },

    {
        titre: "Mystères interdits",
        texte: "Documents mystérieux cachés."
    },

    {
        titre: "Univers sombre",
        texte: "Exploration des profondeurs de l'univers."
    }

];



function search() {


    let recherche = document
    .getElementById("search")
    .value
    .toLowerCase();



    let resultat = archives.filter(item =>

        item.titre.toLowerCase().includes(recherche)
        ||
        item.texte.toLowerCase().includes(recherche)

    );



    let zone = document.getElementById("results");



    if(recherche === "") {

        zone.innerHTML = `
        <div class="card">
        <h2>⚠ Recherche vide</h2>
        <p>Écris un mot à rechercher.</p>
        </div>
        `;

        return;
    }



    if(resultat.length === 0) {

        zone.innerHTML = `
        <div class="card">
        <h2>❌ Aucun résultat</h2>
        <p>Aucune archive trouvée.</p>
        </div>
        `;

        return;
    }



    zone.innerHTML = "";



    resultat.forEach(item => {

        zone.innerHTML += `

        <div class="card">

        <h2>🔴 ${item.titre}</h2>

        <p>${item.texte}</p>

        </div>

        `;

    });


}