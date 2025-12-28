


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