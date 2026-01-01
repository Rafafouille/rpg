var STAGE;
var SCENE;

/** Fonction appelée une fois la page chargée, pour mettre en place le canvas. */
function initStage()
    {

        // Scène
        STAGE = new createjs.Stage("canvas");
        SCENE = new createjs.Container();
        STAGE.addChild(SCENE);





var circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 10);
circle.x = 0;
circle.y = 0;
SCENE.addChild(circle);




        // Redimensionnement de la fenetre
        $(window).on("resize", redimensionneCanvas);
        redimensionneCanvas(); // appel initial


        // ==============
        // La carte 
        // ==============

        var carte = [   ["mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur"],
                        ["mur","sol","sol","sol","sol","sol","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol","sol","sol","sol","sol","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol","sol","sol","sol","mur","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol:chemin","sol:chemin","sol:chemin","sol:chemin","sol:chemin","mur","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol","mur","sol","mur","sol:chemin","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol","sol","sol","sol","sol:chemin","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol","sol","sol","mur","sol:chemin","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur"]]

        CARTE = new Carte(carte, [1,2], SCENE)



        //Objets
        LISTE_OBJETS = [] // Liste des objets à updater

        // ==============
        // JOUEUR
        // ==============
        JOUEUR = new Joueur({POSITION:{X:1, Y:0}});
        SCENE.addChild(JOUEUR.objet)
        LISTE_OBJETS.push(JOUEUR)





       

        

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