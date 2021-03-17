const url = "lib/data.json";
let index=0;

// Remove Enter
(function(n) {
    var f = function(e) {
      var c = e.which || e.keyCode;
      if (c == 13) {
        e.preventDefault();
        return false;
      }
    };
    window.noPressEnter = function(a, b) {
      b = (typeof b === 'boolean') ? b : true;
      if (b) {
        a.addEventListener(n, f);
      } else {
        a.removeEventListener(n, f);
      }
      return a;
    };
  })('keydown');

let donnees = [];
let res;
let resBleu;
let resJaune;
let resViolet
let resRose;
noPressEnter(document.body);
// Test de valeurs saisies - vérification cohérence formulaire
let input= "province";
let input2;
let input3;
let villeBool = true;
fetch(url).then( (data)=> {
    data.json().then((data) => {
        donnees = data;
    })
});

let step0 = document.getElementById("step0");
let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let retourValue=-1;

let divRacine = document.getElementById("divRacine");
let boutonSuivant = document.querySelector('#boutonSuivant');
let boutonValider = document.querySelector('#boutonValider');
let boutonRetour = document.querySelector('#boutonRetour');
let boutonRetour2 = document.querySelector('#boutonRetour2');
let display = document.querySelector('#display');
let sousTitre1 = document.querySelector('#soustitre1');
let sousTitre2 = document.querySelector('#soustitre2');
let affichagePrecedent;
let affichageEnCours;
let affichageSuivant;
let suivantBoolean = true;

boutonSuivant.addEventListener('click', generateurEtape);
boutonValider.addEventListener('click', stepTwo);
boutonValider2.addEventListener('click', stepThree);
boutonRetour.addEventListener('click', retour);
boutonRetour2.addEventListener('click', retour);
boutonRetour3.addEventListener('click', retour);

function generateurEtape(suivantBoolean){
    if(suivantBoolean){
        affichageEnCours =  document.getElementById("step" + index).style.display = "none";
        affichageSuivant =  document.getElementById("step" + (index + 1)).style.display  = "block";
    }else{
       if(index<1){
            affichageSuivant = document.getElementById("step" + (index + 1)).style.display = "none";
            affichageEnCours = document.getElementById("step" + index).style.display = "block";
       }else {
        affichageSuivant = document.getElementById("step" + (index + 1)).style.display = "none";
        affichageEnCours = document.getElementById("step" + index).style.display = "none";
           affichagePrecedent = document.getElementById("step" + (index-1)).style.display = "block";
            
        }}
        return affichagePrecedent, affichageEnCours, affichageSuivant; 
}



function retour(){
    console.log(index);
    console.log(index);
    generateurEtape(false);
   
}

function stepTwo(){
    index = 1;
    generateurEtape(true);
    console.log(index);
    input2= document.querySelector("#nbPersonnesFoyer").value;


    // Retourne une erreur si erreur de saisie dans le formulaire
    if(input2<=0 || input3<0){
        console.log("Attention erreur de saisie, Merci d'indiquer des valeurs numériques!");
        return;
    }
    // Vérifie la sélection hors Ile de France
    if (donnees[input]=== donnees["ileDeFrance"]){
        console.log("Nous intervenons en province\n" + donnees[input]);
    }else{
        if(input2>"4"){
            console.log("test de raccourcis");
       } 

    switch (input2) {
        // Rentre dans la boucle pour déterminer les droits
        case "1":
            if(input3<=(donnees["province"][input2]["bleu"])){
               document.getElementById("divRacine").style.display = "block"
               document.querySelector("#primRenovMount").innerHTML = donnees["Primes"]["bleu"]["pompeAChaleurAirAir"]["forfaitMaPrime"]; 
               document.querySelector("#ceeMount").innerHTML = donnees["Primes"]["bleu"]["pompeAChaleurAirAir"]["CEE"]; 

           //    document.querySelector("#display").innerHTML = `Pour une pompe à chaleur Air-Air : <br>Forfait Ma Prim'Rénov :  ${donnees["Primes"]["bleu"]["pompeAChaleurAirAir"]["forfaitMaPrime"]} €<br> Forfait CEE :  ${donnees["Primes"]["bleu"]["pompeAChaleurAirAir"]["CEE"]} €<br> Vous avez droit à un total de ${donnees["Primes"]["bleu"]["pompeAChaleurAirAir"]["CEE"] + donnees["Primes"]["bleu"]["pompeAChaleurAirAir"]["forfaitMaPrime"]} €`;
                console.log(`Félicitations ! Pour ${input2} personne :  Vous êtes Bleu, vous avez droit à : \n Pour installer une pompe à chaleur Air Air :\nForfait Ma Prim'Rénov : ${donnees["Primes"]["bleu"]["pompeAChaleurAirAir"]["forfaitMaPrime"]} € \n CEE : ${donnees["Primes"]["bleu"]["pompeAChaleurAirAir"]["CEE"]} €`);
                console.log(donnees["Primes"]["bleu"]);
                return;
            }else if(input3<=(donnees["province"][input2]["jaune"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Jaune, vous avez droit à 900€ CEE`);
                return;
            }else if(input3<=(donnees["province"][input2]["violet"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes violet, vous avez droit à 900€ CEE`);
                return;
            }else if(input3>(donnees["province"][input2]["rose"])){
             console.log("Désolé ! Vous n'avez le droit à aucune aide.. Vous êtes rose. Vous gagnez trop !");
             return;
            }else{
                // blocage de sécurité
                console.log("Erreur de saisie !")
                return;
            }               
            break;

        case "2":
            if(input3<=(donnees["province"][input2]["bleu"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Bleu.`);
                return;
            }else if(input3<=(donnees["province"][input2]["jaune"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Jaune.`);
                return;
            }else if(input3<=(donnees["province"][input2]["violet"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Violet.`);
                return;
            }else if(input3>(donnees["province"][input2]["rose"])){
             console.log(`Pour ${input2} personnes :  Vous êtes Rose. Pas d'aides !`);
             return;
            }else{
                // blocage de sécurité
                console.log("Erreur de saisie !")
                return;
            }               
            break;
        case "3":
            if(input3<=(donnees["province"][input2]["bleu"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Bleu.`);
                return;
            }else if(input3<=(donnees["province"][input2]["jaune"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Jaune.`);
                return;
            }else if(input3<=(donnees["province"][input2]["violet"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Violet.`);
                return;
            }else if(input3>(donnees["province"][input2]["rose"])){
             console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Rose. Vous n'avez le droit à aucune aide.. `);
             return;
            }else{
                // blocage de sécurité
                console.log("Erreur de saisie !")
                return;
            }               
            break;
        case "4":
            if(input3<=(donnees["province"][input2]["bleu"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Bleu.`);
                return;
            }else if(input3<=(donnees["province"][input2]["jaune"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Jaune.`);
                return;
            }else if(input3<=(donnees["province"][input2]["violet"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Violet.`);
                return;
            }else if(input3>(donnees["province"][input2]["rose"])){
             console.log(`Pour ${input2} personnes :  Vous êtes rose : Vous n'avez le droit à aucune aide.. vous gagnez trop !`);
             return;
            }else{
                // blocage de sécurité
                console.log("Erreur de saisie !")
                return;
            }               
            break;

        case "5":
            if(input3<=(donnees["province"][input2]["bleu"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Bleu.`);
                return;
            }else if(input3<=(donnees["province"][input2]["jaune"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Jaune.`);
                return;
            }else if(input3<=(donnees["province"][input2]["violet"])){
                console.log(`Félicitations ! Pour ${input2} personnes :  Vous êtes Violet.`);
                return;
            }else if(input3>(donnees["province"][input2]["rose"])){
             console.log(`Pour ${input2} personnes :  Vous êtes rose : Vous n'avez le droit à aucune aide.. vous gagnez trop !`);
             return;
            }else{
                // blocage de sécurité
                console.log("Erreur de saisie !")
                return;
            }               
            break;
       
        default:
            res = input2 - 5;
            resRose = res* donnees["province"]["5+"]["rose"];
            resViolet = res* donnees["province"]["5+"]["violet"];
            resJaune = res* donnees["province"]["5+"]["jaune"];
            resBleu = res* donnees["province"]["5+"]["bleu"];
            if(input3<=(donnees["province"]["5"]["bleu"]+resBleu)){
                console.log("Félicitations ! Vous êtes Bleu, vous avez droit à 900€ CEE")
            }else if(input3<=(donnees["province"]["5"]["jaune"]+resJaune)){
                console.log("test de +4personnes avec RFR > jaune" + resJaune);
            }else if(input3<=(donnees["province"]["5"]["violet"]+resViolet)){
                console.log("test de +4personnes avec RFR > violet" + res);
            }else if(input3>(donnees["province"]["5"]["rose"]+resRose)){
             console.log("Désolé ! Vous n'avez le droit à aucune aide.. vous gagnez trop !");
            }else{
                console.log("Erreur de saisie !")
            }
            break;
    }
   

    
    }


};


function stepThree(){
    index = 2;
    generateurEtape(true);
    console.log(index);
    input3= document.querySelector("#RFR").value;
}

