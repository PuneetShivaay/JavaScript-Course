// 1. Write a Javascript program to take three numbers from the user as input and print the largest number on the document.


// Take inputs from user and store in variables num1, num2, num3
let num1 = parseInt(prompt("Enter First Number"));
let num2 = parseInt(prompt("Enter Second Number"));
let num3 = parseInt(prompt("Enter Third Number"));

document.write("<br>");

document.write("You entered the numbers: " + num1 + ", " + num2 + ", " + num3);

document.write("<br>");

if (num1 == num2 && num2 == num3 && num3 == num1) { //Checking all number are equal or not
    document.write("All numbers are equall");
}
else {
    if (num1 >= num2 && num1 >= num3) {
        document.write(num1 + " is greatest number");
    }
    else if (num2 >= num1 && num2 >= num3) {
        document.write(num2 + " is greatest number");
    }

    else if (num3 >= num1 && num3 >= num2) {
        document.write(num3 + " is greatest number");

    } else {
        document.write("Something Is Wrong");
    }
}