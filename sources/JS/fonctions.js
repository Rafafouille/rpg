/** Fonction qui calcule la norme d'une vecteur V*/
function norme(V)
{
    n = 0;
    for(v in V)
        n += V[v]*V[v]
    return Math.sqrt(n)
}


