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
        
        var image = new createjs.Bitmap("./sources/images/sprites/sol_trou_herbe.png")
        ajouteObjetGraphiqueACharger(image.image)
        image.scaleX = image.scaleY = 1.75
        image.x = -5
        image.y = -5
        this._contenu.addChild(image)
          
        

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