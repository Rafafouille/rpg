/** Classe abstraite d'une tuile*/
class Tuile extends ObjetGraphique
{
     /** Constructeur 
      * _pos_ = {X:,Y:} = coordonnées de la tuile
     */
    constructor(_pos_, _redessine_=true)
    {
        super(_pos_, false)

        if(_redessine_)
            this.redessine()
    }




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

}
