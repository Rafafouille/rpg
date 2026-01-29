/** Class abstraite de touts les objets graphiques qui vont s'afficher à l'écran. 
 * Hérite de createJS.Container
 * _param_ : paramètres de configuration de l'objet graphique
 *      - POSITION : {X: , Y: } position en unité de la MAP
 *      - X : position horizontale en unité de la MAP
 *      - Y : position verticale en unité de la MAP
 *      - DIMENSIONS : {WIDTH: , HEIGHT: } dimensions en unité de la MAP
 *      - WIDTH : largeur en unité de la MAP
 *      - HEIGHT : hauteur en unité de la MAP
 *      - ANCHOR : {X: , Y: } coordonnées locales du point correspondant aux coordonnées de l'objet, en unité de la MAP
 *      - ANCHOR_X : coordonnées locales du point correspondant aux coordonnées de l'objet, en unité de la MAP
 *      - ANCHOR_Y : coordonnées locales du point correspondant aux coordonnées de l'objet, en unité de la MAP
 *      _redessine_ : booléen indiquant si on doit redessiner l'objet après traitement des paramètres (par défaut true)
*/
class ObjetGraphique
{
    /** Constructeur */
    constructor(_param_={}, _redessine_=true)
    {
        // On crée l'objet graphique et un groupe à l'intérieur pour pouvoir faire des décallages
        this._objet = new createjs.Container() ;



        // Contenu (groupe qui contiendra les éléments graphiques de l'objet)
        this._contenu = new createjs.Container();
            this._contenu.type="contenuObjetGraphique"
            this._objet.addChild(this._contenu)



        //Traitement des paramètres
        for (const [cle, valeur] of Object.entries(_param_))
        {
            switch (cle) {
                case "POSITION":
                this._POSITION.X= valeur.X;
                this._POSITION.Y= valeur.Y;
                break;

                case "X":
                this._POSITION.X = valeur;
                break;

                case "Y":
                this._POSITION.Y = valeur;
                break;

                case "DIMENSIONS":
                this._DIMENSIONS.WIDTH = valeur.WIDTH;
                this._DIMENSIONS.HEIGHT = valeur.HEIGHT;
                break;

                case "WIDTH":
                this._DIMENSIONS.WIDTH = valeur;
                break;

                case "HEIGHT":
                this._DIMENSIONS.HEIGHT = valeur;
                break;

                case "ANCHOR":
                this._ANCHOR.X = valeur.X;
                this._ANCHOR.Y = valeur.Y;
                break;

                case "ANCHOR_X":
                this._ANCHOR.X = valeur;
                break;

                case "ANCHOR_Y":
                this._ANCHOR.Y = valeur;
                break;

                case "bloquant":
                this.bloquant = valeur;
                break;

                case "couleur":
                this.couleur = valeur;
                break;

                case "nom":
                this.nom = valeur;
                break;

                case "action":
                this.action = valeur;
                break;

                default:
                //console.warn("Paramètre inconnu dans ObjetGraphique : " + cle);
                break;
            }
        }


        

        // Cadre pour le debug (permet de voir la position et la place physique de l'objet)
        this.#cadre = new createjs.Shape();
        this.#cadre.graphics.setStrokeStyle(2).beginStroke("blue").drawRect(-this.anchor_x,-this.anchor_y,this.width,this.height);
        this.#cadre.visible = false
        this.#cadre.type = "cadreDebug"
        this.objet.addChild(this.#cadre)

        if(_redessine_)
            this.redessine();
        this.updatePositionObjet();
    }
    


    // ===============================================================================
    // INFOS
    // ===============================================================================

    debug = false;

    /** Type d'objet */
    get type()
        {return "ObjetGraphique";}

    /** Type d'objet avec héritage */
    get typeComplet()
        {return "ObjetGraphique";}

    /** Nom de l'objet */
    _nom = "";
        /** Getter et setter du nom de l'objet */
        get nom()
            {return this._nom;}
        /** Setter du nom de l'objet */
        set nom(_n_)
            {this._nom = String(_n_);}

    /** Fonction de débug qui décline des informations sur l'objet dans la console */
    ping()
    {
        if(this.nom=="")
            console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<")
        else
            console.log(this.nom+" <<<<<<<<<<<<<<<<<<<<<<<<<<")
        console.log("- Type : " + this.typeComplet);
        console.log("- Position : ( X : " + this.X + " ; Y : " + this.Y + " )  , ( x : " + this.x + " y : " + this.y + " )");
        console.log("- Dimensions : ( WIDTH : " + this.WIDTH + " ; HEIGHT : " + this.HEIGHT+ " ) , ( width : " + this.width + " height : " + this.height + " )");
        console.log("- Anchor : ( X : " + this.ANCHOR_X + " ; Y : " + this.ANCHOR_Y+ " ) , ( x : " + this.anchor_x + " y : " + this.anchor_y + " )");
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>")
    }
    
    // ===============================================================================
    // POSITION DE L'OBJET
    // En majuscules : en unité de la MAP (Y>0 vers le haut)
    // En minuscules : en unité de createJS (pixels, y>0 vers le bas)
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
                this.updatePositionObjet();
            }

        /** Getter de la position horizontale dans le système de coordonnées de la MAP */
        get X()
            {return this._POSITION.X}

        /** Setter de la position verticale dans le système de coordonnées de la MAP (>0 vers le haut)*/
        set Y(_y_)
            {
                this._POSITION.Y = _y_;
                this.updatePositionObjet();
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
                this.updatePositionObjet();
            }

        /** Getter de la position horizontale dans le système de coordonnées de createJS */
        get x()
            {return this._POSITION.X * UNITE}

        /** Setter de la position verticale dans le système de coordonnées de createJS (>0 vers le bas)*/
        set y(_y_)
            {
                this._POSITION.Y = -_y_ / UNITE;
                this.updatePositionObjet();
            }

        /** Getter de la position verticale dans le système de coordonnées de createJS (>0 vers le bas)*/
        get y()
            {return -this._POSITION.Y * UNITE}
    
    // ===============================================================================
    // DIMENSIONS DE L'OBJET
    // En majuscules : en unité de la MAP
    // En minuscules : en unité de createJS (pixels)
    // ===============================================================================
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


    // ===========================================
    // ANCHOR
    // L'anchor définit le point local de l'objet qui correspond à ses coordonnées X et Y
    // L'anchor (0,0) est en haut à gauche de l'objet (quelque soit le système de coordonnées map ou createjs)
    // Par défaut, l'anchor est au centre bas de l'objet (0.5, -0.5) (dans le système de coordonnées de la MAP)
    // Sinon, c'est (UNITE/2, UNITE/2) dans le système de coordonnées de createjs
    // ===========================================

    /** Coordonnées locales du point correspondant aux coordonnées de l'objet. Cela correspond à l'opposé d'un Offset des objets graphiques*/
    _ANCHOR = {"X": 0.5, "Y": -0.5}

        /** Getter de l'anchor dans les coordonnées de la MAP*/
        get ANCHOR()
            {return this._ANCHOR}

        /** Setter sur l'anchor sur X, en coordonnées de la MAP */
        set ANCHOR_X(_x_)
            {
                this._ANCHOR.X = _x_;
                this.updatePositionObjet();
            }

        /** Getter de l'anchor sur X, en coordonnées de la MAP */
        get ANCHOR_X()
            {return this._ANCHOR.X;}

        /** Setter sur l'anchor sur Y, en coordonnées de la MAP */
        set ANCHOR_Y(_y_)
            {
                this._ANCHOR.Y = _y_;
                this.updatePositionObjet();
            }

        /** Getter de l'anchor sur Y, en coordonnées de la MAP */
        get ANCHOR_Y()
            {return this._ANCHOR.Y;}

        /** Getter de l'anchor dans les coordonnées de createjs*/
        get anchor()
            {return {"x":this._ANCHOR.X*UNITE, "y":-this._ANCHOR.Y*UNITE};}

        /** Setter sur l'anchor sur X, en coordonnées de createjs*/
        set anchor_x(_x_)
            {
                this._ANCHOR.X = _x_ / UNITE ;
                this.updatePositionObjet();
            }

        /** Getter de l'anchor sur X, en coordonnées de createjs */
        get anchor_x()
            {return this._ANCHOR.X * UNITE;}

        /** Setter sur l'anchor sur Y, en coordonnées de createjs*/
        set anchor_y(_y_)
            {
                this._ANCHOR.Y = -_y_ / UNITE;
                this.updatePositionObjet();
            }

        /** Getter de l'anchor sur Y, en coordonnées de createjs */
        get anchor_y()
            {return -this._ANCHOR.Y * UNITE;}

        /** Renvoie l'équivalent de l'anchor, en partant de la droite  */
        get ANCHOR_DROITE()
            {return this.ANCHOR_X - this.WIDTH;}

        /** Renvoie l'équivalent de l'anchor, en partant de la droite  */
        get anchor_droite()
            {return this.anchor_x - this.width}

        get ANCHOR_BAS()
            {return this.ANCHOR_Y + this.HEIGHT;}

        get anchor_bas()
            {return this.anchor_y - this.height;}

        // ==========================================================================
        // Quelques méthodes utiles par rapport au rectangle englobant de l'objet
        // ==========================================================================

        /** Getter de la coordonnée gauche de l'objet, en unité de la MAP */
        get GAUCHE()
            {return this.X - this.ANCHOR_X;}

        get gauche()
            {return this.x - this.anchor_x;}

        /** Getter de la coordonnée droite de l'objet, en unité de la MAP */
        get DROITE()
            {return this.X - this.ANCHOR_X + this.WIDTH;}

        get droite()
            {return this.x - this.anchor_x + this.width;}

        /** Getter de la coordonnée basse de l'objet, en unité de la MAP */
        get BAS()
            {return this.Y - this.ANCHOR_Y - this.HEIGHT;}

        get bas()
            {return this.y - this.anchor_y + this.height;}

        /** Getter de la coordonnée haute de l'objet, en unité de la MAP */
        get HAUT()
            {return this.Y - this.ANCHOR_Y;}

        get haut()
            {return this.y - this.anchor_y;}

        /** Getter qui dit si un point est dans l'objet dans les coordonnées de creatjs*/
        estDansLObjet(_x_, _y_)
            {
                return _x_ >= this.gauche && _x_ <= this.droite && _y_ <= this.bas && _y_ >= this.haut;
            }

        /** Getter qui dit si un point est dans l'objet dans les coordonnées de la MAP*/
        ESTDANSLOBJET(_x_, _y_)
        {
            return _x_ >= this.GAUCHE && _x_ <= this.DROITE && _y_ >= this.BAS && _y_ <= this.HAUT;
        }

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


    /** Couleur (surtout pour le debug) */
    couleur = "#FF0000";

    /** Fonction qui efface puis redessine l'objet */
    redessine()
        {
            this._contenu.removeAllChildren();


        /*    this.#cadre = new createjs.Shape();
          //  this.#cadre.graphics.setStrokeStyle(2).beginStroke("blue").drawRect(this.x-this.anchor_x, this.y-this.anchor_y, this.width, this.height);
            this.#cadre.graphics.setStrokeStyle(2).beginStroke("blue").drawRect(0,0,this.width,this.height);
            this.#cadre.visible = true
            this._contenu.addChild(this.#cadre)
            /*var carre = new createjs.Shape();
            carre.graphics.beginFill(this.couleur).drawRect(0, 0, this.width, this.height);
            this._contenu.addChild(carre);*/
        }

    /** Repositionne l'objet graphique */
    updatePositionObjet()
    {
        this._objet.x = this.x;
        this._objet.y = this.y;
        this._contenu.x = -this.anchor_x;
        this._contenu.y = -this.anchor_y;
        // Il faudrait aussi mettr à jour le #cadre
    }


    /** Donnée nécessaires pour créer les animations basée sur des sprites */
    spriteSheet = null;
    /** Objet graphique qui anime les sprite. Cet objet n'est pas ajouté par défaut dans le conteneur (il faut le faire dans le constructueur si besoin dans les classes filles) */
    sprite = null;



    // ===============================================================================
    // GESTION DES TUILES
    // ===============================================================================

    /** Getter qui renvoie la tuile située juste en dessous du personnage*/
    get tuile()
        {return CARTE.getTuile(this.X, this.Y)}

    /** Getter qui renvoie le patch de tuile sur lequel l'objet est à cheval*/
    get patch()
        {
            var patch = [
                    CARTE.getTuile(this.X-this.ANCHOR_X , this.Y-this.ANCHOR_Y),
                    CARTE.getTuile(this.X-this.ANCHOR_X + this.WIDTH , this.Y-this.ANCHOR_Y),
                    CARTE.getTuile(this.X-this.ANCHOR_X , this.Y-this.ANCHOR_Y - this.HEIGHT),
                    CARTE.getTuile(this.X-this.ANCHOR_X + this.WIDTH , this.Y-this.ANCHOR_Y - this.HEIGHT)
            ]

            // On nettoyer les patch qui sont undefined (hors carte)
            patch = patch.filter(v => v !== undefined);

            // Si l'objet fait plus que 2 tuiles de large ou de haut, on ajoute les tuiles manquantes
            /*for(var X= this.X-this.ANCHOR_X; X<=this.X-this.ANCHOR_X+this.WIDTH ; X++)
            {
                for(var Y= this.Y-this.ANCHOR_Y-this.HEIGHT; Y<=this.Y-this.ANCHOR_Y; Y++)
                {
                    patch.push(CARTE.getTuile(X,Y))
                }
            }*/
            return patch
        }


    // ===============================================================================
    // INTERACTION PERSONNAGE
    // ===============================================================================

    /** Indique si l'objet bloque le déplacement du personnage */
    _bloquant = true;

    /** Setter de la propriété bloquant */
    set bloquant(_b_)
        {this._bloquant = Boolean(_b_);}

    /** Getter de la propriété bloquant */
    get bloquant()
        {return this._bloquant;}

    /** Action que peut déclencher un personnage */
    action()
    {
        ouvreDialog("Rien d'intéressant ici")
    }

    // ===============================================================================
    // GRAPHISME
    // ===============================================================================

    /** Cadre de mise en évidence de l'objet */
    #cadre = null;

    #afficheCadre = false;

    get afficheCadre()
        {return this.#afficheCadre;}

    set afficheCadre(_a_)
        {
            _a_ = Boolean(_a_);
            this.#afficheCadre = _a_;
            this.#cadre.visible = _a_ ;
        }

    // ===============================================================================
    // UPDATE
    // ===============================================================================

    /** Fonction qui met à jour l'élément à chaque tick.
     * _param_ est un ensemble de paramètres. Voir l'événement Ticker
     */
    update(_param_)
    {}
}

