var str = prompt("Enter Your String with HTML/XML tags: ");
function strip_tags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/<[^>]*>/g, '');
}
document.write(strip_tags(str));