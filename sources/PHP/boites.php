
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