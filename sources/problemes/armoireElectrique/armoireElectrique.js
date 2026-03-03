PROBLEME = {
    render:function(){return "\
            <table>\
                <tr>\
                    <td>\
                        <img src=\"sources/problemes/armoireElectrique/engrenages.svg\" height=\"400\"/>\
                    </td>\
                    <td>\
                        Avec une épingle, j'arrive à crocheter la serrure.\
                        De quel angle dois-je la tourner pour dégager le verrou ?\
                        <br/><br/>\
                        <input type=\"text\" id=\"reponse_armoire_electrique\" placeholder=\"Votre réponse en degrés\"/>\
                    </td>\
                </tr>\
            </table>";},

    // Fonction qui teste le résultat de la réponse de l'utilisateur
    check: function() {
            var reponse = parseFloat($("#reponse_armoire_electrique").val()); // Récupère la valeur de l'input de réponse et la convertit en flottant
            if (reponse>22.036838274 && reponse <26.444205929) {return true} else {return false}
        },

    // Fonction appelée en cas de bonne réponse
    success: function() {
            AVENTURE.armoireElectriqueOuverte = true; // On met à jour le tag correspondant
            PILE_ACTIONS.push(function(){ouvreDialog("Bonne réponse ! Vous avez réussi à ouvrir l'armoire électrique !");});
            PILE_ACTIONS.push(function(){chargeNiveau("portail",{X:-39,Y:-14})});
            fermeProbleme();

        },

    // Fonction appelée en cas de mauvaise réponse
    fail: function() {
            ouvreDialog("Ce n'est pas la bonne réponse. Essayez encore !")
        }
}