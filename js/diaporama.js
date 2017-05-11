var diaporama = document.querySelector("#diaporama");
var diapoOn = false; // Etat du diaporama (ON/OFF)
var cpt = 0; // compteur de slides

function startDiaporama()
{
  if(diapoOn)
  {
    setTimeout(
      function()
      {
        cpt++;
        // On change l'image du diaporama grâce au compteur de slides
        diaporama.style.backgroundImage = "url('../img/slide"+cpt+".jpg')";

        // On appelle à nouveau la méthode (récursion)
        startDiaporama();
      },
      2000
    );
  }

  // On réinitialise le compteur de slides
  // si on a atteint la dernière image
  if(cpt == 8) cpt = 0;
}

function stopDiaporama()
{
  diapoOn = false;
}

diapoOn = true;
startDiaporama();