const formBtn1 = document.querySelector("#btn-1");
const formBtnPrev2 = document.querySelector("#btn-2-prev");
const formBtnNext2 = document.querySelector("#btn-2-next");
const formBtn3 = document.querySelector("#btn-3");
const url = "lib/data.json";
let zoneBleu;
let zoneJaune;
let zoneViolet;
let zoneRose ;

let donnees = {};
fetch(url).then( (data)=> {
  data.json().then((data) => {
    donnees = data;
    zoneBleu = donnees["bleu"];
    zoneJaune = donnees["jaune"];
    zoneViolet =donnees["violet"];
    zoneRose =donnees["rose"];
  })
});
// Button listener of form 1
formBtn1.addEventListener("click", function(e) {
  e.preventDefault()
  console.log(Object.keys(donnees["Primes"]["Bleu"])[0]);

  nbPersonnesFoyer= document.querySelector("#nbPersonnesFoyer").value;
 
  if(nbPersonnesFoyer<=0){
    document.querySelector(".alertMessage").innerHTML = "Erreur de saisie. <br>Indiquez le nombre de personnes composant votre foyer fiscal."
    return;
  }else gotoNextForm(formBtn1, formBtnNext2, 1, 2);
})
  
  // Next button listener of form 2
  formBtnNext2.addEventListener("click", function(e) {
    montantRfrFoyer = document.querySelector("#RFR").value;
    gotoNextForm(formBtnNext2, formBtn3, 2, 3)
    e.preventDefault()
    // Retourne une erreur si erreur de saisie dans le formulaire
    if(nbPersonnesFoyer<=0 || montantRfrFoyer<0){
      console.log("Attention erreur de saisie, Merci d'indiquer des valeurs numériques!");
      return;
  }

  switch (nbPersonnesFoyer) {
      case "1":
          if(montantRfrFoyer<=(zoneBleu[nbPersonnesFoyer])){     
            afficherResultat("blue", "Bleu");
          }else if(montantRfrFoyer<=(zoneJaune[nbPersonnesFoyer])){
           afficherResultat("yellow", "Jaune");  
          }else if(montantRfrFoyer<=(zoneViolet[nbPersonnesFoyer])){
            afficherResultat("purple", "Violet");  
          }else if(montantRfrFoyer>(zoneViolet[nbPersonnesFoyer])){
            afficherResultat("pink", "Rose");
          }else{
            console.log("Erreur de saisie !");
          }               
          break;

      case "2":
        if(montantRfrFoyer<=(zoneBleu[nbPersonnesFoyer])){     
          afficherResultat("blue", "Bleu");
        }else if(montantRfrFoyer<=(zoneJaune[nbPersonnesFoyer])){
         afficherResultat("yellow", "Jaune");

        }else if(montantRfrFoyer<=(zoneViolet[nbPersonnesFoyer])){
          afficherResultat("purple", "Violet");

        }else if(montantRfrFoyer>(zoneViolet[nbPersonnesFoyer])){
          afficherResultat("pink", "Rose");
        }else{
          console.log("Erreur de saisie !");
        }
        break;
      case "3":
        if(montantRfrFoyer<=(zoneBleu[nbPersonnesFoyer])){     
          afficherResultat("blue", "Bleu");
        }else if(montantRfrFoyer<=(zoneJaune[nbPersonnesFoyer])){
         afficherResultat("yellow", "Jaune");

        }else if(montantRfrFoyer<=(zoneViolet[nbPersonnesFoyer])){
          afficherResultat("purple", "Violet");

        }else if(montantRfrFoyer>(zoneViolet[nbPersonnesFoyer])){
          afficherResultat("pink", "Rose");
        }else{
          console.log("Erreur de saisie !");
        }          
          break;
      case "4":
        if(montantRfrFoyer<=(zoneBleu[nbPersonnesFoyer])){     
          afficherResultat("blue", "Bleu");
        }else if(montantRfrFoyer<=(zoneJaune[nbPersonnesFoyer])){
         afficherResultat("yellow", "Jaune");
        }else if(montantRfrFoyer<=(zoneViolet[nbPersonnesFoyer])){
          afficherResultat("purple", "Violet");
        }else if(montantRfrFoyer>(zoneViolet[nbPersonnesFoyer])){
          afficherResultat("pink", "Rose");
        }else{
          console.log("Erreur de saisie !");        }         
          break;

      case "5":
        if(montantRfrFoyer<=(zoneBleu[nbPersonnesFoyer])){     
          afficherResultat("blue", "Bleu");
        }else if(montantRfrFoyer<=(zoneJaune[nbPersonnesFoyer])){
         afficherResultat("yellow", "Jaune");
        }else if(montantRfrFoyer<=(zoneViolet[nbPersonnesFoyer])){
          afficherResultat("purple", "Violet");
        }else if(montantRfrFoyer>(zoneViolet[nbPersonnesFoyer])){
          afficherResultat("pink", "Rose");
        }else{
          console.log("Erreur de saisie !");
        }                 
          break;
     
      default:
          nbPersonnesSup = nbPersonnesFoyer - 5;
          totalZoneRose = (nbPersonnesSup* zoneRose["5+"]) + zoneRose["5"];
          totalZoneViolet = (nbPersonnesSup* zoneViolet["5+"]) + zoneViolet["5"];
          totalZoneJaune = (nbPersonnesSup* zoneJaune["5+"]) + zoneJaune["5"];
          totalZoneBleu =(nbPersonnesSup* zoneBleu["5+"]) + zoneBleu["5"];
          if(montantRfrFoyer<=(totalZoneBleu)){
            afficherResultat("blue", "Bleu");
          }else if(montantRfrFoyer<=(totalZoneJaune)){
            afficherResultat("yellow", "Jaune");
          }else if(montantRfrFoyer<=(totalZoneViolet)){
            afficherResultat("purple", "Violet");
          }else if(montantRfrFoyer>(totalZoneBleu)){
            afficherResultat("pink", "Rose");
          }else{
              console.log("Erreur de saisie !")
          }
          break;
     }  
  })
  
const afficherResultat = (color, aera) => {
  document.querySelector('#resultatZone').innerHTML = aera;
  document.querySelector('#resultatZone').style.color = color;
  document.querySelector('#prime1').innerHTML = Object.keys(donnees["Primes"][aera])[0];
  document.querySelector("#primRenovMount").innerHTML = donnees["Primes"][aera]["pompeAChaleurAirAir"]["forfaitMaPrime"]; 
  document.querySelector("#ceeMount").innerHTML = donnees["Primes"][aera]["pompeAChaleurAirAir"]["CEE"]; 
  document.querySelector('#prime2').innerHTML = Object.keys(donnees["Primes"][aera])[1];
  document.querySelector('#prime3').innerHTML = Object.keys(donnees["Primes"][aera])[2];
  document.querySelector('#prime4').innerHTML = Object.keys(donnees["Primes"][aera])[3];
  document.querySelector('#prime5').innerHTML = Object.keys(donnees["Primes"][aera])[4];
  document.querySelector('#prime6').innerHTML = Object.keys(donnees["Primes"][aera])[5];
  document.querySelector('#prime7').innerHTML = Object.keys(donnees["Primes"][aera])[6];
}

  // Previous button listener of form 2
  formBtnPrev2.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext2, formBtn1, 2, 1)
    e.preventDefault()
  })
  
  // Button listener of form 3
  formBtn3.addEventListener("click", function(e) {
    e.preventDefault()
    document.querySelector(`.step--3`).classList.remove("step-active")
    document.querySelector(`.step--4`).classList.add("step-active")
    formBtn3.parentElement.style.display = "none"
    document.querySelector(".form--message").innerHTML = `
     <h1 class="form--message-text">Your account is successfully created </h1>
     `
  })

  const gotoNextForm = (prev, next, stepPrev, stepNext) => {
    // Get form through the button
    const prevForm = prev.parentElement
    const nextForm = next.parentElement
    const nextStep = document.querySelector(`.step--${stepNext}`)
    const prevStep = document.querySelector(`.step--${stepPrev}`)
    // Add active/inactive classes to both previous and next form
    nextForm.classList.add("form-active")
    nextForm.classList.add("form-active-animate")
    prevForm.classList.add("form-inactive")
    // Change the active step element
    prevStep.classList.remove("step-active")
    nextStep.classList.add("step-active")
    // Remove active/inactive classes to both previous an next form
    setTimeout(() => {
      prevForm.classList.remove("form-active")
      prevForm.classList.remove("form-inactive")
      nextForm.classList.remove("form-active-animate")
    }, 1000)
  }