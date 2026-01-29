/** Classe représentant une image à poser sur la carte */
class ObjetImage extends ObjetGraphique
{
    /** Constructeur 
     * @param {Object} params - Paramètres de configuration de l'image
     * @param {string} params.source - Chemin de l'image à afficher
    */
    constructor(_params_)
    {
        super(_params_);

        // Création de l'image
        this.origine = _params_.source;
        this.image = new createjs.Bitmap(_params_.source);
        this._contenu.addChild(this.image);
        

        //Traitement des paramètres
        for (const [cle, valeur] of Object.entries(_params_))
        {
            switch(cle)
            {
                case "source":
                    // Déjà traité
                break;
                case "POSITION_IMAGE":
                    this.image.x = valeur.X*UNITE || 0;
                    this.image.y = -valeur.Y*UNITE || 0;
                break;
                case "ECHELLE_IMAGE":
                    this.image.scaleX = valeur.X || 1;
                    this.image.scaleY = valeur.Y || 1;
                break;
                default:
                    //console.warn("Paramètre inconnu pour ObjetImage : " + cle);
                break;
            }
        }


    }


    // ===============================================================================
    // INFOS
    // ===============================================================================

    get type()
        {return "ObjetImage";}

    /** Type d'objet avec héritage */
    get typeComplet()
        {return super.typeComplet + " >> ObjetImage";}


    /** L'objet image */
    image = null;

    /** Nom du fichier d'origine */
    origine = ""

}