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
                /*var image = new createjs.Bitmap("./sources/images/sprites/chemin.png")
                image.scaleX = image.scaleY = 3.6
                image.x = -5
                image.y = -7
                this._contenu.addChild(image)*/
                var spriteSheet = new createjs.SpriteSheet({images: ["./sources/images/sprites/chemins.png"], frames: {width: 50, height: 50}});
                var sprite = new createjs.Sprite(spriteSheet);
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
            case "route":
                /*this._type = "route"
                var image = new createjs.Bitmap("./sources/images/sprites/bitume.png")
                image.scaleX = image.scaleY = 1.01
                image.x = -5
                image.y = -7
                this._contenu.addChild(image)
                break*/
                var spriteSheet = new createjs.SpriteSheet({images: ["./sources/images/sprites/bitumes.png"], frames: {width: 50, height: 50}});
                var sprite = new createjs.Sprite(spriteSheet);
                this._contenu.addChild(sprite);
                switch (this.voisinsIdentiques)
                {
                    case "0000":
                        sprite.gotoAndStop(15);
                        break
                    case "0001":
                        sprite.gotoAndStop(14);
                        break
                    case "0010":
                        sprite.gotoAndStop(13);
                        break
                    case "0011":
                        sprite.gotoAndStop(8);
                        break
                    case "0100":
                        sprite.gotoAndStop(12);
                        break
                    case "0101":
                        sprite.gotoAndStop(10);
                        break
                    case "0110":
                        sprite.gotoAndStop(6);
                        break
                    case "0111":
                        sprite.gotoAndStop(3);
                        break
                    case "1000":
                        sprite.gotoAndStop(11);
                        break
                    case "1001":
                        sprite.gotoAndStop(7);
                        break
                    case "1010":
                        sprite.gotoAndStop(9);
                        break
                    case "1011":
                        sprite.gotoAndStop(4);
                        break
                    case "1100":
                        sprite.gotoAndStop(5);
                        break
                    case "1101":
                        sprite.gotoAndStop(2);
                        break
                    case "1110":
                        sprite.gotoAndStop(1);
                        break
                    default:
                        sprite.gotoAndStop(0);
                        break
                }
            break

            case "fleur":
                var rect = new createjs.Shape();
                rect.graphics.beginFill(COULEUR_SOL_DEFAUT).drawRect(-1, -1, UNITE+2, UNITE+2);
                this._contenu.addChild(rect)
                this._type = "fleur"
                var hasard = Math.random();
                if(hasard <= 0.25)
                {
                    var image = new createjs.Bitmap("./sources/images/sprites/fleur1.png")
                    image.scaleX = image.scaleY = 3.6
                    image.x = -0
                    image.y = -20
                    this._contenu.addChild(image)
                }
                else if(hasard <= 0.5)
                {
                    var image = new createjs.Bitmap("./sources/images/sprites/fleur2.png")
                    image.scaleX = image.scaleY = 3.6
                    image.x = -0
                    image.y = -10
                    this._contenu.addChild(image)
                }
                else if(hasard <= 0.75)
                {
                    var image = new createjs.Bitmap("./sources/images/sprites/fleur3.png")
                    image.scaleX = image.scaleY = 3.6
                    image.x = -5
                    image.y = -40
                    this._contenu.addChild(image)
                }
                else if(hasard <= 1)
                {
                    var image = new createjs.Bitmap("./sources/images/sprites/fleur4.png")
                    image.scaleX = image.scaleY = 3.6
                    image.x = -0
                    image.y = -0
                    this._contenu.addChild(image)
                }
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




    // ===============================================================================
    // INFOS
    // ===============================================================================

    get type()
        {return "Sol";}

    /** Type d'objet avec héritage */
    get typeComplet()
        {return super.typeComplet + " >> Sol";}



    redessine()
    {
       
    }
}