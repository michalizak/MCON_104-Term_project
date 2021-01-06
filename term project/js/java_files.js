"use strict";
/*
MZ
1/5/2021
project
 */

/*store current date and time*/
var currentDate = new Date();
var currentDateString=currentDate.toLocaleDateString();
var lastModDate = new Date("1/5/21");
var lastModDateString = lastModDate.toLocaleDateString();
var diff = currentDate - lastModDate;
var diffString = (diff / (1000 * 24 * 60 * 60)).toFixed(1);

/* Display the current date and time */
document.getElementById("today").innerHTML=currentDateString;
document.getElementById("modified").innerHTML=lastModDateString;
document.getElementById("difference").innerHTML=diffString;


