import firstName from './module'; // Capturing the default in a variable
import {default as f} from './module' // Provide alias for importing default

console.log(firstName);
console.log(f);
