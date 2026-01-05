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
        for(var i=0; i<_map_.length; i++)
        {
            for(var j=0; j<_map_[i].length; j++)
            {
                var tuile
                var pos = {X:this.getXfromJ(j), Y:this.getYfromI(i)}
                if(_map_[i][j])
                { 
                    var nature="";
                    var type="";
                    [nature, type] = String(_map_[i][j]).split(":")
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
                    this.#mapping[this.getXYfromIJ(i,j)] = tuile
                }
            }
        }
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
        for (const [key, value] of Object.entries(this.#mapping))
        {
            this.#SCENE.addChild(value.objet)
        }
    }
}