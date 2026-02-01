class Carte
{
     /** Constructeur 
      * _mat_ = Matrice de la carte
      * _centre_ = coordonnées [I,J] servant d'offset : Elle donne les coordonnées de la tuile qui servira d'origine (X=0,Y=0).
      * I = n° de la ligne
      * J = n° de la colonne
     */
    constructor(_mat_, _centre_, _scene_)
    {
        
        this.#matOriginale = _mat_ ; // On sauvegarde la MAP

        this.#offset.X = _centre_[0] ;
        this.#offset.Y = _centre_[1] ;

        this.#SCENE = _scene_

        this.creerMappingFromMat(_mat_)


        this.redessine()
    }






    // =================================================
    // DONNEES SOURCE
    // =================================================
    /** Matrice de la MAP */
    #matOriginale = null

    /** Coordonnées de la tuile d'origine */
    #offset = {X: 0, Y:0}

         /** Getter de l'offset */
        get offset()
            {return this.#offset;}

        /** Setter de l'offset.
         * _obj_ est un objet de type {X: entier, Y:entier} */
        set offset(_obj_)
            {
                this.#offset.X = _obj_.X
                this.#offset.X = _obj_.Y
            }
            
    /** Conteneur dans lequel dessiner */
    #SCENE = null

    /** Getter du conteneur */
    get SCENE()
        {return this.#SCENE}


    // =================================================
    // La MAPPING des tuiles
    // =================================================

    /** Objet contenant la liste des tuiles rangées par coordonnées [X,Y] */
    #mapping = {}

    get mapping()
        {return this.#mapping}

        
    creerMappingFromMat(_map_)
    {

        // On transforme la matrice en liste d'objets (on met tout en 1 ligne)
        var listeTuiles = []
        for(var i=0; i<_map_.length; i++)
        {
            for(var j=0; j<_map_[i].length; j++)
            {
                let element = structuredClone(_map_[i][j]) // On clone pour ne pas modifier l'original
                element.pos = {X:this.getXfromJ(j), Y:this.getYfromI(i)}
                element.posInitial = {i:i, j:j}
                listeTuiles.push(element)
            }
        }


        // On a une liste de type de tuile, avec leur position. On va pouvoir trier.
        listeTuiles.sort((a, b) => a.zIndex - b.zIndex);


        for(var k=0; k<listeTuiles.length; k++)
            {
                    var tuile
                    var defTuile = listeTuiles[k];
                    var nature =    defTuile.nature    ?? "";
                    var type =      defTuile.type      ?? "";
                    var zIndex =    defTuile.zIndex    ?? 0;
                    var pos =       defTuile.pos       ?? {X:0,Y:0};

                    switch (nature)
                    {
                        case "sol":
                            tuile = new Sol({POSITION:pos},type);
                            break;
                        case "mur":
                            tuile = new Mur({POSITION:pos},type);
                            break;
                        case "trou":
                            tuile = new Trou({POSITION:pos});
                            break;
                        default:
                            tuile = new Tuile({POSITION:pos});
                            break;
                    }
                    this.#mapping[[pos.X,pos.Y]] = tuile
            }
    }

    // =================================================
    // Liste des objets présents sur la catte
    // =================================================

    /** Liste des objets autre que les tuiles */
    _liste_objets = [] 

    /** Getter de la liste des objets */
    get liste_objets()
        {return this._liste_objets;}

    /** Setter de la liste des objets */
    set liste_objets(_liste_)
        {this._liste_objets = _liste_;}

    /** Ajoute un objet à la liste des objets et le place à l'écran */
    ajouteObjet(_obj_)
    {
        this.#SCENE.OBJETS.addChild(_obj_.objet)
        this._liste_objets.push(_obj_) // Est-ce encore utile d'avoir cette liste, vu que les objets sont déjà dans le conteneur SCENE.OBJETS ?
    }

    /** Vide la liste des objets */
    videObjet()
    {
        this._liste_objets = []
        this.#SCENE.OBJETS.removeAllChildren()
    }



    // =========================================
    // OUTILS
    // =========================================

    /** Fonction qui convertie le numéro de la colonne de la matrice en coordonnées sur X dans le système de coordonnées de la MAP, en fonction de l'offset */
    getXfromJ(_J_)
    {
        return _J_-this.#offset.X-1;
    }

    /** Fonction qui convertie le numéro de la ligne de la matrice en coordonnées sur Y dans le système de coordonnées de la MAP (>0 vers le haut) en fonction de l'offset*/
    getYfromI(_I_)
    {
        return -_I_ + this.#offset.Y-1
    }

    /** Fonction qui convertit les coordonnées [I,J] de la matrice en (X,Y) des coordonnées de la MAP*/
    getXYfromIJ(I,J)
    {
        return [this.getXfromJ(J), this.getYfromI(I)]
    }

    

    /** Fonction qui renvoie la référence de la tuile située sous la coordonnées [X,Y] */
    getTuile(X,Y)
    {
        return this.#mapping[[Math.floor(X+0.5), Math.floor(Y+0.5)]]
    }



    // =========================================
    // GRAPHISMES
    // =========================================
    /** Fonction qui redessinnee */
    redessine()
    {
        this.#SCENE.SOL.removeAllChildren()
        var xMin = Infinity
        var xMax = -Infinity
        var yMin = Infinity
        var yMax = -Infinity
        for (const [key, value] of Object.entries(this.#mapping))
        {
            this.#SCENE.SOL.addChild(value.objet)
            xMin = Math.min(xMin, value.gauche)
            xMax = Math.max(xMax, value.droite)
            yMin = Math.min(yMin, value.haut)
            yMax = Math.max(yMax, value.bas)
        }
        //console.log("Cache de la carte : ", xMin, yMin, xMax - xMin, yMax - yMin)
        this.#SCENE.SOL.cache(xMin, yMin, xMax - xMin, yMax - yMin)
    }
}