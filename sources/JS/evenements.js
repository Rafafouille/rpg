


/** Fonction principale, appelée à chaque tick, pour mettre à jour tous les objets stockés dans LISTE_OBJETS. */
function update(event)
{
    // On met à jour chaque objet
    LISTE_OBJETS.forEach((obj) => obj.update(event));
    STAGE.update(event);


    // Recentrer la carte
    pos_abs = SCENE.localToGlobal(JOUEUR.x, JOUEUR.y)
    if(pos_abs.x < UNITE*PADDING.x)
        SCENE.x = -JOUEUR.x+UNITE*PADDING.x
    if(pos_abs.x > $("#canvas").width() - UNITE*PADDING.x)
        SCENE.x = -JOUEUR.x + $("#canvas").width() - UNITE*PADDING.x
    if(pos_abs.y < UNITE*PADDING.y)
        SCENE.y = -JOUEUR.y+UNITE*PADDING.y
    if(pos_abs.y > $("#canvas").height() - UNITE*PADDING.y)
        SCENE.y = -JOUEUR.y + $("#canvas").height() - UNITE*PADDING.y


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
    isMoving = true;

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
});

window.addEventListener("keyup", (e) => {
    isMoving = true;

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
});