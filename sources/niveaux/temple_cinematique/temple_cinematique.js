
        // ==============
        // La carte 
        // ==============




        HHH = {nature: "mur", type: "barriere_H", zIndex: 3}
        EEE = {nature: "mur", type: "barriere_V", zIndex: 3}
        d83 = {nature: "mur", type: "buisson", zIndex: 3}
        _8_ = {nature: "sol", type: "fleur", zIndex: 3}
        ___ = {nature: "sol", type: "", zIndex: 1}
        xxx = {nature: "sol", type: "chemin", zIndex: 2}
        ooo = {nature: "sol", type: "route", zIndex: 4}
        _O_ = {nature: "trou", type: "", zIndex: 2}

         var carte = [
[___,___,___,___,___,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,HHH,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___],
[___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___],
[HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___],
[HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___],
[___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___],
[HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___],
[___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___],
[___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___],
[___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,HHH,HHH,ooo,ooo,ooo,HHH,HHH,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,HHH,ooo,ooo,ooo,HHH,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___]
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


  