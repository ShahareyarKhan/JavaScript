// ECMAScript is a standard on which JavaScript is based!
// typeof is used to find data types.

/*
Rules for choosing variables names
    Letters, digits, underscores and $ sign allowed.
    Must begin with a $, _ or a letter.
    JavaScript reserved words cannot be used as a variable name.
    Harry & haRRy are different variables (case sensitive)
*/

/*
These are 7 primitive datatypes in JavaScript:
    Null
    Number
    String
    Symbol
    Undefined
    Boolean
    BigInt
*/

/*
Loop
let arr=[11,2,3,4,5,6,7,8,9];
for(x in arr){ // index
    console.log(x); 
}
for(x of arr){ // item
    console.log(x);
}
const a = [1,2,3]
a.forEach((value,index,array) => {
    // function logic
});
*/

/*
String Functions:
    // String.length
    // String.slice()
    // String.substring()
    // String.substr()
    // String.replace()
    // String.replaceAll()
    // String.toUpperCase()
    // String.toLowerCase()
    // String.concat()
    // String.trim():- The trim() method removes whitespace from both sides of a string:
    // String.trimStart()
    // String.trimEnd()
    // String.padStart():- It pads the string from start with another string (multiple times) until it reaches a given length .
    let text = "5";
    text = text.padEnd(5,"01"); // 50101
    // String.padEnd()
    // String.charAt()
    // String.charCodeAt()
    // String.split()
*/

/*
Array:-
    arrays are objects.
    1. toString() - Converts an array to a string of comma separated values.
    2. join() – joins all the array elements using a separator.
    3. pop() – removes last element from the array.
    4. push() – Adds a new element at the end of the array.
    5. shift() – Removes first element and returns it.
    6. unshift() – Adds element to the beginning. Returns new array length.
    7. delete (delete d[1]) – Array elements can be deleted using the delete operator.
    8. concat() – used to join array to the given array.
    9. sort() – sort() method is used to sort an array alphabetically.
    10. splice() – splice can be used to add new items to an array.
        const numbers = [1,2,3,4,5]
        numbers.splice(2,1,23,24)
        //here, 2 is the position to add, 1 depicts the no. of elements to remove, and 23, 24 are the elements of be added.
    11. slice() – slices out a piece from an array. It creates a new array.
    12. reverse() – Reverses the elements in the source array.
    
    Map, filter,Reduce:-
        const a = [1,2,3,4,5]
        const b=a.map((value, index, array) => {
            return value*value;
        })
        const c=a.filter((item)=>{
            return item>2;
        })
        console.log(b)
        console.log(c)
        const n = [1,8,7,11]
        let sum = numbers.reduce(add)
*/

/*
    JavaScript Console Object:
        assert() – used to assert a condition
        clear() – clears the console
        log() – outputs a message to the console
        table() – Displays a tabular data
        warn() – used for warnings
        error() – used for errors
        info() – used for special information

        1. alert: Used to invoke a mini window with a msg.
        2. prompt: Used to take user input as string.
        3. confirm: Shows a message and waits for the user to press ok or cancel. Returns true for ok and false for cancel.
*/

/*
      We have the following when JavaScript runs in a browser,Window:
        1. DOM: DOM represents the page content as HTML.
            document.body
            document.body.style.background="green"    
        2. BOM: The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.The functions alert/confirm/prompt are also a part of the BOM
            location.href = "https://codewithharry.com" 
        3. JavaScript Core  
*/

/*
    Searching the DOM:
        1. document.getElementById: This method is used to get the element with a given “id” attribute 

        2. document.querySelectorAll - Returns all elements inside an element matching the given CSS selector.

        3. document.querySelector - Returns the first element for the given CSS Selector. A efficient version of elem.querySelectorAll(CSS)[0]

        4. document.getElementsByTagName - Returns elements with the given tag name

        5. document.getElementsByClassName (Don’t forget the “s” letter) - Returns elements that have the given CSS class. 

        6. document.getElementsByName - Searches elements by the name attribute.
*/
