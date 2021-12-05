/*
let val;

val = document;
val = document.all;
val = document.all[3];
val = document.all.length;
val = document.head;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);


console.log(val);
*/

// ---------------------DOM SELECTORS---------------------------//

// There are two types of selectors : single element selectors and multiple element selctors.

//-------Single element selectors
/*
// document.getElementById()
console.log(document.getElementById('task-title'));

//Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

//Change Styling
taskTitle.style.background = '#444';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '1rem';
//taskTitle.style.display = 'none';

//Change Content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//document.querySelector() -- We can select an element by anything.
  console.log(document.querySelector('#task-title'));
  console.log(document.querySelector('.card-title'));
  console.log(document.querySelector('h5'));

  document.querySelector('li').style.color = 'red';
  document.querySelector('ul li').style.color = 'blue';
  document.querySelector('li:last-child').style.color = 'yellow';
  document.querySelector('li:nth-child(3)').style.color = 'coral';
  document.querySelector('li:nth-child(4)').textContent = 'Hello-World';
  document.querySelector('li:nth-child(odd)').style.background = '#ccc';
*/
  
//--------------Multiple Element Selectors

/*
  //document.getElementsBYClassName()

  const items = document.getElementsByClassName('collection-item');
  console.log(items);
  console.log(items[0]);
  items[0].style.color = 'purple';
  items[3].textContent = 'Hello';

  const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
  console.log(listItems);

  //document.getElementsByTagName

  let lis = document.getElementsByTagName('li');
  console.log(lis);
  console.log(lis[0]);
  lis[1].style.color = 'coral';
  lis[4].textContent = 'World';

  //Convert HTML Collection into Array
  lis = Array.from(lis);
  lis.reverse();

  lis.forEach(function(li,index)
  {
    console.log(li.className);
    li.textContent = `${index}:Hello`;
  });
  console.log(lis);

  //document.querySelectorAll
  const item1 = document.querySelectorAll('ul.collection.li.collection-item');
  console.log(item1);

  item1.forEach(function(item,index)
  {
    item.textContent = `${index}:Hello`;
  });
  const liOdd = document.querySelectorAll('li:nth-child(odd)');
  const liEven = document.querySelectorAll('li:nth-child(even)');

  liOdd.forEach(function(li,index)
  {
    li.style.background = '#ccc';
  });

  for(let i =0; i<liEven.length;i++)
  {
    liEven[i].style.background = '#f4f4f4';
  }
  console.log(item1);
  */

  //*****************************************************************************//

  //--------------Traversing The DOM---------------------//
/*
  let val;

  const list = document.querySelector('ul.collection');
  const listItem = document.querySelector('li.collection-item:first-child');

  val = list;
  val = listItem;

  //Get child Node
  val = list.childNodes;
  val = list.childNodes[0];
  val = list.childNodes[0].nodeName;
  val = list.childNodes[1].nodeType;

  //NodeType numbering convention
  // 1 - Element 
  // 2 - Attribute(deprecated)
  // 3 - Text node
  // 8 - Comment
  // 9 - Document itself
  // 10 - Doctype

  //Get children element nodes
  val = list.children;
  val = list.children[0];
  val.textContent = 'Hello';

  //Children of children
  list.children[3].children[0].id = 'test-link';
  val = list.children[3].children;

  //First Child
  val = list.firstChild;
  val = list.firstElementChild;

  //Last Child
  val = list.lastChild;
  val = list.lastElementChild;

  //Count Child Elements
  val = list.childElementCount;

  //Get Parent Node
  val = listItem.parentNode;
  val = listItem.parentElement;
  val = listItem.parentElement.parentElement;

  //Get next Sibling
  val = listItem.nextSibling;
  val = listItem.nextSibling.nextSibling;
  

  console.log(val);
*/
  //**************************************************************************//

  //----------------- Create Elements -----------------------//
/*
  const li = document.createElement('li');

  //Add Class
  li.className = 'collection-item';

  //Add id
  li.id = 'new-item';

  //Add Attribute
  li.setAttribute('title','new-item')

  // Create text-node and append
  li.appendChild(document.createTextNode('Hello-World'));

  //Create new link Element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  //Append li as child to ul
  document.querySelector('ul.collection').appendChild(li);

  console.log(li);
*/

//----------Replace Elements

  /*
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task-list'));

//Get old heading
const oldHeading = document.getElementById('task-title');

//Parent 
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading,oldHeading);

//--------Remove Elements

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

//Classes and Attributes

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href','https://google.com');
link.setAttribute('title','Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);
*/

//***********************************************************************//


//------------------EVENT LISTENERS_THE EVENT OBJECTS-------------------//

/*document.querySelector('.clear-tasks').addEventListener('click',function(e)
{
  console.log('Hello- World');
  // e.preventDefault(); //prevents the link behaviour
});*/

//-------------------MOUSE EVENTS

/*
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
clearBtn.addEventListener('click',runEvent);

//Double Click
clearBtn.addEventListener('dblclick',runEvent);

//Mousedown
clearBtn.addEventListener('mousedown',runEvent);

//MouseUp
clearBtn.addEventListener('mouseup',runEvent);

//MouseEnter
card.addEventListener('mouseenter',runEvent);

//MouseLeave
card.addEventListener('mouseleave',runEvent);

//MouseOver
card.addEventListener('mouseover',runEvent);

//MouseOut
card.addEventListener('mouseout',runEvent);

//MouseMove
card.addEventListener('mousemove',runEvent)

//Event Handler
function runEvent(e)
{
  console.log(`Event type: ${e.type}`);
  e.preventDefault();

  heading.textContent =  `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},30)`;
}

*/

//-----------------Form Events
/*
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// form.addEventListener('submit',runEvent);

//Clear Input
taskInput.value = '';

//KeyDown
taskInput.addEventListener('keydown',runEvent);

//KeyUp
taskInput.addEventListener('keyup',runEvent);

//KeyPress
taskInput.addEventListener('keypress',runEvent);



function runEvent(e)
{
  console.log(`Event Type: ${e.type}`);

  console.log(e.target.value);

  // heading.innerText = e.target.value;

  //Get Input Value
  // console.log(taskInput.value);

  // e.preventDefault();
}
*/
//*************************************************//

//------------Event Bubbling-----------------//
/*
//When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

//A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.

// But any handler may decide that the event has been fully processed and stop the bubbling.

// The method for it is event.stopPropagation().

document.querySelector('.card-title').addEventListener('click',function(){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click',function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click',function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click',function(){
  console.log('col');
});

*/

//---------------Event Delegation------------------//
/*
//The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

document.body.addEventListener('click',deleteItem);
function deleteItem(e)
{
  if(e.target.className === 'fa fa-remove')
  {
    console.log('Item-deleted');
  }
};

*/

// Set Local Storage Item

/*
//In local storage the data remains until we manually clear it out but in session storage the data is cleared automatically as the session ends or as we close the browser.

//Set local Storage item
localStorage.setItem('name','John');

//Set session Storage item
sessionStorage.setItem('name','Doe');

//Remove from Local storage
localStorage.removeItem('name');

//Get From Storage
const name = localStorage.getItem('name');

//Clear Local Storage
localStorage.clear();

*/