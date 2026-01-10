
        // ==============
        // La carte 
        // ==============

        var carte = [   ["mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur"],
                        ["mur","sol","sol","sol","sol","sol","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol","sol","sol","sol","sol","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol","sol","sol","sol","mur","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol:chemin","sol:chemin","sol:chemin","sol:chemin","sol:chemin","mur","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol","mur","sol","mur","sol:chemin","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","sol","sol","sol","sol","sol:chemin","sol","sol","sol","sol","trou","sol","mur"],
                        ["mur","sol","sol","sol","mur","sol:chemin","sol","sol","sol","sol","sol","sol","mur"],
                        ["mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur","mur"]]

        CARTE = new Carte(carte, [1,2], SCENE)




        // ==============
        // JOUEUR
        // ==============
        JOUEUR = new Joueur({POSITION:{X:1, Y:0}});
        SCENE.addChild(JOUEUR.objet)
        LISTE_OBJETS.push(JOUEUR)




        PNJ = new Pnj({POSITION:{X:6, Y:-3}});
        SCENE.addChild(PNJ.objet)
        LISTE_OBJETS.push(PNJ)
      

        PNJ2 = new Pnj({POSITION:{X:7, Y:-5}});
        SCENE.addChild(PNJ2.objet)
        LISTE_OBJETS.push(PNJ2)

        
        PNJ3 = new Pnj({POSITION:{X:7, Y:0}});
        SCENE.addChild(PNJ3.objet)
        LISTE_OBJETS.push(PNJ3)