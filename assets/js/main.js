var btnGenera = document.getElementById("btn-genera");
var btnAnnulla = document.getElementById("btn-annulla");

btnGenera.addEventListener("click", function(){
    var nomePasseggero = document.getElementById("full-name").value;
    var kmViaggio = Math.abs(Number(document.getElementById("km").value));
    var fasciaEta = document.getElementById("eta").value;

    //Logica dell'esercizio precedente modificata
    if( nomePasseggero != "" && kmViaggio > 0 ){
        var prezzoAlKm = 0.21;
        var prezzoBiglietto = kmViaggio * prezzoAlKm;
        console.log("Prezzo del biglietto: " + prezzoBiglietto + "€");
        
        //Verifico se è necessario applicare uno sconto
        var sconto = 0;
        if(fasciaEta == "minorenne" ){
            //Passeggero minorenne e applico lo sconto del 20%
            sconto = prezzoBiglietto * 20 / 100;
            console.log("Sconto del 20%: " + sconto);
        } else if(fasciaEta == "over65"){
            sconto = prezzoBiglietto * 40 / 100;
            console.log("Sconto del 40%: " + sconto);
        }
        //Sottraggo lo sconto al prezzoBiglietto (se lo sconto non è stato applicato sottraggo 0)
        prezzoBiglietto = prezzoBiglietto - sconto;
        console.log("Il prezzo finale del biglietto è: " + prezzoBiglietto.toFixed(2));
    }
    else{
        alert("Errore! E' obbligatorio inserire Nome e Cognome e i km devono essere più di zero");
    }
});
