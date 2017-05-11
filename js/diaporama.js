const NB_SLIDES = 8;
const SPEED = 2000; // en ms

var
  diaporama = document.querySelector("#diaporama")
  bts = diaporama.querySelectorAll("div"),

  btPrevious = bts[0],
  btPlay = bts[1],
  btStop = bts[2],
  btNext = bts[3]
;

var diapoOn = false, firstStart = true; // Etat du diaporama (ON/OFF) et état de démarrage
var cpt = 0; // compteur de slides


// GESTION EVENEMENTS

btPlay.addEventListener(
  'click',
  function()
  {
    diapoOn = true;
    startDiaporama();
    console.log("Play !");
  },
  false
);

btStop.addEventListener(
  'click',
  function()
  {
    diapoOn = false;
    console.log("Stop !");
  },
  false
);


btPrevious.addEventListener(
  'click',
  function()
  {
    if(cpt > 1) cpt--;
    else cpt = NB_SLIDES;
    
    firstStart = false;  

    // On met à jour le diaporama
    diaporama.style.backgroundImage = "url('../img/slide"+cpt+".jpg')";

    console.log("PREVIOUS => slide ", cpt);
  },
  false
);

btNext.addEventListener(
  'click',
  function()
  {
    if(firstStart) cpt += 2;
    else if(cpt < NB_SLIDES) cpt++;
    else cpt = 1;

    firstStart = false;  

    // On met à jour le diaporama
    diaporama.style.backgroundImage = "url('../img/slide"+cpt+".jpg')";

    console.log("NEXT => slide ", cpt);
  },
  false
);


// FONCTIONS

function startDiaporama()
{
  setTimeout(
    function()
    {
      if(diapoOn)
      {
        // Si pression sur play au premier démarrage
        // cela signifie que slide1 est déjà affiché
        // => il faut empêcher qu'il ne reste affiché 2 fois plus longtemps que les autres images
        if(firstStart && (cpt == 0 || cpt < NB_SLIDES-1) ) cpt += 2;
        else if(cpt == 0 || (cpt > 0 && cpt < NB_SLIDES) ) cpt++;
        else cpt = 1;

        // A ce niveau, nous sommes sûr de ne plus être au premier démarrage du diaporama
        firstStart = false;

        console.log("Affichage : slide ", cpt);
      
        // On change l'image du diaporama grâce au compteur de slides
        diaporama.style.backgroundImage = "url('../img/slide"+cpt+".jpg')";

        // On réinitialise le compteur de slides
        // si on a atteint la dernière image
        if(cpt == NB_SLIDES) cpt = 0;

        // On appelle à nouveau la méthode (récursion)
        startDiaporama();
      }
    },
    SPEED
  );
}

function stopDiaporama()
{
  diapoOn = false;
}