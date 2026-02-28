PROBLEME = {
    render:function(){return "\
            <table>\
                <tr>\
                    <td>\
                        <img src=\"sources/problemes/armoireElectrique/engrenages.svg\" height=\"400\"/>\
                    </td>\
                    <td>\
                        J'arrive à voir l'intérieur du mécanisme !\
                        De quel angle dois-je tourner la clé pour dégager le verrou ?\
                        <br/><br/>\
                        <input type=\"text\" id=\"reponse_armoire_electrique\" placeholder=\"Votre réponse en degrés\"/>\
                    </td>\
                </tr>\
            </table>";},

    // Fonction qui teste le résultat de la réponse de l'utilisateur
    check: function() {
            var reponse = parseFloat($("#reponse_armoire_electrique").val()); // Récupère la valeur de l'input de réponse et la convertit en flottant
            if (reponse==1) {return true} else {return false}
        },

    // Fonction appelée en cas de bonne réponse
    success: function() {
            fermeProbleme();
            ouvreDialog("Bonne réponse ! Vous avez réussi à ouvrir l'armoire électrique !")
        },

    // Fonction appelée en cas de mauvaise réponse
    fail: function() {
            ouvreDialog("Ce n'est pas la bonne réponse. Essayez encore !")
        }
}