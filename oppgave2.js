

//oppgave 1 Funksjonen skal ta inn et tall som parameter og returnere
//"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
//(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni funksjonen)
let number = 8;
let reminder = number % 2;

function sjekkPartallEllerOddetall(tall) {
    if (tall % 2 === 0) {
        return "Partall";
    } else {
        return "Oddetall";
    }
}
console.log(sjekkPartallEllerOddetall(number));
//oppgave 2 Lag en funksjon som tar inn en string som parameter og returnerer stringen i store backsatver med et utrostegn på slutten.
let tekst = "hei på deg";

function endreTekst(tekst) {
    return tekst.toUpperCase() + "!";
}
console.log(endreTekst(tekst));
//oppgave 3 Funksjonen skal ta inn 2 parametere:
let Javad = "Javad";
let Time = 23;

function hilsen(Javad, Time) {
    if (Time === 10 || typeof Time !== 'number') {
        return "Feil: Time må oppgis som et tall";
    }

    if (Time < 0 || Time > 23) {
        return "Ugyldig tid";
    }
    
    if (Time >= 0 && Time <= 5) {
        return `God natt ${Javad}`;
    } else if (Time >= 6 && Time <= 11) {
        return `God morgen ${Javad}`;
    } else if (Time >= 12 && Time <= 17) {
        return `God dag ${Javad}`;
    } else if (Time >= 18 && Time <= 23) {
        return `God kveld ${Javad}`;
    }
}
console.log(hilsen(Javad, Time));

// oppgave 4 lag en funksjon som ta inn en array som paramemeter og returnenere arrayen med forste og siste index  fjernert.
let arr = [1, 2, 3, 4, 5];
const arrResultat = arr.slice(1, -1);
console.log(arrResultat);
// oppgave 4b

const frukter = ["apple", "banana", "cherry", "date", "elderberry"];
const frukterResultat = frukter.slice(1, -1);
console.log(frukterResultat);
// oppgave 5 inherit funkjon
let text1 = "javascriopt er vanskelig, ";
let text2 = text1.replace("vanskelig", "gøy");
console.log(text2);
// oppgave 6a
const items = [ "Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];
items.splice(0, 1); 
console.log(items);
let item = items.slice(items.length - 3, items.length - 2);
console.log(item);
items.splice(items.length - 4, );
console.log(items);

// oppgave 6b
const array = [ "Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];
const result = array.join("|");
console.log(result);
// oppgave 6c et nytt array som kun inkluderer elementer som inneholder bokstaven "e"
const filteredArray = array.filter(element => element.includes("e"));
console.log(filteredArray);
// oppgave 6d lag en funksjon som tar inn et array som parameter og returnerer et nytt array der alle elementene er i store bokstaver.
function leggTilEmoji(parameter) {
    if (typeof parameter === 'string') {
        return `😎${parameter}😎`;
    }
}
console.log(leggTilEmoji("hello world"));