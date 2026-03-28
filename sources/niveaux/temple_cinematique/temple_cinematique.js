
        // ==============
        // La carte 
        // ==============

        COULEUR_SOL_DEFAUT="#000000";


        HHH = {nature: "mur", type: "falaise", zIndex: 3}
        _8_ = {nature: "sol", type: "fleur", zIndex: 3}
        ___ = {nature: "sol", type: "", zIndex: 1}
        xxx = {nature: "sol", type: "chemin", zIndex: 2}
        ooo = {nature: "sol", type: "dedale", zIndex: 4}
        _0_ = {nature: "trou", type: "", zIndex: 2}

         var carte = [
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[_0_,_0_,_0_,_0_,_0_,_0_,_0_,ooo,ooo,ooo,_0_,_0_,_0_,_0_,_0_,_0_,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,HHH,HHH,HHH,HHH,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH]
                      ]


        CARTE = new Carte(carte, [7,41], SCENE)

        $("#canvas").css("background-color", "#000000");


        // ==================
        // Actions sur certaines tuiles
        // ==================
        
        CARTE.getTuile(0,-2).actionMarcheCentre = function(){chargeNiveau("portail",{X:-39.5,Y:-14.5})};
        CARTE.getTuile(1,-2).actionMarcheCentre = function(){chargeNiveau("portail",{X:-39.5,Y:-14.5})};
        CARTE.getTuile(-1,-2).actionMarcheCentre = function(){chargeNiveau("portail",{X:-39.5,Y:-14.5})};

        
        // ==============
        // JOUEUR
        // ==============
        JOUEUR = new Joueur(
                {
                  //POSITION:{X:0, Y:-5},
                  //POSITION:{X:-20, Y:-10},
                  nom: "Héros"
                });
        CARTE.ajouteObjet(JOUEUR)


  