/** Class abstraite d'un personnage */
class Personnage extends ObjetGraphique
{

    constructor(_param_)
    {
        _param_.WIDTH = 0.8
        _param_.HEIGHT = 0.8

        super(_param_);

        this._respawnPoint.X = this.X
        this._respawnPoint.Y = this.Y
    }



    /** Position de respawn du personnage  (s'il meurt)*/
    _respawnPoint = {"X":0, "Y":0}

    /** Getter de la position de respawn */
    get respawnPoint()
        {return this._respawnPoint;}

    /** Getters des coordonnées de respawn */
    get respawnPoint_X()
        {return this._respawnPoint.X;}

    /** Getter des coordonnées de respawn */
    get respawnPoint_Y()
        {return this._respawnPoint.Y;}   
    /** Setter de la position de respawn */
    set respawnPoint(_r_)
        {this._respawnPoint = _r_;}


    /** Fonction qui replace le joueur sur son respawn point */
    respawn()
        {
            this.X = this._respawnPoint.X
            this.Y = this._respawnPoint.Y
        }

    // ===============================================================================
    // DEPLACEMENTS
    // ===============================================================================

    /** Orientation du personnage : 1=est, 2=nord, 3=ouest, 4=sud */
    _orientation = 4

    /** Ancienne orientation du personnage */
    _orientation_OLD = 0


    /** Getter de l'orientation : 1=est, 2=nord, 3=ouest, 4=sud */
    get orientation()
        {return this._orientation}

    set orientation(_o_)
        {this._orientation = _o_}

    /** Fonction qui met à jour l'orientation en fonction de this._direction */
    updateOrientation()
        {
            this._orientation_OLD = this._orientation;

            if(!this.estArrete())
            {
                var angle = Math.atan2(this._direction.y, this._direction.x)
                if(angle >= -Math.PI/4 && angle <= Math.PI/4)
                    this._orientation = 1
                else if(angle > Math.PI/4 && angle < 3*Math.PI/4)
                    this._orientation = 2
                else if(angle > -3*Math.PI/4 && angle < -Math.PI/4)
                    this._orientation = 4
                else
                    this._orientation = 3
          }
        }

    /** Fonction qui dit si l'orientation a changé */
    orientationChange()
        {
            return this._orientation != this._orientation_OLD;
        }

    /** Indique s'il y a eu un changement de mouvement (démarrage, arrêt, changement de direction) */
    mouvementChange()
        {
            if( (this._direction.x == 0 && this._old_direction.x!=0 )
                || (this._direction.x != 0 && this._old_direction.x==0)
                || (this._direction.y ==0 && this._old_direction.y!=0)
                || (this._direction.y !=0 && this._old_direction.y==0))
            {
                this._old_direction.x = this._direction.x
                this._old_direction.y = this._direction.y
                return true;
            }
            return false;
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

        /** Direction au pas précédent */
        _old_direction = {"x":0,"y":0}

    /** Indique si le personnage est arrêté (direction nulle) */
    estArrete()
            {return norme(this._direction)==0}
        
    /** Arrête le personnage */
    stop()
        {
            this._direction.x = 0
            this._direction.y = 0
        }

    /** Indique si on a une collision avec un mur ou un objet bloquant */
    collisionMur()
    {
        var patch = this.patch
        for(var i = 0; i < patch.length; i++)
        {
            if(patch[i].bloquant)
            {
                return true;
            }
        }
        return false;
    }


    /** Indique si on a une collisaion avec un autre objet */
    collisionObjet()
    {
        var objets = LISTE_OBJETS.filter((obj) => obj != this)
        for(var i = 0; i < objets.length; i++)
        {
            if(objets[i].X-this.X < objets[i].ANCHOR_X + this.WIDTH - this.ANCHOR_X
                 &&
               this.X - objets[i].X < this.ANCHOR_X + objets[i].WIDTH - objets[i].ANCHOR_X
                &&
               objets[i].Y - this.Y < objets[i].ANCHOR_Y + this.HEIGHT - this.ANCHOR_Y
               &&
               this.Y - objets[i].Y < this.ANCHOR_Y + objets[i].HEIGHT - objets[i].ANCHOR_Y)
            {
                return true;
            }

        }
    }


    /** Repositionne le personnage en dehors des murs */
    repositionneHorsMurs()
    {
        var patch = this.patch
        for(var i = 0; i < patch.length; i++)
        {
            if(patch[i].bloquant)
            {                
                var ecart = {"X": this.X - patch[i].X, "Y": this.Y - patch[i].Y}
                if(Math.abs(ecart.X) > Math.abs(ecart.Y)) // Si on chevauche plus horizontalement que verticalement
                {
                    // on repousse en X
                    if(ecart.X > 0) // Si on mange par la droite
                        this.X = patch[i].X + patch[i].WIDTH/2 + this.ANCHOR_X + 0.01
                    else // Si on mange par la gauche
                        this.X = patch[i].X - patch[i].WIDTH/2 - this.WIDTH + this.ANCHOR_X - 0.01
                }
                else // Si on chevauche plus verticalement que horizontalement
                {
                    // on repousse en Y
                    if(ecart.Y > 0) // Si on mange par le bas
                        this.Y = patch[i].Y + patch[i].HEIGHT/2 + this.HEIGHT + this.ANCHOR_Y + 0.01
                    else // Si on mange par le haut
                        this.Y = patch[i].Y - patch[i].HEIGHT/2 + this.ANCHOR_Y - 0.01
                }

                // NOTE POUR PLUS TARD, plutot que patch[i].HEIGHT/2, il faudra peut être jouer avec les ANCHOR

                // on a repositionné par rapport à ce mur bloquant -> on sort
                //return;
            }
        }
    }


    /** Fonction qui renvoie la référence de la tuile qui se trouve 1 longueur devant le personnage */
    get tuileDevant()
    {
        if(this._orientation==1) // est
            return CARTE.getTuile(this.X - this.ANCHOR_X + this.WIDTH + 0.5, this.Y)
        else if(this._orientation==2) // nord
            return CARTE.getTuile(this.X, this.Y - this.ANCHOR_Y + 0.5)
        else if(this._orientation==3) // ouest
            return CARTE.getTuile(this.X - this.ANCHOR_X - 0.5, this.Y)
        else if(this._orientation==4) // sud
            return CARTE.getTuile(this.X, this.Y - this.ANCHOR_Y - this.HEIGHT - 0.5)
    }    



    // ===============================================================================
    // ACTIONS DIVERSES
    // ===============================================================================

    /** Mourir */
    mourir()
    {
        // Retire l'objet de la scène
        this._contenu.parent.removeChild(this._contenu);

        // On le retire de la liste des objets à updater
        var index = LISTE_OBJETS.indexOf(this);
        if(index > -1)
            LISTE_OBJETS.splice(index, 1);
    }


    /** Le personnage tombe dans un trou */
    tombeDansTrou()
    {
       this.mourir();
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

        // Update de l'orientation
        this.updateOrientation()

        // Gestion des déplacements avec collision
        super.update(_param_)
        var dt = _param_.delta/1000.
        if(norme(this._direction) && AUTORISE_COMMANDE)
        {
            var old = this.X;
            this.X += this._vitesse * this.direction_normee.x * dt;
            if(this.collisionMur() || this.collisionObjet())
                this.X = old;
            var old = this.Y;
            this.Y += this._vitesse * this.direction_normee.y * dt;
            if(this.collisionMur() || this.collisionObjet())
                this.Y = old;

            // Si on est dans un mur, on se repositionne correctement
            if(this.collisionMur() || this.collisionObjet())
                 this.repositionneHorsMurs()
        }


        // Gestion des sprites
        if(this.mouvementChange() || this.orientationChange())
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
                if(this._vitesse>5)
                {
                    switch(this._orientation)
                    {
                        case 1:
                            this.sprite.gotoAndPlay("court_droite")
                            break;
                        case 2:
                            this.sprite.gotoAndPlay("court_haut")
                            break;
                        case 3:
                            this.sprite.gotoAndPlay("court_gauche")
                            break;
                        case 4:
                            this.sprite.gotoAndPlay("court_bas")
                            break;
                    }
                }
                else
                {
                    switch(this._orientation)
                    {
                        case 1:
                            this.sprite.gotoAndPlay("marche_droite")
                            break;
                        case 2:
                            this.sprite.gotoAndPlay("marche_haut")
                            break;
                        case 3:
                            this.sprite.gotoAndPlay("marche_gauche")
                            break;
                        case 4:
                            this.sprite.gotoAndPlay("marche_bas")
                            break;
                    }
                }
            }
        }


        // Action quand on marche sur une tuile (au moins une tuile du patch)
        var patch = this.patch
        for(var i = 0; i < patch.length; i++)
        {
            patch[i].actionMarchPatch();    
            break;
        }

        var tuileCentre = this.tuile
        if(tuileCentre)
            tuileCentre.actionMarcheCentre(this)
    }
}