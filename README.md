**Array**
### Two way's to declare an Array 
  ```
  //1. Declaration using Array constructor
  let myArray = new Array();  
  
  // Declaration using Array Literal
  let myArray = [];
  ```
  Both will declare an empty array , suppose we need to define an array of size 5 and by default assign true to each in such cases we can use Array() constructor.

### Difference between Object and Map() in JS  (Learn from array problem -> Two Sum)
  1. Key type	      **object** -> Only strings and symbols	         **Map** -> Any type (number, object, function...)
  2. Declaration    **object** -> const obj = {};                    **Map** -> const map = new Map();
  3. Order of keys	**object** -> Not guaranteed (in older engines)	 **Map** -> Maintains insertion order

