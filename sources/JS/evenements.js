


/** Fonction principale, appelée à chaque tick, pour mettre à jour tous les objets stockés dans LISTE_OBJETS. */
function update(event)
{
    // On met à jour chaque objet
    LISTE_OBJETS.forEach((obj) => obj.update(event));
    STAGE.update(event);


    // Recentrer la carte
    if(typeof(JOUEUR)!="undefined")
    {
        pos_abs = SCENE.localToGlobal(JOUEUR.x, JOUEUR.y)
        if(pos_abs.x < PADDING.x/100 * $("#canvas").width())
            SCENE.x = -JOUEUR.x+PADDING.x/100 * $("#canvas").width()
        if(pos_abs.x > $("#canvas").width() * (1-PADDING.x/100))
            SCENE.x = -JOUEUR.x + $("#canvas").width() - PADDING.x/100 * $("#canvas").width()
        if(pos_abs.y < PADDING.y/100 * $("#canvas").height())
            SCENE.y = -JOUEUR.y+ PADDING.y/100 * $("#canvas").height()
        if(pos_abs.y > $("#canvas").height() * (1-PADDING.y/100))
            SCENE.y = -JOUEUR.y + $("#canvas").height() - PADDING.y/100 * $("#canvas").height()
    }


    // Tri des objets dans la scène selon leur coordonnée y
    LISTE_OBJETS.sort((a, b) => b.Y - a.Y);
    LISTE_OBJETS.forEach((obj) => {
        SCENE.removeChild(obj.objet);
        SCENE.addChild(obj.objet);
    });


    // Tri avantplan / arriere plan
    //SCENE.children.sort((a, b) => a.y - b.y);
}



/* COMMANDES clavier */

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
                var tuileDevant = JOUEUR.tuileDevant
                if(tuileDevant)
                    tuileDevant.action()
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