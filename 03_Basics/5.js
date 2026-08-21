var str = prompt("Enter Your String : ");
document.write("You entered the string: " + str);
function reverseString(str) {
    var str2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    return str2;
}
document.write("<br>")
document.write("Reversed String is: " + reverseString(str));
document.write("<br>")
if (str === reverseString(str)) {
    document.write(str + " is Palindrome");
}
else {
    document.write(str + " is Not Palindrome")
}