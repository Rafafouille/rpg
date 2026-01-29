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
    //CAR = []
    SCENE.SOL.removeAllChildren()
    SCENE.OBJETS.removeAllChildren()

    // On chagre le nouveau niveau
    $.getScript('actionneur.php?niveau='+niveau)
        .done(function (script, textStatus) {
            console.log("Niveau récupéré")
        })
        .fail(function () {
            alert("Erreur de chargement");
        });
}




/** Fonction qui ouvre une boite de dialog */
function ouvreDialog(contenu,options={})
{

    AUTORISE_UPDATE = false;

    if(typeof(contenu)=="string")
        contenu = [contenu]

    updateDialog(contenu)
    $("#dialog").dialog("open")
}

/** Fonction qui met à jour la boite de dialogue en fonction d'une liste de contenu 
 * "liste" est une liste de chaîne de caractères, correpondant à chaque "page" à afficher.
 * De manière récurcive, la fonction affiche le 1er élément, et intègre dans le bouton de la boite de dialogue la même liste moins la 1ere page.
 * A noter qu'au lieu d'une liste de chaîne de caractère, on peut mettre des fonctions qui renvoient une chaîne.
*/
function updateDialog(liste)
{
        if(typeof(liste[0])=="string")
            $("#dialog").html(liste[0])
        else if(typeof(liste[0])=="function")
            $("#dialog").html(liste[0]())

        if(liste.length>1)
        {
            $("#dialog").dialog({
                buttons:{
                            "Suivant" : function()
                                {updateDialog(liste.slice(1))}
                        }
            })
        }
        else
        {

            $("#dialog").dialog({
                buttons:{
                         "Terminer": function()
                            {
                                $("#dialog").dialog( "close" );
                                AUTORISE_UPDATE = true;
                            }
                        }
            })
        }
        setTimeout(() => {$(".ui-dialog:visible").find(".ui-dialog-buttonpane button:first") .focus();}, 0); // Pour remettre le focus pour la touche Entrer. Le settimeout laisse le temps à Jquery de refaire son bouton
}