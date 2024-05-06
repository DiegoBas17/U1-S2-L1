/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const stringa= "String"
console.log("Il primo datatype è la " + stringa + ". Questa è una sorta di contenitore dedicata solo ed esclusivamente ad un testo.")
const numeri= "Number"
console.log("il secondo datatype è " + numeri + ". Questo è un contenitore dedicato solo ed esclusivamante al allocazione di valori numerici.")
const booleano= "Boolean"
console.log("Il terzo datatype è " + booleano +". questo è un contenitore dove sono ammessi solo due tipi di valori: true e false.") 
const indefinito= "Undefined"
console.log("Il quarto datatype è " + indefinito +". questo è una proprietà che indica la mancata assegnazione ad una variabile.") 
const nullo= "Null"
console.log("Il quinto datatype è " + nullo +". questo è utilizzato per dare volontariamente un valore nullo ad una variabile.") 

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName= "Diego"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero=12
const numero2=20
let somma= numero + numero2
console.log("la somma dei numeri è: ", somma)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x= 12
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* const myName= Basili */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione= 4 - x
console.log("Questa è la sottrazione: ", sottrazione)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1="john"
const name2="John"
let nomiUguali= (name1 === name2) ? "Vero" : "Falso"
console.log("I due nomi sono ugualu?", nomiUguali)
let nomiUguali2=(name1 !== name2)  ? "Vero" : "Falso"
console.log("I due nomi sono ugualu se non teniamo conto del case-sensitive?", nomiUguali2) ? "Vero" : "Falso"
