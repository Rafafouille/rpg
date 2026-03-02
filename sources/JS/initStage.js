var STAGE;
var SCENE;

/** Fonction appelée une fois la page chargée, pour mettre en place le canvas. */
function initStage()
    {

        // Scène
        STAGE = new createjs.Stage("canvas");

        // Conteneur de tous les éléments de la scène (peut être décalé pour recentrer la scène sur le personnage)
        SCENE = new createjs.Container();
        STAGE.addChild(SCENE);

        // Groupe pour les tuiles du sol
        SOL = new createjs.Container();
        SCENE.addChild(SOL);
        SCENE.SOL = SOL;

        // Groupe pour les objets (perso, éléments de décors, etc)
        OBJETS = new createjs.Container();
        SCENE.addChild(OBJETS);
        SCENE.OBJETS = OBJETS;




        // Redimensionnement de la fenetre
        $(window).on("resize", redimensionneCanvas);
        redimensionneCanvas(); // appel initial



        // On charge le 1er monde
        chargeNiveau("portail",{X:0,Y:-10})


        // Update de l'écran
        STAGE.update();

        // Boucle d'update
        createjs.Ticker.framerate = 60; // Fréquence (optionnel, par défaut ~60 fps)
        createjs.Ticker.addEventListener("tick", update); // Fonction appelée à chaque frame


        // Supprimer l'antialiasing pour un effet pixel-art
        // document.getElementById("canvas").getContext("2d").imageSmoothingEnabled = false;
    }






