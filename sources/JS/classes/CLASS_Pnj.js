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
                                marche_droite:    [18, 23, "marche_droite", 0.15],
                                court_bas:  [0, 5, "court_bas", 0.15],
                                court_haut:  [6, 11, "court_haut", 0.15],
                                court_gauche: [12, 17, "court_gauche", 0.15],
                                court_droite:    [18, 23, "court_droite", 0.15]
                            }
                        };

        this.spriteSheet = new createjs.SpriteSheet(spriteData);
        this.sprite = new createjs.Sprite(this.spriteSheet, "bas");
        this.sprite.scaleX=this.sprite.scaleY=3;
        this.sprite.x = -74
        this.sprite.y = -105;
        this._contenu.addChild(this.sprite);


        //Traitement des paramètres
        for (const [cle, valeur] of Object.entries(_param_))
        {
            switch (cle) {

                case "comportement":
                this.comportement = valeur;
                break

                default:
                //console.warn("Paramètre inconnu dans Personnage : " + cle);
                break;
            }
        }

    }



    // ===============================================================================
    // INFOS
    // ===============================================================================

    get type()
        {return "Pnj";}

    /** Type d'objet avec héritage */
    get typeComplet()
        {return super.typeComplet + " >> Pnj";}


    /** Comportement */
    comportement()
    {
            this.direction_x = JOUEUR.X-this.X
            this.direction_y = JOUEUR.Y-this.Y
    }

    /** Fonctionde mise à jour */
    update(_param_)
    {
         super.update(_param_);

        // Appel du comportement
        this.comportement();
    }
}