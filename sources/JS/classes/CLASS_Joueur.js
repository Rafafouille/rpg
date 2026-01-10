/** Class abstraite d'un personnage */
class Joueur extends Personnage
{

    /** Constructeur de Joueur */
    constructor(_param_)
    {
        super(_param_);

        this.vitesse=10

        // ===============================================================================
        // GRAPHISMES
        // ===============================================================================

        // Mise en place des animations par sprite
        var spriteData = {
                            //images: ["sources/images/sprites/swordman_marche.png"],
                            images: ["sources/images/sprites/hero.png"],

                            frames: {
                                width: 48,     // largeur d’une frame (en pixels)
                                height: 48,    // hauteur d’une frame
                                count: 12*6      // nombre total de frames
                            },

                            animations: {
                                bas : [0,3, "bas", 0.15],
                                gauche : [6,9, "gauche", 0.15],
                                droite : [12,15, "droite", 0.15],
                                haut :  [18,21, "haut", 0.15],
                                marche_bas:  [24, 29, "marche_bas", 0.15],
                                marche_gauche:  [30, 35, "marche_gauche", 0.15],
                                marche_droite: [36, 41, "marche_droite", 0.15],
                                marche_haut:    [42, 47, "marche_haut", 0.15],
                                court_bas:  [48, 53, "court_bas", 0.15],
                                court_gauche:  [54, 59, "court_gauche", 0.15],
                                court_droite: [60, 65, "court_droite", 0.15],
                                court_haut:    [66, 71, "court_haut", 0.15]
                            }
                        };

        this.spriteSheet = new createjs.SpriteSheet(spriteData);
        this.sprite = new createjs.Sprite(this.spriteSheet, "bas");
        this.sprite.scaleX = this.sprite.scaleY=2.5;
        this.sprite.x = -38
        this.sprite.y = -80
        this._contenu.addChild(this.sprite);


    }


    // ===============================================================================
    // ACTIONS
    // ===============================================================================

    /** Le joueur tombe dans un trou */
    mourir()
    {
        // On le renvoie au point de départ
        AUTORISE_COMMANDE = false
        // On le respawn après 2 secondes
        setTimeout(() => {AUTORISE_COMMANDE = true;this.respawn()}, 2000);   
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