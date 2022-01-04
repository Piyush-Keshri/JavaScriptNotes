//Boxing -- When a method is used in a string JavaScript converts the primitive string type to a String object.
//          This process is known as Boxing.

const airline = 'TAP Air Portugal ';
console.log(airline.toLowerCase());
console.log('jonas'.toUpperCase());

//Fix case of a name
const passenger = 'JoNAs';
const passlower = passenger.toLowerCase();
const passcorrect = passlower[0].toUpperCase()+passlower.slice(1);
console.log(passcorrect);

//Check user email
const email = 'hello@jonas.io';
const loginemail = 'Hello@jonas.IO \n';

const lowerEmail = loginemail.toLowerCase();
const trimmedEmail= lowerEmail.trim();
console.log(trimmedEmail);

//Replace parts of Strings
const priceUS = '$288.97';
const priceIN = priceUS.replace('$','₹').replace('.',',');
console.log(priceIN);

const annoucement = 'All passengers come to boarding door 23.Boarding door23!';
console.log(annoucement.replace('door','gate'));
console.log(annoucement.replace(/door/g,'gate'));//Using Regex

//Booleans -- includes() ,startsWith(),endsWith();

const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('320'));
console.log(plane.endsWith('neo'));

//Split method && Join method
console.log('a+very+nice+string'.split('+')); //returns an array 

const[firstName,secondName] = 'Piyush Keshri'.split(' ');
console.log(firstName);

const newName = ['Mr.',firstName,secondName.toUpperCase()].join(' ');
console.log(newName);

const passenger1 = 'jessica ann smith davis';
const capitaliseName = function(name){

const names = name.split(' ');
const namesUpper = [];
for(const n of names)
{
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
}
console.log(namesUpper.join(' '));
};
capitaliseName('jessica ann smith davis');
capitaliseName('jonas schmedtmann');

//Padding
const message = 'Go to gate 23!';
console.log(message.padEnd(25,'+'));
console.log('Jonas'.padStart(25,'+'));
console.log('Jonas'.padEnd(25,'+'));

const maskCreditCard = function(number)
{
    const str = String(number);
    const last = str.slice(-4);
     return last.padStart(str.length,'X');
}
console.log(maskCreditCard(1234567891012297));