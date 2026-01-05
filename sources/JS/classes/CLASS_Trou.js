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
        image.scaleX = image.scaleY = 1.75
        image.x = -5
        image.y = -5
        this._contenu.addChild(image)
          
        

        this.updatePositionObjet()
        this.update()
    }





    redessine()
    {
       
    }
}