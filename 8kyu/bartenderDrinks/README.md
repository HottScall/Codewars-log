<h1 align="centre">Task</h1>

Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

Input Output
"Jabroni" "Patron Tequila"
"School Counselor" "Anything with Alcohol"
"Programmer" "Hipster Craft Beer"
"Bike Gang Member" "Moonshine"
"Politician" "Your tax dollars"
"Rapper" "Cristal"
_anything else_ "Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".

<h1 align="centre">My Process</h1>

- Firstly create a function that takes the input, converts it lower case and splits each word into an array
- Map the array, give the zero index of each element (the first letter) an uppercase and then use slice(1) to append the remainder of the element to the capitlised first letter
- Join the array back together so the string are returned with capitals
- Then write an if/else statement which runs through the given inputs and return the outputs
