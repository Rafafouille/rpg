
<!-- Boite de dialogue -->
<div id="dialog" title="">
    <p id="dialog-message"></p>
</div>


<script>
    $( function() {
        $( "#dialog" ).dialog({
            //open: function() {$(this).dialog("widget").find(".ui-dialog-titlebar").hide();}, // Pour virer le titre
            autoOpen: false,    // La boîte ne s'ouvre pas automatiquement, c'est nous qui allons l'ouvrir avec la fonction ouvreDialog(message)
            modal: true,    // Empêche de cliquer en dehors de la boîte pour la fermer
            dialogClass: "no-close", // Pour virer la croix de fermeture
            closeOnEscape: false,   // Empêche de fermer la boîte avec la touche Echap
            buttons: {
                "Terminer": function() {
                    $( this ).dialog( "close" );
                }   
            },
            show: {
                effect: "blind",
                duration: 200
            },
            hide: {
                effect: "blind",
                duration: 200
            }
        });
    } );
</script>





<!-- Boite de problèmes -->
<div id="probleme" title="">
</div>


<script>
    $( function() {
        $( "#probleme" ).dialog({
            //open: function() {$(this).dialog("widget").find(".ui-dialog-titlebar").hide();}, // Pour virer le titre
            autoOpen: false,
            modal: true,
            dialogClass: 'noTitleStuff',
            width: 700,
            closeOnEscape: false,
            buttons: {
                "Quitter": function() {fermeProbleme();},
                "Valider": function() {
                        if (PROBLEME.check()) // Vérifie la réponse
                            PROBLEME.success(); // Appelle la fonction de succès du problème
                        else
                            PROBLEME.fail(); // Appelle la fonction d'échec du problème
                    }   
            },
            show: {
                effect: "blind",
                duration: 200
            },
            hide: {
                effect: "blind",
                duration: 200
            }
        });
    } );
</script>