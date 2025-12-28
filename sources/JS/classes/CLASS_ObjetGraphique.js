/** Class abstraite de touts les objets graphiques qui vont s'afficher à l'écran. */
class ObjetGraphique
{
    /** Constructeur */
    constructor(_param_)
    {
        // On crée l'objet graphique et un groupe à l'intérieur pour pouvoir faire des décallages
        this._objet = new createjs.Container() ;
        this._contenu = new createjs.Container();
            this._objet.addChild(this._contenu)

        this.redessine();
        this.repositionne();
    }
    

    // Quelques méthodes

    debug = true;
    
    // ===============================================================================
    // PARAMETRES GEOMETRIQUES
    // ===============================================================================
    
    /** Position de l'objet*/
    _POSITION = {"X":0, "Y":0};

        /** Getter de la position dans le système de coordonnées de la map */
        get POSITION()
            {return this._POSITION;}

        /** Setter de la position horizontale dans le système de coordonnées de la MAP */
        set X(_x_)
            {
                this._POSITION.X = _x_;
                this.repositionne();
            }

        /** Getter de la position horizontale dans le système de coordonnées de la MAP */
        get X()
            {return this._POSITION.X}

        /** Setter de la position verticale dans le système de coordonnées de la MAP (>0 vers le haut)*/
        set Y(_y_)
            {
                this._POSITION.Y = _y_;
                this.repositionne();
            }

        /** Getter de la position verticale dans le système de coordonnées de la MAP (>0 vers le haut)*/
        get Y()
            {return this._POSITION.Y}

        /** Similiaire à POSITION, mais dans le système de coordonnées de createJS */
        get position()
            {return {"x":this._POSITION.X * UNITE , "y":-this._POSITION.Y * UNITE}}

        /** Setter de la position horizontale dans le système de coordonnées de createJS */
        set x(_x_)
            {
                this._POSITION.X = _x_ / UNITE;
                this.repositionne();
            }

        /** Getter de la position horizontale dans le système de coordonnées de createJS */
        get x()
            {return this._POSITION.X * UNITE}

        /** Setter de la position verticale dans le système de coordonnées de createJS (>0 vers le bas)*/
        set y(_y_)
            {
                this._POSITION.Y = -_y_ / UNITE;
                this.repositionne();
            }

        /** Getter de la position verticale dans le système de coordonnées de createJS (>0 vers le bas)*/
        get y()
            {return -this._POSITION.Y * UNITE}
    
    /** Dimension de l'objet, en unité de la MAP*/
    _DIMENSIONS = {"WIDTH":1, "HEIGHT":1};

        /** Getter des dimensions en unité de la MAP */
        get DIMENSIONS()
            {return this._DIMENSIONS;}

        /** Setter de la largeur de l'objet, dans le système de coordonnées de la MAP*/
        set WIDTH(_w_)
            {
                this._DIMENSIONS.WIDTH=_w_;
                this.redessine();
            }

        /** Getter de la largeur de l'objet, dans le système de coordonnées de la MAP*/
        get WIDTH()
            {return this._DIMENSIONS.WIDTH}

        /** Setter de la hauteur de l'objet, dans le système de coordonnées de la MAP*/
        set HEIGHT(_h_)
            {
                this._DIMENSIONS.HEIGHT=_h_;
                this.redessine();
            }

        /** Getter de la hauteur de l'objet, dans le système de coordonnées de la MAP*/
        get HEIGHT()
            {return this._DIMENSIONS.HEIGHT}

        /** Getter des dimensions en unité de la MAP */
        get dimensions()
            {return {"width":this._DIMENSIONS.WIDTH * UNITE, "height":this._DIMENSIONS.HEIGHT * UNITE};}

        /** Setter de la largeur de l'objet, dans le système de coordonnées de la MAP*/
        set width(_w_)
            {
                this._DIMENSIONS.WIDTH=_w_ / UNITE;
                this.redessine();
            }

        /** Getter de la largeur de l'objet, dans le système de coordonnées de la MAP*/
        get width()
            {return this._DIMENSIONS.WIDTH * UNITE}

        /** Setter de la hauteur de l'objet, dans le système de coordonnées de la MAP*/
        set height(_h_)
            {
                this._DIMENSIONS.HEIGHT=_h_ / UNITE;
                this.redessine();
            }

        /** Getter de la hauteur de l'objet, dans le système de coordonnées de la MAP*/
        get height()
            {return this._DIMENSIONS.HEIGHT * UNITE}


    /** Coordonnées locales du point correspondant aux coordonnées de l'objet. Cela correspond à l'opposé d'un Offset des objets graphiques*/
    _ANCHOR = {"X": 0.5, "Y": -0.5}

        /** Getter de l'anchor dans les coordonnées de la MAP*/
        get ANCHOR()
            {return this._ANCHOR}

        /** Setter sur l'anchor sur X, en coordonnées de la MAP */
        set ANCHOR_X(_x_)
            {
                this._ANCHOR.X = _x_;
                this.repositionne();
            }

        /** Getter de l'anchor sur X, en coordonnées de la MAP */
        get ANCHOR_X()
            {return this._ANCHOR.X;}

        /** Setter sur l'anchor sur Y, en coordonnées de la MAP */
        set ANCHOR_Y(_y_)
            {
                this._ANCHOR.Y = _y_;
                this.repositionne();
            }

        /** Getter de l'anchor sur Y, en coordonnées de la MAP */
        get ANCHOR_Y()
            {return this._ANCHOR.Y;}

        /** Getter de l'anchor dans les coordonnées de la MAP*/
        get anchor()
            {return {"x":this._ANCHOR.X*UNITE, "y":this._ANCHOR.Y*UNITE};}

        /** Setter sur l'anchor sur X, en coordonnées de la MAP */
        set anchor_x(_x_)
            {
                this._ANCHOR.X = _x_ / UNITE ;
                this.repositionne();
            }

        /** Getter de l'anchor sur X, en coordonnées de la MAP */
        get anchor_x()
            {return this._ANCHOR.X * UNITE;}

        /** Setter sur l'anchor sur Y, en coordonnées de la MAP */
        set anchor_y(_y_)
            {
                this._ANCHOR.Y = -_y_ / UNITE;
                this.repositionne();
            }

        /** Getter de l'anchor sur Y, en coordonnées de la MAP */
        get anchor_y()
            {return -this._ANCHOR.Y * UNITE;}


    // ===============================================================================
    // OBJET GRAPHIQUE
    // ===============================================================================

    /** Référence vers l'objet graphique de createJS */
    _objet = null;

    /** Container inclu dans _objet, permettant des décallage avec anchor */
    _contenu = null

        /** Getter de l'objet graphique. */
        get objet()
            {return this._objet}


        /** Getter du container dans l'objet graphique. */
        get contenu()
            {return this._contenu}

    /** Fonction qui efface puis redessine l'objet */
    redessine()
        {
            this._contenu.removeAllChildren();
            var carre = new createjs.Shape();
            carre.graphics.beginFill("#ff0000").drawRect(0, 0, this.width, this.height);
            this._contenu.addChild(carre);
        }

    /** Repositionne l'objet graphique */
    repositionne()
    {
        this._objet.x = this.x;
        this._objet.y = this.y;
        this._contenu.x = -this.anchor_x;
        this._contenu.y = -this.anchor_y;
    }


    /** Donnée nécessaires pour créer les animations basée sur des sprites */
    spriteSheet = null;
    /** Objet graphique qui anime les sprite. Cet objet n'est pas ajouté par défaut dans le conteneur (il faut le faire dans le constructueur si besoin dans les classes filles) */
    sprite = null;



    // ===============================================================================
    // UPDATE
    // ===============================================================================

    /** Fonction qui met à jour l'élément à chaque tick.
     * _param_ est un ensemble de paramètres. Voir l'événement Ticker
     */
    update(_param_)
    {}
}

