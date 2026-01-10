<?php
$niveau = $_GET['niveau'] ?? null;




// Liste des niveaux autorisés et on filtre l'accès
$niveauxAutorise = ['test'];

if (!in_array($niveau, $niveauxAutorise)) {
    http_response_code(403);
    exit;
}



header('Content-Type: application/javascript');

switch ($niveau) {
    case 'test':
        readfile(__DIR__ . "/sources/niveaux/test.js");
        break;

    default:
        echo 'console.log("Niveau non-chargé");';
}