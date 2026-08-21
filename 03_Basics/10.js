var str = prompt("Enter String: ");
var temp = str.toLocaleLowerCase();

function vowels(temp) {


    var acount = (temp.match(/a/g) || []).length;
    var ecount = (temp.match(/e/g) || []).length;
    var icount = (temp.match(/i/g) || []).length;
    var ocount = (temp.match(/o/g) || []).length;
    var ucount = (temp.match(/u/g) || []).length;

    document.write("You Entered the String: " + str + "<br>");
    document.write("A : " + acount + "<br>");
    document.write("E : " + ecount + "<br>");
    document.write("I : " + icount + "<br>");
    document.write("O : " + ocount + "<br>");
    document.write("U : " + ucount + "<br>");

}
vowels(temp);