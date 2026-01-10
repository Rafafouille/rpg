/** Fonction qui calcule la norme d'une vecteur V*/
function norme(V)
{
    n = 0;
    for(v in V)
        n += V[v]*V[v]
    return Math.sqrt(n)
}



/** Charge le niveau */
function chargeNiveau(niveau)
{
    // On nettoie l'éventuel ancien niveau
    LISTE_OBJETS = []
    SCENE.removeAllChildren()

    // On chagre le nouveau niveau
    $.getScript('actionneur.php?niveau='+niveau)
        .done(function (script, textStatus) {
            console.log("Niveau récupéré")
        })
        .fail(function () {
            alert("Erreur de chargement");
        });
}

