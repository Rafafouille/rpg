var STAGE;
var SCENE;

/** Fonction appelée une fois la page chargée, pour mettre en place le canvas. */
function initStage()
    {

        // Scène
        STAGE = new createjs.Stage("canvas");
        SCENE = new createjs.Container();
        STAGE.addChild(SCENE);




        // Redimensionnement de la fenetre
        $(window).on("resize", redimensionneCanvas);
        redimensionneCanvas(); // appel initial


        //Objets
        LISTE_OBJETS = [] // Liste des objets à updater

        // On charge le 1er monde
        chargeNiveau("test")


        // Update de l'écran
        STAGE.update();

        // Boucle d'update
        createjs.Ticker.framerate = 60; // Fréquence (optionnel, par défaut ~60 fps)
        createjs.Ticker.addEventListener("tick", update); // Fonction appelée à chaque frame


        // Supprimer l'antialiasing pour un effet pixel-art
         document.getElementById("canvas").getContext("2d").imageSmoothingEnabled = false;
    }










/** Fonction qui met à jour la taille du canvas */
function redimensionneCanvas()
{
    var canvas = document.getElementById("canvas")
    canvas.width  = window.innerWidth-4;
    canvas.height = window.innerHeight-4;
}