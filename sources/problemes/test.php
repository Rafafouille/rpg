<?php
$a = rand(1, 10);
$b = rand(1, 10);
?>

PROBLEME = {
    render:function(){return "Combien fait <?php echo $a?> + <?php echo $b?> ? <br/><input type='text' id='reponseTest' placeholder='Votre réponse ici'>";},

    // Fonction qui teste le résultat de la réponse de l'utilisateur
    check: function() {
        reponse = $('#reponseTest').val(); // Récupère la valeur de l'input de réponse
        return reponse==<?php echo $a + $b ?> ? true : false
    },

    // Fonction appelée en cas de bonne réponse
    success: function() {
                ouvreDialog("Bravo ! <?php echo $a?> + <?php echo $b?> = <?php echo $a + $b ?>");
                $("#probleme").dialog("close");
            },

    // Fonction appelée en cas de mauvaise réponse
    fail: function() {ouvreDialog("Ce n'est pas la bonne réponse. Essayez encore !")}
}