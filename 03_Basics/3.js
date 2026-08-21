var f = document.getElementById("f");   //Input Element
var c = document.getElementById("c");   //Input Element

function fc_cf() {  //fuction creation

    var temp;       //holds temperature value
    var targ;       //target the element where user is not typing

    if (this.id === 'c') {      //if typing into c...
        targ = f;               //f will be target element
        temp = (this.value * 9 / 5) + 32;       // c to f
    }
    else {
        targ = c;
        temp = (this.value - 32) * 5 / 9;       //f to c
    }

    targ.value = !isNaN(temp) ? parseFloat(temp.toFixed(1)) : "Err";
}   // (Above:) temp is a num ? return floated number,  else: "Show Some Error"

f.oninput = fc_cf;  //Input Listeners to triger the fc_cf Function
c.oninput = fc_cf;  //Input Listeners to triger the fc_cf Function