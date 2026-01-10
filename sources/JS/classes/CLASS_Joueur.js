/** Class abstraite d'un personnage */
class Joueur extends Personnage
{

    /** Constructeur de Joueur */
    constructor(_param_)
    {
        super(_param_);



        // ===============================================================================
        // GRAPHISMES
        // ===============================================================================

        // Mise en place des animations par sprite
        var spriteData = {
                            images: ["sources/images/sprites/swordman_marche.png"],

                            frames: {
                                width: 64,     // largeur d’une frame (en pixels)
                                height: 64,    // hauteur d’une frame
                                count: 24      // nombre total de frames
                            },

                            animations: {
                                bas : 5,
                                gauche : 11,
                                droite : 17,
                                haut : 23,
                                marche_bas:  [0, 5, "marche_bas", 0.15],
                                marche_gauche:  [6, 11, "marche_gauche", 0.15],
                                marche_droite: [12, 17, "marche_droite", 0.15],
                                marche_haut:    [18, 23, "marche_haut", 0.15]
                            }
                        };

        this.spriteSheet = new createjs.SpriteSheet(spriteData);
        this.sprite = new createjs.Sprite(this.spriteSheet, "bas");
        this.sprite.scaleX = this.sprite.scaleY=3;
        this.sprite.x = -74
        this.sprite.y = -105;
        this._contenu.addChild(this.sprite);


    }


    // ===============================================================================
    // ACTIONS
    // ===============================================================================

    /** Le joueur tombe dans un trou */
    tombeDansTrou()
    {
        alert("Aie ! Vous êtes tombé dans un trou !");
        // On le renvoie au point de départ

        // On le respawn après 2 secondes
        setTimeout(() => {this.respawn()}, 2000);   
    }
    

    // ===============================================================================
    // OBJET GRAPHIQUE
    // ===============================================================================
    /** (Redéfinition) Fonction qui efface puis redessine l'objet */
    redessine()
        {
            this._contenu.removeAllChildren();
            var carre = new createjs.Shape();
            carre.graphics.beginStroke("#FF0000").drawRect(0, 0, this.width, this.height);
            this._contenu.addChild(carre);
            
        }



    update(_param_)
    {

         super.update(_param_);



            //var patch = this.patch
            //console.log(patch)
    }
}