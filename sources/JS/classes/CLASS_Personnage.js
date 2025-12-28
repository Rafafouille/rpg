/** Class abstraite d'un personnage */
class Personnage extends ObjetGraphique
{

    constructor(_param_)
    {
        super(_param_);
    }



    
    // ===============================================================================
    // DEPLACEMENTS
    // ===============================================================================

    /** Orientation du personnage : 1=est, 2=nord, 3=ouest, 4=sud */
    _orientation = 4

    /** Getter de l'orientation : 1=est, 2=nord, 3=ouest, 4=sud */
    get orientation()
        {return this._orientation}

    /** Fonction qui met à jour l'orientation en fonction de this._direction */
    updateOrientation()
        {
            var old = this._orientation

            if(this.estArrete())
                return true;

            var angle = Math.atan2(this._direction.y, this._direction.x)
            if(angle >= -Math.PI/4 && angle <= Math.PI/4)
                this._orientation = 1
            else if(angle > Math.PI/4 && angle < 3*Math.PI/4)
                this._orientation = 2
            else if(angle > -3*Math.PI/4 && angle < -Math.PI/4)
                this._orientation = 4
            else
                this._orientation = 3

          return old != this._orientation
        }
    
    /** Vitesse (flottant) de déplacement du personnage */
    _vitesse = 2
         /** Getter de la vitesse*/
        get vitesse()
            {return this._vitesse;}
         /** Setter de la vitesse */
        set vitesse(_v_)
            {this._vitesse = _v_}


    /** Direction de déplacement du personnage. Ce vecteur est censé être unitaire. */
    _direction = {"x":0,"y":0}
         /** Getter du vecteur direction*/
        get direction()
            {return this._direction}
        get direction_normee()
            {
                n = norme(this._direction)
                return {"x":this._direction.x/n , "y":this._direction.y/n}
            }
        /** Setter du vecteur direction */
        set direction(_d_)
            {
                var n = norme(_d_);
                this._direction.x = _d_.x ///n
                this._direction.y = _d_.y ///n
            }
         /** Setter de la coordonnée x de la direction */
        set direction_x(_x_)
            {
                var n = norme([_x_,this._direction.y]);
                if(n)
                    {
                        this._direction.x = _x_ ///n;
                        //this._direction.y = this.direction.y/n;
                    }
                else
                    {
                        this._direction.x=0
                        this._direction.y=0
                    }
            }
         /** Setter de la coordonnée y de la direction */
        set direction_y(_y_)
            {
                var n = norme([this._direction.x,_y_]);
                if(n)
                    {
                        this._direction.x = this.direction.x ///n;
                        this._direction.y = _y_ ///n;
                    }
                else
                    {
                        this._direction.x=0
                        this._direction.y=0
                    }
            }


    estArrete()
            {return norme(this._direction)==0}
        
    stop()
        {
            this._direction.x = 0
            this._direction.y = 0
        }


    // ===============================================================================
    // OBJET GRAPHIQUE
    // ===============================================================================
    /** (Redéfinition) Fonction qui efface puis redessine l'objet */
    redessine()
        {
            this._contenu.removeAllChildren();
            var carre = new createjs.Shape();
            carre.graphics.beginStroke("#000000").drawRect(0, 0, this.width, this.height);
            this._contenu.addChild(carre);
            
        }


    


    // ===============================================================================
    // COMPORTEMENT
    // ===============================================================================

    /** Mise à jour  */
    update(_param_)
    {
        super.update(_param_)

        var dt = _param_.delta/1000.
        if(norme(this._direction))
        {
            this.X += this._vitesse * this.direction_normee.x * dt;
            this.Y += this._vitesse * this.direction_normee.y * dt;
        }

    }
}