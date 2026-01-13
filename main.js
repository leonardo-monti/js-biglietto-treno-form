document.getElementById("calcola").addEventListener("click", function () {

    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let km = Number(document.getElementById("km").value);
    let eta = Number(document.getElementById("eta").value);

    let prezzo = km * 0.21;

    if (eta < 18) {
        prezzo = prezzo * 0.8;
    } else if (eta >= 65) {
        prezzo = prezzo * 0.6;
    }

    document.getElementById("risultato").innerHTML =
        `Biglietto per: ${nome} ${cognome} 
        Prezzo: € ${prezzo.toFixed(2)}`;
});