# Array
#### Two way's to declare an Array 
  ```
  //1. Declaration using Array constructor
  let myArray = new Array();  
  
  // Declaration using Array Literal
  let myArray = [];
  ```
  Both will declare an empty array , suppose we need to define an array of size 5 and by default assign true to each in such cases we can use Array() constructor.

#### Difference between Object and Map() in JS  (Learn from array problem -> Two Sum)
| Feature            | Object                         | Map                              |
|--------------------|--------------------------------|-----------------------------------|
| **1. Key Type**    | Only strings and symbols       | Any type (number, object, function...) |
| **2. Declaration** | `const obj = {};`              | `const map = new Map();`         |
| **3. Key Order**   | Not guaranteed (in older engines) | Maintains insertion order       |

