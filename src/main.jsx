import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { IllustrationProvider } from "./context/IllustrationProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IllustrationProvider>
      <App />
    </IllustrationProvider>
  </StrictMode>,
);

/*

  virtual dom - 
  diffing algorithm - compare old vdom with new vdom
  reconciliation - update real dom based on diff 

  jsx - javascript xml

  es6 - modern javascript features

  1. let and const - variable
  let - block scoped variable - it allows to reassign value
  const - block scoped constant - it does not allow to reassign value

  2. arrow function - concise syntax for writing functions
  - allow implicit return
  const add = (a, b) => a + b;

  3. template literals - string interpolation
  const name = 'John';
  const greeting = `Hello, ${name}!`;

  4. array methods - map, filter, reduce
  const numbers = [1, 2, 3, 4, 5];

  const employees = [
  {name: 'Alice', salary: 200000},
  {name: 'Bob', salary: 150000},
  {name: 'Charlie', salary: 300000},
  ]

  const doubled = numbers.map(n => n * 2); - creates a new array with each element doubled => [2, 4, 6, 8, 10]
  const evens = numbers.filter(n => n % 2 === 0); - creates a new array with only even numbers => [2, 4]
  const sum = numbers.reduce((acc, n) => acc + n, 0); - reduces the array to a single value (the sum of all elements) => 15
  const sumSalaries = employees.reduce((acc, emp) => acc + emp.salary, 0); - total salary expense => 650000

  5. destructuring - unpacking values from arrays or objects
  const person = {name: 'John', age: 30, city: 'New York'};


  const {name, age, city} = person; - extracts values into variables

  const arr = [1, 2, 3];
  const [first, second, third] = arr; - extracts values into variables

  6. spread and rest operators
  - spread operator (...) - expands an array or object into individual elements
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5]; - creates a new array [1, 2, 3, 4, 5]

  const obj1 = {a: 1, b: 2};
  const obj2 = {...obj1, c: 3}; - creates a new object {a: 1, b: 2, c: 3}

  - rest operator (...) - collects multiple elements into an array
  function sum(...args) {
    return args.reduce((acc, n) => acc + n, 0);
  }
  sum(1, 2, 3); - returns 6
  sum(1, 2, 3, 4, 5);
  [1,2,3]
  [1,2,3,4,5]


  7. modules - import and export functionality between files

  8. promises and async/await - handling asynchronous operations

  promise - an object representing the eventual completion or failure of an asynchronous operation

  console.log('Fetching data...');
  states - pending, fulfilled, rejected

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {name: 'John', age: 30};
        resolve(data);
      }, 2000);
    });
  };

  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

  async/await - syntactic sugar over promises for cleaner asynchronous code

  const getData = async () => {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  getData();  


  controlled vs uncontrolled components -

  controlled components - form data is handled by React component state
  uncontrolled components - form data is handled by the DOM itself


  useReducer - alternative to useState for complex state management
  
  const [state, dispatch] = useReducer(reducer, initialState);

  useRef - mutable ref object to persist values across renders without causing re-renders
  using useRef - to access DOM elements directly, avoid re-renders, store mutable values

  const inputRef = useRef(null);


  parent -> child -> grandchild -> great grandchild
  {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA'
    }
  }
  
  prop drilling - passing props through multiple levels of components

  useContext - to avoid prop drilling by providing global state accessible by any component in the tree
*/
