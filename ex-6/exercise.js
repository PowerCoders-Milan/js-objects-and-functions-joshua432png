// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function greaterNum (num1, num2) {
    if (num1 > num2) {
        console.log("The greater number of " + num1 + " and " + num2 + " is " + num1);
    } else if (num2 > num1) {
        console.log("The greater number of " + num1 + " and " + num2 + " is " + num2);
    } else {
        console.log("The numbers are the same");
    }
}
greaterNum(40, 30);
greaterNum(50,20);