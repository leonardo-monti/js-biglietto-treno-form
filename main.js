document.getElementById("calcola").addEventListener("click", function () {


    let km = Number(document.getElementById("km").value);
    let eta = Number(document.getElementById("eta").value);

    let prezzo = km * 0.21;

    if (eta < 18) {
        prezzo = prezzo * 0.8;
    } else if (eta >= 65) {
        prezzo = prezzo * 0.6;
    }

    console.log("Il prezzo del biglietto è: €" + prezzo.toFixed(2));


});
