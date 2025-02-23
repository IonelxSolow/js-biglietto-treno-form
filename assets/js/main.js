/* // MILESTONE 1

// Funzione per calcolare il prezzo del biglietto
function calcolaPrezzo() {
    // Prendo i dati dall'utente
    let km = parseFloat(prompt("Inserisci i chilometri da percorrere:"));
    let eta = parseInt(prompt("Inserisci la tua età:"));
    
    // Prezzo base per km
    const prezzoKm = 0.21;
    let prezzoTotale = km * prezzoKm;
    
    // Applico gli sconti
    if (eta < 18) {
        prezzoTotale *= 0.8; // Sconto del 20%
    } else if (eta > 65) {
        prezzoTotale *= 0.6; // Sconto del 40%
    }
    
    // Output in console
    console.log(`Prezzo del biglietto: €${prezzoTotale.toFixed(2)}`);
}

// Chiamata della funzione
calcolaPrezzo();
 */

//####################################

// MILESONE 2


document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let km = parseFloat(document.getElementById("km").value);
    let eta = parseInt(document.getElementById("eta").value);
    
    const prezzoKm = 0.21;
    let prezzoTotale = km * prezzoKm;
    
    if (eta < 18) {
        prezzoTotale *= 0.8; // 20% di sconto
    } else if (eta > 65) {
        prezzoTotale *= 0.6; // 40% di sconto
    }
    
    document.getElementById("prezzo").innerText = `€${prezzoTotale.toFixed(2)}`;

    document.getElementById("nomePasseggero").innerText = "Jon Snow";
    document.getElementById("offerta").innerText = "Biglietto Standard";
    document.getElementById("carrozza").innerText = "5";
    document.getElementById("codiceCP").innerText = "92911";
    document.getElementById("costoBiglietto").innerText = `€${prezzoTotale.toFixed(2)}`;
});