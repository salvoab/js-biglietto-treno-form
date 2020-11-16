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
        var tipoOfferta = "Prezzo Standard";
        
        //Verifico se è necessario applicare uno sconto
        var sconto = 0;
        if(fasciaEta == "minorenne" ){
            //Passeggero minorenne e applico lo sconto del 20%
            sconto = prezzoBiglietto * 20 / 100;
            tipoOfferta = "Sconto Minorenne";
        } else if(fasciaEta == "over65"){
            sconto = prezzoBiglietto * 40 / 100;
            tipoOfferta = "Sconto Senior";
        }
        //Sottraggo lo sconto al prezzoBiglietto (se lo sconto non è stato applicato sottraggo 0)
        prezzoBiglietto = prezzoBiglietto - sconto;
        //Selezione elementi di output
        var elementoNomePasseggero = document.getElementById("nome-passeggero");
        var elementoOfferta = document.getElementById("offerta");
        var elementoCarrozza = document.getElementById("carrozza");
        var elementoCodiceCp = document.getElementById("codice-cp");
        var elementoPrezzo = document.getElementById("prezzo-biglietto");
        //Output
        elementoNomePasseggero.innerHTML = nomePasseggero;
        elementoOfferta.innerHTML = tipoOfferta;
        //Carrozza è un numero random da 1 a 10
        elementoCarrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
        //Codice Cp è un numero compreso fra 90000 e 100000
        elementoCodiceCp.innerHTML = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
        elementoPrezzo.innerHTML = prezzoBiglietto.toFixed(2) + "€";
        var sezioneBiglietto = document.getElementById("biglietto");
        sezioneBiglietto.style.display = "block";
    }
    else{
        alert("Errore! E' obbligatorio inserire Nome e Cognome e i km devono essere più di zero");
    }
});


btnAnnulla.addEventListener("click", function(){
    document.getElementById("full-name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "minorenne";
    var sezioneBiglietto = document.getElementById("biglietto");
    sezioneBiglietto.style.display = "none";
});