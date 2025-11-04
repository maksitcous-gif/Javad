// oppgave 1 koble javascript filen til html filen
console.log("JavaScript file is linked successfully!");

// oppgave 2 lage en funksjon variabler som kan holde ulike data typer
const name = "jon"; // string
const age = 21; // number
const isStudent = true; // boolean
const hobbies = ["reading", "gaming", "coding"]; // array
console.log(name, age, isStudent, hobbies);

// oppgave 2 lage en funksjon som tar inn to tall og returnerer summen av dem
const x = 5;
const y = 6;
const z = x + y;
console.log("Summen av", x, "og", y, "er:", z);

// oppgave 3 matematiske operatorer:

let a =8;
let b =4;
let c = a + b; // addisjon
let d = a - b; // subtraksjon
let e = a * b; // multiplikasjon
let f = a / b; // divisjon
let g = a % b; // modulus
console.log("Addisjon:", c);
console.log("Subtraksjon:", d);
console.log("Multiplikasjon:", e);
console.log("Divisjon:", f);
console.log("Modulus:", g);

a += 2; // a = a + 2
console.log("a += 2:", a);

// oppgave 4 lage en funksjon som sjekker om et tall er partall eller oddetall
let userName = "Kan";
let userAge = 25;
let userIsBlocked = false;
if (userAge >= 18 && !userIsBlocked) {
    console.log(userName, "er voksen og ikke blokkert.");
}
else userIsBlocked = true;
{
    console.log(userName, "er enten mindreårig eller blokkert.");
}

// oppgave 5 lage ternary operator som sjekker om en bruker er mann eller kvinne
const userMale = true;
console.log(userName, userMale ? "er mann." : "er kvinne.");
