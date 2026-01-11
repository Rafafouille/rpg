
        // ==============
        // La carte 
        // ==============




        HHH = {nature: "mur", type: "chemin", zIndex: 2}
        d88 = {nature: "mur", type: "buisson", zIndex: 2}
        ___ = {nature: "sol", type: "", zIndex: 1}
        xxx = {nature: "sol", type: "chemin", zIndex: 2}
        _O_ = {nature: "trou", type: "", zIndex: 2}

         var carte = [  [HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
                        [HHH,___,___,___,___,___,___,___,___,___,___,___,HHH],
                        [HHH,___,___,___,___,___,___,___,___,___,___,___,HHH],
                        [HHH,___,___,___,___,HHH,___,___,___,___,___,___,HHH],
                        [HHH,xxx,xxx,xxx,xxx,xxx,HHH,___,___,___,___,___,HHH],
                        [HHH,___,HHH,___,HHH,xxx,___,___,___,___,___,___,HHH],
                        [HHH,___,___,___,___,xxx,___,___,___,___,_O_,___,HHH],
                        [HHH,___,___,___,HHH,xxx,___,___,___,___,___,___,HHH],
                        [HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH]]

        CARTE = new Carte(carte, [1,2], SCENE)




        // ==============
        // JOUEUR
        // ==============
        JOUEUR = new Joueur({POSITION:{X:1, Y:0}});
        SCENE.addChild(JOUEUR.objet)
        CARTE.ajouteObjet(JOUEUR)




        PNJ = new Pnj({POSITION:{X:6, Y:-3}});
        SCENE.addChild(PNJ.objet)
        CARTE.ajouteObjet(PNJ)
      

        PNJ2 = new Pnj({POSITION:{X:7, Y:-5}});
        SCENE.addChild(PNJ2.objet)
        CARTE.ajouteObjet(PNJ2)

        
        PNJ3 = new Pnj({POSITION:{X:7, Y:0}});
        SCENE.addChild(PNJ3.objet)
        CARTE.ajouteObjet(PNJ3)