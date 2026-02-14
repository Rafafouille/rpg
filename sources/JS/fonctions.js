/** Fonction qui calcule la norme d'une vecteur V*/
function norme(V)
{
    n = 0;
    for(v in V)
        n += V[v]*V[v]
    return Math.sqrt(n)
}



/** Charge le niveau.
* En résumé :
* - On nettoie l'éventuel ancien niveau
* - On chagre le nouveau niveau en récupérant le script (AJAX)
* - Le script récupéré recréé un nouvel objet CARTE à partir d'une matrice de tuile (contenant les infos des tuiles)
* - La nouvelle carte fabrique un mapping (une liste de tuile, ordonnée par profondeur) à partir de la matrice,
* - Les objets-tuiles sont créé et ajouté à la scène. Leur graphisme est chargé de manière asynchrone. On compte les tuiles et on ajoute un événement aux tuiles pour savoir quand elles sont chargées.
* - Quand toutes les tuiles sont chargées, on redessine la carte et on mets en cache.
*/
function chargeNiveau(niveau)
{

    // On fait une fondu pour faire disparaître l'objet SCENE, pour éviter que le joueur puisse voir les tuiles se charger une à une
    $("#canvas").fadeOut(500, function(){
                // On nettoie l'éventuel ancien niveau
                //CAR = []

                // On bloque l'UPDATE pour éviter des mises à jour durant le chargement
                AUTORISE_UPDATE = false;

                SCENE.SOL.removeAllChildren()

                console.log(SCENE.OBJETS.children.length)
                SCENE.OBJETS.removeAllChildren()
                console.log(SCENE.OBJETS.children.length)

                // On chagre le nouveau niveau
                $.getScript('actionneur.php?niveau='+niveau)
                    .done(function (script, textStatus) { // Quand le script est chargé et exécuté, on réautorise les updates (le script chargé doit créer la carte et les tuiles, et ajouter les événements de chargement des tuiles pour incrémenter le nombre de tuiles chargées)
                        AUTORISE_UPDATE = true; // On réautorise les updates une fois le script chargé
                    })
                    .fail(function () {
                        alert("Erreur de chargement");
                    });
        });
}




/** Fonction qui ouvre une boite de dialog
 * "contenu" peut être une chaîne de caractère ou une liste de chaînes de caractères, correspondant à chaque "page" à afficher.
 * De manière récurcive, la fonction affiche le 1er élément, et intègre dans le bouton de la boite de dialogue la même liste moins la 1ere page.
*/
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
    
        // On efface le code initial
        $("#dialog").html("")

        // On supprime l'éventuel mécanisme de machine à écrire en cours
        clearInterval(MACHINE_A_ECRIRE);


        // Ce qu'on a à afficher
        if(typeof(liste[0])=="string")
            TEXTE_DIALOG_COURANT = liste[0]
        else if(typeof(liste[0])=="function")
            TEXTE_DIALOG_COURANT = liste[0]()

        // Mécanisme de machine à écrire
        let i = 0;
        MACHINE_A_ECRIRE = setInterval(() => {
                                            if (i < TEXTE_DIALOG_COURANT.length)
                                            {
                                                $("#dialog").append(TEXTE_DIALOG_COURANT.charAt(i));
                                                i++;
                                            }
                                            else
                                            {
                                                clearInterval(MACHINE_A_ECRIRE);
                                            }
                                            }, 30);




        // Gestion des boutons
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


/** Fonction qui renvoie une chaîne de caractère contenant des 1 (si voisin identique) et 0 (sinon)
 * dans l'ordre : droite, haut, gauche, bas. Par exemple "1010" signifie que les tuiles de droite et de gauche sont identiques à la tuile courante, mais pas celles du haut et du bas.
 * La fonction prend en argument la matrice de la carte, et les coordonnées i,j de la tuile dont on veut calculer le préfixe.
 */
function getSufixeVoisinsIdentiques(_map_, i, j )
{
    var prefixe = ""

    // Droite
    if(j<_map_[i].length-1 && _map_[i][j+1].type == _map_[i][j].type)
        prefixe += "1"
    else
        prefixe += "0"

    // Haut
    if(i>0 && _map_[i-1][j].type == _map_[i][j].type)
        prefixe += "1"
    else
        prefixe += "0"

    // Gauche
    if(j>0 && _map_[i][j-1].type == _map_[i][j].type)
        prefixe += "1"
    else
        prefixe += "0"

    // Bas
    if(i<_map_.length-1 && _map_[i+1][j].type == _map_[i][j].type)
        prefixe += "1"
    else      
        prefixe += "0"

    return prefixe
}







//CHARGEMENT_TUILES = {"nbTuileACharger":0, "nbTuileDejaChargees":0}

/** Fonction  pour compter les graphismes de tuiles à charger*/
function ajouteObjetGraphiqueACharger(objet)
{
    CHARGEMENT_TUILES.nbTuilesACharger++;    // On compte un objet à charger en plus
    objet.addEventListener("load", () => {incrementNbTuileChargees();console.log("chargé")}); // On ajoute un événement à l'objet pour incrémenter le nombre de tuiles chargées quand il est chargé
    //console.log("Nombre de tuiles à charger : ", CHARGEMENT_TUILES.nbTuilesACharger)
}


/** Fonction qui incrémente le nombre de tuiles chargées et qui met en cache si ce nombre a atteint le max.*/
    function incrementNbTuileChargees()
    {
        CHARGEMENT_TUILES.nbTuilesDejaChargees++;
        //console.log("Nombre de tuiles chargées : ", CHARGEMENT_TUILES.nbTuilesDejaChargees)
        // Si on a fini le chargement des tuiles (asynchrone)
        if (CHARGEMENT_TUILES.nbTuilesDejaChargees >= CHARGEMENT_TUILES.nbTuilesACharger)
        {
            CARTE.redessine();
            $("#canvas").fadeIn(500);
        }
    }




// Fonction qui lance un problème à résoudre
function lanceProbleme(probleme)
{

}
