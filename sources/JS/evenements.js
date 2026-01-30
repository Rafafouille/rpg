


/** Fonction principale, appelée à chaque tick, pour mettre à jour tous les objets stockés dans LISTE_OBJETS. */
function update(event)
{

    if(AUTORISE_UPDATE)
    {
        // Recentrer la carte
        if(typeof(JOUEUR)!="undefined")
        {
            pos_abs = SCENE.localToGlobal(JOUEUR.x, JOUEUR.y)
            if(pos_abs.x < PADDING.x/100 * $("#canvas").width())
                SCENE.x = -JOUEUR.x+PADDING.x/100 * $("#canvas").width() + 0.001 // +0.001 pour éviter les bugs d'arrondi
            if(pos_abs.x > $("#canvas").width() * (1-PADDING.x/100))
                SCENE.x = -JOUEUR.x + $("#canvas").width() - PADDING.x/100 * $("#canvas").width() - 0.001 // -0.001 pour éviter les bugs d'arrondi
            if(pos_abs.y < PADDING.y/100 * $("#canvas").height())
                SCENE.y = -JOUEUR.y+ PADDING.y/100 * $("#canvas").height()  + 0.001 // +0.001 pour éviter les bugs d'arrondi
            if(pos_abs.y > $("#canvas").height() * (1-PADDING.y/100))
                SCENE.y = -JOUEUR.y + $("#canvas").height() - PADDING.y/100 * $("#canvas").height() - 0.001 // -0.001 pour éviter les bugs d'arrondi
        }

        // MISE A JOUR DES OBJETS (personnages, etc.)

        if(typeof(CARTE)!="undefined")
        {
            // On met à jour chaque objet
            CARTE.liste_objets.forEach((obj) => obj.update(event));
            
            // Tri des objets dans la scène selon leur coordonnée y
            CARTE.liste_objets.sort((a, b) => b.Y - a.Y);
            CARTE.liste_objets.forEach((obj) => {
                SCENE.removeChild(obj.objet);
                SCENE.addChild(obj.objet);
            });
        }

        STAGE.update(event);
        // Tri avantplan / arriere plan
        //SCENE.children.sort((a, b) => a.y - b.y);
    }
}


// ================================================================
// COMMANDES clavier 
// ================================================================
window.addEventListener("keydown", (e) => {
    //isMoving = true;


    if(typeof(JOUEUR)!="undefined")
    {
        switch (e.key) {
            case "ArrowDown":
                JOUEUR.direction_y = -1
                break;
            case "ArrowUp":
                JOUEUR.direction_y = 1
                break;
            case "ArrowLeft":
                JOUEUR.direction_x = -1
                break;
            case "ArrowRight":
                JOUEUR.direction_x = 1
                break;
            // Quand on appuis sur Controle, on interagit avec la tuile devant le joueur
            case "Control":
                if($("#dialog").dialog('isOpen')) // Si on est en train de parler ou autre...
                    {
                        clearInterval(MACHINE_A_ECRIRE); // On stop la machine à écrire
                        $("#dialog").html(TEXTE_DIALOG_COURANT); // On affiche tout le texte d'un coup
                    }
                else
                    JOUEUR.interagit()
                break
            }
    }
});

window.addEventListener("keyup", (e) => {
    //isMoving = true;

    if(typeof(JOUEUR)!="undefined")
    {
        switch (e.key) {
            case "ArrowDown":
                JOUEUR.direction_y = 0
                break;
            case "ArrowUp":
                JOUEUR.direction_y = 0
                break;
            case "ArrowLeft":
                JOUEUR.direction_x = 0
                break;
            case "ArrowRight":
                JOUEUR.direction_x = 0
                break;
            }
    }
});





// ================================================================
// COMMANDES telephone 
// ================================================================

document.addEventListener("touchstart",
                         function(event)
                         {
                            event.preventDefault();
                            if(typeof(JOUEUR)!="undefined")
                            {
                                var touch = event.touches[0];
                                TOUCHSTART_POSITION.x = touch.clientX;
                                TOUCHSTART_POSITION.y = touch.clientY;
                                TOUCH_POSITION.x = touch.clientX;
                                TOUCH_POSITION.y = touch.clientY;
                                IS_TOUCHING = true;
                            }
                        },
                        {passive: false});

document.addEventListener("touchmove",
                         function(event)
                         {
                            //event.preventDefault();
                            if(typeof(JOUEUR)!="undefined" && IS_TOUCHING)
                            {
                                var touch = event.touches[0];
                                TOUCH_POSITION.x = touch.clientX;
                                TOUCH_POSITION.y = touch.clientY;

                                var dep = {"x":TOUCH_POSITION.x - TOUCHSTART_POSITION.x,
                                           "y":-TOUCH_POSITION.y + TOUCHSTART_POSITION.y}

                                // On vérifie que le déplacement est assez grand pour éviter les micro-mouvements
                                if(norme(dep) > 30)
                                {
                                    JOUEUR.direction_x = dep.x;
                                    JOUEUR.direction_y = dep.y;
                                }
                            }
                        },
                        {passive: false});


document.addEventListener("touchend",
                            function(event)
                            {
                                if(typeof(JOUEUR)!="undefined")
                                {
                                    IS_TOUCHING = false;
                                    JOUEUR.direction_x = 0;
                                    JOUEUR.direction_y = 0;
                                }
                            },
                             {passive: false});