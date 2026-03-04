<?php
$niveau = $_GET['niveau'] ?? null;




// Liste des niveaux autorisés et on filtre l'accès
$niveauxAutorise = ['test', 'portail', 'temple_cinematique'];

if (!in_array($niveau, $niveauxAutorise)) {
    http_response_code(403);
    exit;
}



header('Content-Type: application/javascript');

$fichiersNiveau = [
    'test' => __DIR__ . '/sources/niveaux/test/test.js',
    'portail' => __DIR__ . '/sources/niveaux/portail/portail.js',
    'temple_cinematique' => __DIR__ . '/sources/niveaux/temple_cinematique/temple_cinematique.js',
];

if (!isset($fichiersNiveau[$niveau]) || !is_file($fichiersNiveau[$niveau])) {
    http_response_code(404);
    echo 'console.error("Fichier de niveau introuvable.");';
    exit;
}

switch ($niveau) {
    case 'test':
        readfile($fichiersNiveau['test']);
        break;

    case 'portail':
        readfile($fichiersNiveau['portail']);
        break;

    case 'temple_cinematique':
        readfile($fichiersNiveau['temple_cinematique']);
        break;

    default:
        echo 'console.log("Niveau non-chargé");';
}
?>