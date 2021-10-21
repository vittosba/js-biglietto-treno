const chilometri = parseInt( prompt('Quanti chilometri vuoi percorrere?'));
const eta = parseInt( prompt('Quale è la tua età?'));

let prezzo = chilometri * 0.21;

if (eta < 18) {
    prezzo -= prezzo * 20 / 100;
}
else if (eta > 65) {
    prezzo -= prezzo * 40 /100;
}

prezzo = prezzo.toFixed(2);

document.getElementById('prezzo').innerHTML = `Il prezzo del biglietto è di: ${prezzo}$`;