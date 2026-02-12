
/** Nombre de pixel par tuile (unité du jeu) */
UNITE = 50 

/** Pourcentage de padding, par rapport à la taille de la fenêtre*/
PADDING = {"x":40, "y":40}

/** Booléen qui autorise les commande (ou pas) */
AUTORISE_COMMANDE = true;

/** Bloc les update */
AUTORISE_UPDATE = true;

/** Couleur par défaut du sol */
COULEUR_SOL_DEFAUT = "#7cae59"



/** Machine à écrire  (Référence vers l'internal timer qui gère l'affichage progressif du texte) */
MACHINE_A_ECRIRE = null;

/** Texte courant à afficher dans la boite de dialogue */
TEXTE_DIALOG_COURANT = "";

/** Etat "touch" téléphone */
TOUCHSTART_POSITION = {"x":0, "y":0}
TOUCH_POSITION = {"x":0, "y":0}
TOUCHEND_POSITION = {"x":0, "y":0}
IS_TOUCHING = false

/** TAGS 
 * Permet de stocker des informations globales sur l'avancement de l'aventure en cours
*/
AVENTURE = {
    armoireElectriqueOuverte: false
}



/** Objet pour compter le nombre de tuile qui doivent ou qui sont chargée, pour pouvoir déclencher le cache */
CHARGEMENT_TUILES = {"nbTuilesACharger":0, "nbTuilesDejaChargees":0}