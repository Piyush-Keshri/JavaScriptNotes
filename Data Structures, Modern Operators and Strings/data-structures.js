'use strict';

const openingHours = {
  thu:{
    open:12,
    close:22,
  },
  fri:{
    open:11,
    close:23,
  },
  sat:{
    open:0,
    close:24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
 
  order(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery: function({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
  console.log(`Order recieved! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
  will be delivered to ${address} at ${time}`
  );
  },
  //ES6 enhanced object literals.
  openingHours,

 orderPasta(ing1,ing2,ing3)
 {
   console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
 },

 orderPizza(mainIngredient,...otherIngredients)
 {
   console.log(mainIngredient);
   console.log(otherIngredients);
 }
};

//-----------------------SETS----------------------------//
//Set is basically just a collection of unique values,that means a set can never have any duplicates.
//In Set there are no indexes and there is no way to get values out from a set.
/*
const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza']);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic-Bread');
ordersSet.delete('Risotto');
//ordersSet.clear(); -- deletes all elements of the Set.
console.log(ordersSet);

//Iterating in a set.
for(const x of ordersSet)
{
    console.log(x);
}

const staff =['Waiter','Chef','Waiter','Manager','Chef','Waiter','BusBoy'];
const staffUnique =[...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter','BusBoy']).size);

console.log(new Set('PiyushKeshri'));
*/

//------------------MAPS----------------------------//
//A map is a JavaScript data-structure that we can use to map values to keys.
//Just like objects data is stored in key value pairs in maps.
//Difference between objects and maps is that in maps the keys can have any datatype.

const rest = new Map();
rest.set('name','Classico Italiano');
rest.set(1,'Firenze,Italy');
console.log(rest.set(2,'Lisbon,Portugal'));

rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open',11)
    .set('close',23)
    .set(true,'We Are Open 😊')
    .set(false,'We Are Closed 😞');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
 
const time =9;
console.log(rest.get(time>rest.get('open') && time<rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
rest.set([1,2],'test');
console.log(rest);
console.log(rest.size);

const question = new Map([
['question','What is the best programming language in the world?'],
[1,'C'],
[2,'Java'],
[3,'JavaScript'],
['correct',3],
[true , 'Correct ✅'],
[false, 'Try Again!🔁'], 
]);

//Convert Object to Map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

/*
Sources of Data

1.From the program itself -- Data written directly in source code.
2.From the UI -- Data input from the user or data written in DOM(eg:- tasks in todo app).
3.From external sources -- data fetched for example from web API(eg:- recipe objects).

# After collecting the data from the above sources we store them in data structures.
# There are 4 built in data structures in javaScript Arrays,Set,Objects,Maps.
  There are also some other built in data structures like WeakMap and WeakSet.

# When to Use Arrays.
1.Used when we need ordered list of values(might contain duplicates)
2.Used when we need to manipulate data.

# When to use SETS
1.Used when we need to work with unique values.
2.Used when high performance is really important.
3.Used to remove Duplicates from Arrays.

# When to Use OBJECTS
1.More "traditional" key/value store.
2.Easier to write and access values with . and []
3.Used when we need to include functions(methods)
4.Used when working with JSON(can convert to map)

# When to Use MAPS
1.Better Performance
2.Keys can have any data type 
3.Easy to iterate
4.Easy to compute size.
5.Used when we simply need to map key to values.
6.Used when we need keys that are not strings.


*/
