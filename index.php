<html>
    <head>
        <!-- Bibliothèques ============================================== -->
        <script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        
        <!-- Scripts ==================================================== -->
        <script src="./sources/JS/fonctions.js"></script>
        <script src="./sources/JS/parametres.js"></script>
        <script src="./sources/JS/evenements.js"></script>
        <script src="./sources/JS/classes/CLASS_ObjetGraphique.js"></script>
        <script src="./sources/JS/classes/CLASS_Personnage.js"></script>
        <script src="./sources/JS/classes/CLASS_Joueur.js"></script>

        <script src="./sources/JS/initStage.js"></script>

        <!-- Style ===================================================== -->
         <link rel="stylesheet" href="./sources/style/style.css" />

    </head>
    <body onload="initStage();">
        <canvas id="canvas" width="500" height="200" style="border:solid 1px"></canvas>
    </body>
</html>


