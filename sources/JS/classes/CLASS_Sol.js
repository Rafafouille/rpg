class Sol extends Tuile
{

  /** Constructeur 
      * _pos_ = {X:,Y:} = coordonnées de la tuile
     */
    constructor(_pos_, _type_="", _redessine_=true)
    {
        super(_pos_)

        this._nature = "sol";

        switch(_type_)
        {
            case "chemin":
                this._type = "chemin"
                var image = new createjs.Bitmap("./sources/images/sprites/chemin.png")
                image.scaleX = image.scaleY = 3.6
                image.x = -5
                image.y = -7
                this._contenu.addChild(image)
                break
            default:
                this._type = "defaut"
                var rect = new createjs.Shape();
                rect.graphics.beginFill(COULEUR_SOL_DEFAUT).drawRect(-1, -1, UNITE+2, UNITE+2);
                this._contenu.addChild(rect)
                // Ornement
                var hasard = Math.random();
                if(hasard<0.02)
                {
                    var image = new createjs.Bitmap("./sources/images/sprites/sol_fleure_jaune.png")
                    image.scaleX=image.scaleY=2
                    this._contenu.addChild(image)
                }
                else if(hasard<0.04)
                {
                    var image = new createjs.Bitmap("./sources/images/sprites/sol_petit_caillou.png")
                    image.scaleX=image.scaleY=2
                    this._contenu.addChild(image)
                }
                else if(hasard<0.14)
                {
                    var image = new createjs.Bitmap("./sources/images/sprites/sol_touffe_herbe.png")
                    image.scaleX=image.scaleY=2
                    this._contenu.addChild(image)
                }
                break
        }
        

        this.updatePositionObjet()
        this.update()
    }





    redessine()
    {
       
    }
}