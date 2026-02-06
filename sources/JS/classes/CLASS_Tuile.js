/** Classe abstraite d'une tuile*/
class Tuile extends ObjetGraphique
{
     /** Constructeur 
      * _pos_ = {X:,Y:} = coordonnées de la tuile
     */
    constructor(_param_, _redessine_=true)
    {
        super(_param_, false)


         //Traitement des paramètres
        for (const [cle, valeur] of Object.entries(_param_))
        {
            switch (cle) {
                case "voisinsIdentiques":
                    this._voisinsIdentiques = valeur;
                    break
                default:
                    //console.warn("Paramètre inconnu dans Personnage : " + cle);
                    break;
            }
        }


        if(_redessine_)
            this.redessine()
    }


    // ===============================================================================
    // INFOS
    // ===============================================================================

    /** Carte de ratachement     */
    #CARTE = null

    get CARTE()
        {return this.#CARTE;}

    set CARTE(_carte_)
        {this.#CARTE = _carte_;}


    /** Type de tuile (ex: "Herbe", "Eau", "Mur", etc.) */
    get type()
        {return "Tuile";}

    /** Type d'objet avec héritage */
    get typeComplet()
        {return super.typeComplet + " >> Tuile";}

    /** Liste de références vers les tuiles voisines */
    _voisinsIdentiques = "0000" // Chaîne de carractère avec des 1 (si le voisin est de type identique) et 0 (sinon), dans l'ordre : droite, haut, gauche, bas. Par exemple "1010" signifie que les tuiles de droite et de gauche sont identiques à la tuile courante, mais pas celles du haut et du bas.

    get voisinsIdentiques()
        {return this._voisinsIdentiques;}



    // ============================================
    // Nature de la tuile
    // ============================================

    /** Nature de la tuile */
    _nature = "Defaut"

    /** Getter de la nature de la tuile */
    get nature()
        {return this._nature;}
        
    /** Type (nuance) de tuile*/
    _type = ""

    /** Getter du type */
    get type()
        {return this._type;}

    /** Booleen qui dit si c'est bloquant (comme un mur) */
    bloquant = false

    // ============================================
    // Graphismes
    // ============================================

    // ============================================
    // Action
    // ============================================

    /*action(personnage=JOUEUR)
    {
        alert("Rien d'intéressant ici... Tuile de type '"+this._type+"' et nature '"+this._nature+"' et coordonnées ("+this.X+","+this.Y+")");
    }*/

    /** Action réalisée quand le personnage marche sur la tuile (fait partie du patch) */
    actionMarchPatch(personnage=JOUEUR)
    {

    }

    /** Action réalisée quand le centre du personnage marge sur la tuile */
    actionMarcheCentre(personnage=JOUEUR)
    {

    }
}
