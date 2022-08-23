const priceKm = 0.21;

// users data input
const distance = parseInt(prompt('Quanti km vuoi percorrere?'));
if (isNaN(distance)) {
    alert('Valore inserito non valido!');
} else {
    const age = parseInt(prompt('Quanti anni hai?'));
    if (isNaN(age)) {
        alert('Valore inserito non valido!');
    } else {
        // price calc 
        let ticketPrice = priceKm * distance;
        // alert travel price
        alert('Il prezzo del viaggio è ' + ticketPrice + "€")
    }
}











