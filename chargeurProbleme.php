<?php
$probleme = $_GET['probleme'] ?? null;




// Liste des problèmes autorisés et on filtre l'accès
$problemesAutorises = ['test','armoireElectrique'];

if (!in_array($probleme, $problemesAutorises)) {
    http_response_code(403);
    exit;
}



header('Content-Type: application/javascript');

switch ($probleme) {
    case 'armoireElectrique':
        include __DIR__ . "/sources/problemes/armoireElectrique/armoireElectrique.js";
        break;

    case 'test':
        include __DIR__ . "/sources/problemes/test.php";
        break;

    default:
        echo 'console.log("Problème non-chargé");';
}

?>