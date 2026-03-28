/** Tuile trou */
class Trou extends Sol
{

  /** Constructeur 
      * _pos_ = {X:,Y:} = coordonnées de la tuile
     */
    constructor(_pos_, _type_="", _redessine_=true)
    {
        super(_pos_)

        this._nature = "trou";
        
        switch(_type_)
        {
            case "terrier":
                this._type = "terrier"
                var image = new createjs.Bitmap("./sources/images/sprites/sol_trou_herbe.png")
                ajouteObjetGraphiqueACharger(image.image) ; // Fonction qui détecte le moment où une image est chargée, en vue de déclencher la mise en cache un fois que tout est chargé
                image.scaleX = image.scaleY = 1.75
                image.x = -5
                image.y = -5
                this._contenu.addChild(image)
                break;
            default:
                this._type = "defaut"
                // Rectangle noir
                var trou = new createjs.Shape();
                trou.graphics.beginFill("#000000").drawRect(0,0,UNITE,UNITE);
                this._contenu.addChild(trou)
        }

        

        this.updatePositionObjet()
        this.update()
    }




    // ===============================================================================
    // INFOS
    // ===============================================================================

    get type()
        {return "Trou";}

    /** Type d'objet avec héritage */
    get typeComplet()
        {return super.typeComplet + " >> Trou";}



    redessine()
    {
       
    }


    // ============================================
    // Action
    // ============================================
    
    action()
    {
        alert("Aie ! C'est un trou ! Tuile de type '"+this._type+"' et nature '"+this._nature+"' et coordonnées ("+this.X+","+this.Y+")");
    }



    /** Action réalisée quand le centre du personnage marge sur la tuile */
    actionMarcheCentre(personnage=JOUEUR)
    {
        personnage.X = this.X
        personnage.Y = this.Y
        
        personnage.tombeDansTrou()
    }
}