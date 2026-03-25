/* Bai1
let browser = prompt("Enter the browser name: ");
switch (browser) {
    case "Edge":
        alert("You've got the Edge!");
        break;
    case "Firefox":
    case "Safari":
    case "Chrome":
    case "Opera":
        alert("Okay we support these browsers too");
        break;
    default:
        alert("We hope that this page looks ok!");
}

 */
/*
//bai2
let a = +prompt('a?', 'a')
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert('2,3');
        break;
}
*/

//bai3
let value = +prompt("Enter a number", 0);
switch (true) {
    case value > 0:
        alert("1");
        break;
    case value < 0 :
        alert("-1");
        break;
    default:
        alert("0");
}