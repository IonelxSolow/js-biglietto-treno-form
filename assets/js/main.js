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
    
    let km = parseFloat(document.getElementById("km").value); //converte la stringa in numeri decimali
    let eta = parseInt(document.getElementById("eta").value); //converte la stringa in numeri interi
    
    const prezzoKm = 0.21;
    let prezzoTotale = km * prezzoKm;
    
    if (eta < 18) {
        prezzoTotale *= 0.8; //20% di sconto
    } else if (eta > 65) {
        prezzoTotale *= 0.6; //40% di sconto
    }
    
    document.getElementById("prezzo").innerText = `€${prezzoTotale.toFixed(2)}`;
});