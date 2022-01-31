/*
// Modules
-- A module is a resuable piece of code that encapsulates implementation details.

# Compose Software -- Modules are small building Blocks that we put together to build complex applications.

# Isolate Components -- Modules can be developed in isolation without Thinking about the entire codebase.

# Abstact Code -- Implement Low level Code in Modules and import these abstractions into other modules.

# Organised Code -- Modules naturally lead to a more oragnised codebase. 

# Reuse code -- Modules allow us to easily reuse the same code,even across multiple projects.

// Difference Between ES6 modules and script files.

ES6 modules:-

-- In ES6 modules top level variables are scoped to module.
-- 'use strict' is default mode.
-- top-level this is undefined.
-- Imports and Exports are supported.
-- <script type = "module">            
-- File downloading happens in an asynchronous way.

Script files :-

-- Top-level variables are globally scoped.
-- strict mode is not by default.
-- top-level this refers to the window object.
-- Imports and Exports are not supported.
-- <script src = "script.js">
-- File downloading happens in a synchronous way.

// Imports are not a copy of Exports infact they are like a live connection.   

*/

// Importing Module
/*
import { addtoCart,totalPrice as price,totalQuantity } from './shoppingCart.js'
console.log('Importing Module');

addtoCart('bread','5');

console.log(price,totalQuantity);
*/
console.log('Importing Module')

//Importing everything from the shoppingCart module

import * as ShoppingCart from './shoppingCart.js'

ShoppingCart.addtoCart('bread',5);
console.log(ShoppingCart.totalPrice);