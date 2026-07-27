const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;


// Mets ta clé API ici
const API_KEY = "brix_tQJ7tDo1D0VWfuhiO9TUorq2co_qq7X20YcJXZweHR3PdITK";


// Autoriser le site
app.use(cors());


// Lire le JSON envoyé par index.html
app.use(express.json());





app.post("/search", async (req, res) => {


    const recherche = req.body;


    console.log("RECHERCHE RECUE :", recherche);



    try {

        console.log("DONNEES ENVOYEES A BRIXHUB :");
console.log(JSON.stringify(recherche, null, 2));

        const response = await fetch(
            "https://brixhub.cc/api/v1/search",
            {

                method:"POST",

                headers:{

                    "X-API-Key": API_KEY,

                    "Content-Type":"application/json"

                },

               body:JSON.stringify({

    prenom: recherche.prenom || "",

    nom_famille: recherche.nom || "",

    genre: recherche.genre || "",

    date_naissance: recherche.date_naissance || "",

    email: recherche.email || "",

    telephone: recherche.telephone || "",

    adresse: recherche.adresse || "",

    code_postal: recherche.code_postal || "",

    ville: recherche.ville || "",

    nom_utilisateur: recherche.nom_utilisateur || "",

    nom_affichage: recherche.nom_affichage || "",

    societe: recherche.societe || "",

    fonction: recherche.fonction || ""

})


            }

        );

        const data = await response.json();

console.log("STATUS :", response.status);
console.log("STATUS TEXT :", response.statusText);

console.log("REPONSE COMPLETE :");
console.dir(data, {depth:null});


if(data.data && data.data.results){

    console.log("PREMIER RESULTAT :");
    console.dir(data.data.results[0], {depth:null});

}
else{

    console.log("Pas de résultats ou erreur API");

}


res.json(data);



    }


    catch(error){


        console.log(error);


        res.status(500).json({

            error:error.message

        });


    }



});





app.listen(PORT,()=>{


    console.log(
        `🔥 Dark Atlas serveur lancé sur http://localhost:${PORT}`
    );


});