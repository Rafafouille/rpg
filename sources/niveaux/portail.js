
        // ==============
        // La carte 
        // ==============




        HHH = {nature: "mur", type: "barriere_H", zIndex: 3}
        EEE = {nature: "mur", type: "barriere_V", zIndex: 3}
        d83 = {nature: "mur", type: "buisson", zIndex: 3}
        _8_ = {nature: "sol", type: "fleur", zIndex: 3}
        ___ = {nature: "sol", type: "", zIndex: 1}
        xxx = {nature: "sol", type: "chemin", zIndex: 2}
        ooo = {nature: "sol", type: "route", zIndex: 4}
        _O_ = {nature: "trou", type: "", zIndex: 2}

         var carte = [
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,___,___,___,___,d83,xxx,xxx,xxx,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,d83,xxx,xxx,xxx,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,d83,___,___,___,___,d83,xxx,xxx,xxx,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,___,___,d83,xxx,xxx,xxx,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,___,d83,xxx,xxx,xxx,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,d83,xxx,xxx,d83,d83,d83,d83,d83,d83,___,___,___,___,___,___,___,d83,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,d83,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,d83,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,___,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,d83,___,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,d83,___,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,d83,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,d83,___,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,xxx,xxx,xxx,xxx,d83,___,___,___,___,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,xxx,xxx,xxx,xxx,xxx,xxx,d83,___,___,___,d83,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,xxx,xxx,xxx,_8_,xxx,xxx,xxx,d83,___,___,___,d83,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,xxx,xxx,xxx,___,___,_8_,xxx,xxx,xxx,d83,d83,d83,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,xxx,xxx,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,xxx,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,xxx,xxx,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_8_,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,xxx,xxx,xxx,xxx,___,___,___,___,___,___,___,___,___,___,___,___,___,___,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,_8_,xxx,xxx,xxx,xxx,xxx,_8_,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,xxx,xxx,xxx,xxx,xxx,___,___,___,___,___,___,___,___,___,___,___,___,d83,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,xxx,xxx,xxx,xxx,xxx,HHH,d83,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,xxx,xxx,xxx,xxx,xxx,___,___,___,___,___,___,___,___,___,___,d83,HHH,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,EEE,d83,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,xxx,xxx,xxx,xxx,xxx,___,___,___,___,___,___,___,___,d83,HHH,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,EEE,d83,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,xxx,xxx,xxx,xxx,xxx,___,___,___,___,___,___,d83,HHH,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,EEE,d83,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,xxx,xxx,xxx,xxx,xxx,___,___,___,___,d83,HHH,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,EEE,d83,___,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,xxx,xxx,xxx,xxx,xxx,___,___,d83,HHH,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,EEE,HHH,d83,___,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,xxx,xxx,xxx,xxx,xxx,d83,HHH,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,EEE,HHH,d83,___,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,xxx,xxx,xxx,xxx,HHH,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,EEE,HHH,d83,___,___,___,___,___,___,___,___,___,___,___],
[___,___,___,___,___,___,___,___,___,___,xxx,xxx,xxx,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,EEE,HHH,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83,d83],
[___,___,___,___,___,___,___,___,___,EEE,ooo,ooo,ooo,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,EEE,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH,HHH],
[___,___,___,___,___,___,___,___,d83,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[___,___,___,___,___,___,___,d83,HHH,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[___,___,___,___,___,___,d83,HHH,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[d83,d83,d83,d83,d83,d83,HHH,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[HHH,HHH,HHH,HHH,HHH,HHH,EEE,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo],
[ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo,ooo]
                      ]


        CARTE = new Carte(carte, [46,44], SCENE)




        // ==============
        // JOUEUR
        // ==============
        JOUEUR = new Joueur(
                {
                  //POSITION:{X:0, Y:-5},
                  POSITION:{X:-35, Y:-10},
                  nom: "Héros"
                });
        CARTE.ajouteObjet(JOUEUR)


        // ===============
        // PNJ
        // ==============


        /* PNJ = new Pnj({POSITION:{X:6, Y:-3}});
        CARTE.ajouteObjet(PNJ)
      

        PNJ2 = new Pnj({POSITION:{X:7, Y:-5}});
        CARTE.ajouteObjet(PNJ2)
                      */
        
        GARDIEN = new Pnj({
                      POSITION:{X:0, Y:0},
                      action : function(){ouvreDialog(["Et bien ! Et bien ! C'est à cette heure-ci qu'on arrive, "+JOUEUR.nom+" ?","Je vais vous apprendre à arriver en retard en cours ! Dans mon bureau et que ça sa...", "Eh ! Oh ! Revenez ici !"]);},
                      vitesse:2.7,
                      nom : "Pion",
                      comportement : function(){if(Math.abs(JOUEUR.X-this.X)>0.2){this.direction_x = JOUEUR.X-this.X}else{this.direction_x=0};this.orientation=2;},
                      updateOrientation : function(){this._orientation = 4;}
                    });        
        CARTE.ajouteObjet(GARDIEN)


        // ===================
        // Images sur la carte
        // ===================

        var eolienne = new ObjetImage({
                      source: "sources/images/objets/eolienne.png", // Chemin de l'image
                      POSITION:{X:-15, Y:11},  // Position sur la carte en cases
                      ANCHOR:{X:2, Y:-1.5},  // Ancrage de l'image en case
                      DIMENSIONS:{WIDTH:4, HEIGHT:3}, // Dimensions de l'objet en cases
                      POSITION_IMAGE:{X:-3,Y:7},  // Décalage de l'image à l'intérieur de l'objet en pixels (coordonnées par rapport à l'anchor)
                      ECHELLE_IMAGE:{X:0.9,Y:0.9},  // Échelle de l'image
                      action:function(){ouvreDialog("La grande éolienne du lycée.<br/> Elle sert d'entraînement pour le BTS \"Maintenance des Éoliennes\".<br/>Je rêve de grimper à l'intérieur !");}
                    });
        CARTE.ajouteObjet(eolienne);


        var pancarte = new ObjetImage({
                      source: "sources/images/objets/pancarte.png", // Chemin de l'image
                      POSITION:{X:-11, Y:2.5},  // Position sur la carte en cases
                      ANCHOR:{X:0, Y:0},  // Ancrage de l'image en case
                      DIMENSIONS:{WIDTH:6, HEIGHT:1}, // Dimensions de l'objet en cases
                      POSITION_IMAGE:{X:0,Y:3},  // Décalage de l'image à l'intérieur de l'objet en pixels (coordonnées par rapport à l'anchor)
                      ECHELLE_IMAGE:{X:0.65,Y:0.65},  // Échelle de l'image
                      action:function(){ouvreDialog("\"<em>LYCÉE EIFFEL<br/>Une vision d'avenir de la Science et de la Technologie</em>\"");}
                    });
        CARTE.ajouteObjet(pancarte);



        var voitureBleue = new ObjetImage({
                      source: "sources/images/objets/voiture_bleue.png", // Chemin de l'image
                      POSITION:{X:-5, Y:-3},  // Position sur la carte en cases
                      ANCHOR:{X:1.5, Y:-2.5},  // Ancrage de l'image en case
                      DIMENSIONS:{WIDTH:3, HEIGHT:3}, // Dimensions de l'objet en cases
                      POSITION_IMAGE:{X:0,Y:0},  // Décalage de l'image à l'intérieur de l'objet en pixels (coordonnées par rapport à l'anchor)
                      ECHELLE_IMAGE:{X:1,Y:1},  // Échelle de l'image
                      action:function(){ouvreDialog("Une voiture... bleue");}
                    });
        CARTE.ajouteObjet(voitureBleue);


       var voitureRouge = new ObjetImage({
                      source: "sources/images/objets/voiture_rouge.png", // Chemin de l'image
                      POSITION:{X:-9, Y:-3},  // Position sur la carte en cases
                      ANCHOR:{X:1.5, Y:-2.5},  // Ancrage de l'image en case
                      DIMENSIONS:{WIDTH:3, HEIGHT:3}, // Dimensions de l'objet en cases
                      POSITION_IMAGE:{X:0,Y:0},  // Décalage de l'image à l'intérieur de l'objet en pixels (coordonnées par rapport à l'anchor)
                      ECHELLE_IMAGE:{X:1,Y:1},  // Échelle de l'image
                      action:function(){ouvreDialog("Une voiture... rouge");}
                    });
        CARTE.ajouteObjet(voitureRouge);


        var voitureBleue2 = new ObjetImage({
                      source: "sources/images/objets/voiture_bleue.png", // Chemin de l'image
                      POSITION:{X:-17, Y:-3},  // Position sur la carte en cases
                      ANCHOR:{X:1.5, Y:-2.5},  // Ancrage de l'image en case
                      DIMENSIONS:{WIDTH:3, HEIGHT:3}, // Dimensions de l'objet en cases
                      POSITION_IMAGE:{X:0,Y:0},  // Décalage de l'image à l'intérieur de l'objet en pixels (coordonnées par rapport à l'anchor)
                      ECHELLE_IMAGE:{X:1,Y:1},  // Échelle de l'image
                      action:function(){ouvreDialog("Une voiture... bleue");}
                    });
        CARTE.ajouteObjet(voitureBleue2);



        var voitureBleueDos = new ObjetImage({
                      source: "sources/images/objets/voiture_bleue_dos.png", // Chemin de l'image
                      POSITION:{X:-9, Y:-10},  // Position sur la carte en cases
                      ANCHOR:{X:1.5, Y:-2.5},  // Ancrage de l'image en case
                      DIMENSIONS:{WIDTH:3, HEIGHT:1.7}, // Dimensions de l'objet en cases
                      POSITION_IMAGE:{X:0,Y:0.8},  // Décalage de l'image à l'intérieur de l'objet en pixels (coordonnées par rapport à l'anchor)
                      ECHELLE_IMAGE:{X:1,Y:1},  // Échelle de l'image
                      action:function(){ouvreDialog("Une voiture... bleue");}
                    });
        CARTE.ajouteObjet(voitureBleueDos);

        var voitureVerteDos = new ObjetImage({
                      source: "sources/images/objets/voiture_verte_dos.png", // Chemin de l'image
                      POSITION:{X:-17, Y:-10},  // Position sur la carte en cases
                      ANCHOR:{X:1.5, Y:-2.5},  // Ancrage de l'image en case
                      DIMENSIONS:{WIDTH:3, HEIGHT:1.7}, // Dimensions de l'objet en cases
                      POSITION_IMAGE:{X:0,Y:0.8},  // Décalage de l'image à l'intérieur de l'objet en pixels (coordonnées par rapport à l'anchor)
                      ECHELLE_IMAGE:{X:1,Y:1},  // Échelle de l'image
                      action:function(){ouvreDialog("Une voiture... verte");}
                    });
        CARTE.ajouteObjet(voitureVerteDos);



        if(AVENTURE.armoireElectriqueOuverte)
        {
          var armoireElectrique = new ObjetImage({
                        source: "sources/images/objets/armoire_electrique_ouverte.png", // Chemin de l'image
                        POSITION:{X:-38, Y:-13},  // Position sur la carte en cases
                        ANCHOR:{X:0.75, Y:-1.5},  // Ancrage de l'image en case
                        DIMENSIONS:{WIDTH:0.75, HEIGHT:2}, // Dimensions de l'objet en cases
                        POSITION_IMAGE:{X:-2.25,Y:0.5},  // Décalage de l'image à l'intérieur de l'objet en pixels (coordonnées par rapport à l'anchor)
                        ECHELLE_IMAGE:{X:1,Y:1},  // Échelle de l'image
                        action:function(){ouvreDialog(["L'armoire électrique est ouverte."]);},
                        bloquant:true
                      });
          }
          else
        {
          var armoireElectrique = new ObjetImage({
                        source: "sources/images/objets/armoire_electrique_fermee.png", // Chemin de l'image
                        POSITION:{X:-39.5, Y:-14},  // Position sur la carte en cases
                        ANCHOR:{X:1, Y:-2},  // Ancrage de l'image en case
                        DIMENSIONS:{WIDTH:2, HEIGHT:2}, // Dimensions de l'objet en cases
                        POSITION_IMAGE:{X:-0.5,Y:1},  // Décalage de l'image à l'intérieur de l'objet en pixels (coordonnées par rapport à l'anchor)
                        ECHELLE_IMAGE:{X:1,Y:1},  // Échelle de l'image
                        action:function(){ouvreDialog(["L'armoire électrique d'alimentation du lycée...","Tiens ? On dirait que le cadenas a été forcé..."]);}
                      });
                      //armoireElectrique.afficheCadre=true
          }
          
        CARTE.ajouteObjet(armoireElectrique);