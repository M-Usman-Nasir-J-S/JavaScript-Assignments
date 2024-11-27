// Q1. Declare an empty array using JS literal notation to store  student names in future.

// let studentNames = [];


// Q2. Declare an empty array using JS object notation to store  student names in future.

// let studentNames = new Array ();


// Q3. Declare and initialize a strings array.

// let studentNames = ["Abdullah", "Usman"]


// Q4. Declare and initialize a numbers array.

// let numbers = [1, 2, 3, 4, 5]


// Q5. Declare and initialize a boolean array.

// let boolean = [true, false]
// console.log(boolean);


// Q6. Declare and initialize a mixed array

// let mixed = ["mixed", 1, true, "wow", 2, false]


// Q7. Declare and Initialize an array and store available mobile  networks in Pakistan.

// let mobileNetworks = ["ufon", "jazz", "zong", "telenor"]


// Q8. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// Show the listed qualifications in your browser like:

// let listed = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

// for (let i = 0; i < listed.length; i++) {
    
//     console.log(i + 1 + ") " + listed[i]);
    
// }


// Q9. Declare and initialize an empty array to store top movies of 2015.
// Add movies one by one in an array. Display the elements  &  length of array in your browser.
// (Use array’s length method)

// var array = []
// array.push("Avengers: Age of Ultron")
// array.push("Spectre")
// array.push("Jurassic World")
// array.push("Inside Out")

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// console.log("Length of the array: "+ array.length);


// Q 10. Declare and Initialize an array with your favorite cars. Show

// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array

// console.log("Favorite Cars");

// let favoriteCar = ["audi","Volvo","Ford","Lamborgini"]

// console.log(favoriteCar[0],favoriteCar[1],favoriteCar[2],favoriteCar[3]);
// console.log("First index of the array: "+favoriteCar.indexOf("audi"))
// console.log("Car at the first index of the array: "+favoriteCar[0]);
// console.log("Last index of the array: "+favoriteCar.indexOf("Lamborgini"))
// console.log("Car at the last index of the array: "+favoriteCar[3]);


//Q 11. Write a program to store 3 student names in an array.
// Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like:


// var students=["Abdullah","Usman","Ali"]
// var marks=[450,480,350]
// var totalMarks=500;
// var percentage1=marks[0] / totalMarks*100;
// var percentage2=marks[1] / totalMarks*100;
// var percentage3=marks[2] / totalMarks*100;

// console.log("Score of Abdullah is 450. Percentage: "+percentage1 );
// console.log("Score of Usman is 480. Percentage: "+percentage2);
// console.log("Score of Ali is 350. Percentage: "+percentage3);


//Q12

// skipped


//Q 13. Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method. 


// var scores=[320,230,480,120];
// scores.sort();
// console.log(scores);


//Q 14. Write a program to sort the below mentioned array:

// var fruits=["strawberry","apple","orange","banana"];
// fruits[0]="apple";
// fruits[1]="banana";
// fruits[3]="strawberry";
// console.log("Ordered fruits list: "+fruits)


//Q 15. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities array


// var city=["karachi","lahore","islamabad","quetta","peshawar"];
// console.log("Selected cities list: ");
// console.log(city[3],city[4],city[0]);


//Q 16. Write a program to create a single string from the below  mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)


// var arr=["This","is","my","cat"];

// console.log(arr.join(" "));


//Q 17. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were stored.
// (FIFO-First In First Out)


// var arr=["keyboard","mouse","printer","monitor"];
// arr.splice(1);
// console.log("Out:" +arr.join())
// arr.splice(0,3,"mouse");
// console.log("Out:" +arr.join())
// arr.splice(0,3,"printer");
// console.log("Out:" +arr.join())
// arr.splice(0,3,"monitor");
// console.log("Out:" +arr.join())



//Q 20, 21


// Multidimensional array


//Q 19 pending


// var dropDown=document.querySelector("#ddm")
// var array=["Apple","Nokia","Samsung"];
// function drop(){
    
// }