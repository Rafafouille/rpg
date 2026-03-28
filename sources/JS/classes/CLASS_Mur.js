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
                ajouteObjetGraphiqueACharger(image.image)
                image.scaleX = image.scaleY = 2.2
                image.x = -5
                image.y = -5
                this._contenu.addChild(image)
                break
            case "barriere_H":
                this._type = "barriere_H"
                var image = new createjs.Bitmap("./sources/images/sprites/barriere_horizontale.png")
                ajouteObjetGraphiqueACharger(image.image)
                image.scaleX = image.scaleY = UNITE/image.image.width
                image.x = 0
                image.y = 3
                this._contenu.addChild(image)
                break
            case "barriere_V":
                this._type = "barriere_V"
                var image = new createjs.Bitmap("./sources/images/sprites/barriere_verticale.png")
                ajouteObjetGraphiqueACharger(image.image)
                image.scaleX = image.scaleY = 0.3*UNITE/image.image.width
                image.x = 17
                image.y = -10
                this._contenu.addChild(image)
                break
            case "falaise":
                this._type = "falaise"
                var spriteSheet = new createjs.SpriteSheet({images: ["./sources/images/sprites/falaises.png"], frames: {width: 50, height: 50}});
                var sprite = new createjs.Sprite(spriteSheet);
                ajouteObjetGraphiqueACharger(spriteSheet._images[0]) // Fonction qui détecte le moment où une image est chargée, en vue de déclencher la mise en cache un fois que tout est chargé
                this._contenu.addChild(sprite);
                switch (this.voisinsIdentiques)
                {
                    case "0000":
                        sprite.gotoAndStop(12);
                        break
                    case "0001":
                        sprite.gotoAndStop(2);
                        break
                    case "0010":
                        sprite.gotoAndStop(9);
                        break
                    case "0011":
                        sprite.gotoAndStop(5);
                        break
                    case "0100":
                        sprite.gotoAndStop(14);
                        break
                    case "0101":
                        sprite.gotoAndStop(16);
                        break
                    case "0110":
                        sprite.gotoAndStop(11);
                        break
                    case "0111":
                        sprite.gotoAndStop(3);
                        break
                    case "1000":
                        sprite.gotoAndStop(7);
                        break
                    case "1001":
                        sprite.gotoAndStop(4);
                        break
                    case "1010":
                        sprite.gotoAndStop(17);
                        break
                    case "1011":
                        sprite.gotoAndStop(13);
                        break
                    case "1100":
                        sprite.gotoAndStop(10);
                        break
                    case "1101":
                        sprite.gotoAndStop(1);
                        break
                    case "1110":
                        sprite.gotoAndStop(15);
                        break
                    default:
                        sprite.gotoAndStop(0);
                        break
                }
                break
            default:
                this._type = "defaut"
                var rect = new createjs.Shape();
                rect.graphics.beginFill(COULEUR_SOL_DEFAUT).drawRect(-1, -1, UNITE+2, UNITE+2);
                this._contenu.addChild(rect)
                var image = new createjs.Bitmap("./sources/images/sprites/mur_gros_caillou.png")
                ajouteObjetGraphiqueACharger(image.image)
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