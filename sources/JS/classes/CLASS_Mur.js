/** Tuile mur */
class Mur extends Tuile
{

  /** Constructeur 
      * _pos_ = {X:,Y:} = coordonnées de la tuile
     */
    constructor(_pos_, _type_="", _redessine_=true)
    {
        super(_pos_)

        this._nature = "mur";
        this.bloquant = true;

        switch(_type_)
        {
            case "buisson":
                this._type = "buisson"
                var image = new createjs.Bitmap("./sources/images/sprites/buisson.png")
                image.scaleX = image.scaleY = 2.2
                image.x = -5
                image.y = -5
                this._contenu.addChild(image)
                break
            case "barriere_H":
                this._type = "barriere_H"
                var image = new createjs.Bitmap("./sources/images/sprites/barriere_horizontale.png")
                image.scaleX = image.scaleY = UNITE/image.image.width
                image.x = 0
                image.y = 3
                this._contenu.addChild(image)
                break
            case "barriere_V":
                this._type = "barriere_V"
                var image = new createjs.Bitmap("./sources/images/sprites/barriere_verticale.png")
                image.scaleX = image.scaleY = 0.3*UNITE/image.image.width
                image.x = 17
                image.y = -10
                this._contenu.addChild(image)
                break
            default:
                this._type = "defaut"
                var rect = new createjs.Shape();
                rect.graphics.beginFill(COULEUR_SOL_DEFAUT).drawRect(-1, -1, UNITE+2, UNITE+2);
                this._contenu.addChild(rect)
                var image = new createjs.Bitmap("./sources/images/sprites/mur_gros_caillou.png")
                image.scaleX=image.scaleY=1.4
                image.y = -5
                image.x = 2
                this._contenu.addChild(image)
                break
        }
        

        this.updatePositionObjet()
        this.update()
    }



    // ===============================================================================
    // INFOS
    // ===============================================================================

    get type()
        {return "Mur";}

    /** Type d'objet avec héritage */
    get typeComplet()
        {return super.typeComplet + " >> Mur";}

    redessine()
    {
       
    }
}