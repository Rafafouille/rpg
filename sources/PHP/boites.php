
<!-- Boite de dialogue -->
<div id="dialog" title="">
    <p id="dialog-message"></p>
</div>


<script>
    $( function() {
        $( "#dialog" ).dialog({
            //open: function() {$(this).dialog("widget").find(".ui-dialog-titlebar").hide();}, // Pour virer le titre
            autoOpen: false,
            modal: true,
            dialogClass: 'noTitleStuff',
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
            width: 500,
            buttons: {
                "Quitter": function() {$(this).dialog( "close" );},
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