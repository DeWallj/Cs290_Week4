/*
*Jennifer DeWall
*Cs290 Week 3 - Activity 2
*JavaScript
*/

//Call to function that prints out text
hoistingExample();

//Function that demonstrates hoisting.
function hoistingExample(input)
{				
	document.getElementById("output1").textContent = "I am a function that has a call to it before it is declared.";
}

//Call to wontWork() function
wontWork();

//Function assigned to a variable. A call to it before it is assigned will be shown not to work
var wontWork = function()
{   document.getElementById("output2").textContent = "I am a function that is assigned to a variable and is called before it is assigned.";
};