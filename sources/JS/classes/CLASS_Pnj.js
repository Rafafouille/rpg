/** Personnage Non Joueur */
class Pnj extends Personnage
{
    constructor(_param_)
    {
        super(_param_);

        // Mise en place des animations par sprite
        var spriteData = {
                            images: ["sources/images/sprites/orc_marche.png"],

                            frames: {
                                width: 64,     // largeur d’une frame (en pixels)
                                height: 64,    // hauteur d’une frame
                                count: 24      // nombre total de frames
                            },

                            animations: {
                                bas : 5,
                                gauche : 14,
                                droite : 20,
                                haut : 7,
                                marche_bas:  [0, 5, "marche_bas", 0.15],
                                marche_haut:  [6, 11, "marche_haut", 0.15],
                                marche_gauche: [12, 17, "marche_gauche", 0.15],
                                marche_droite:    [18, 23, "marche_droite", 0.15]
                            }
                        };

        this.spriteSheet = new createjs.SpriteSheet(spriteData);
        this.sprite = new createjs.Sprite(this.spriteSheet, "bas");
        this.sprite.scaleX=this.sprite.scaleY=3;
        this.sprite.x = -74
        this.sprite.y = -105;
        this._contenu.addChild(this.sprite);

    }



       update(_param_)
    {
         super.update(_param_);

                  if(this.mouvementChange())
        {
                if(this.estArrete())
                {
                    if(this._orientation==1)
                        this.sprite.gotoAndStop("droite")
                    else if(this._orientation==2)
                        this.sprite.gotoAndStop("haut")
                    else if(this._orientation==3)
                        this.sprite.gotoAndStop("gauche")
                    else if(this._orientation==4)
                        this.sprite.gotoAndStop("bas")
                }
                else // Si on est en mouvement
                {
                    if(this._orientation==1)
                        this.sprite.gotoAndPlay("marche_droite")
                    else if(this._orientation==2)
                        this.sprite.gotoAndPlay("marche_haut")
                    else if(this._orientation==3)
                        this.sprite.gotoAndPlay("marche_gauche")
                    else if(this._orientation==4)
                        this.sprite.gotoAndPlay("marche_bas")
                }
            }

            //var patch = this.patch
            //console.log(patch)
    }
}