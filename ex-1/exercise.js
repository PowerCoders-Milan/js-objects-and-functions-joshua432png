// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function user() {
    var noun = prompt("Can you please input a noun");
    var verb = prompt("please input an verb");
    var adverb = prompt("Please input an adverb");
    var adjective = prompt("Please input an adjective");
    var user = ("I love " + verb + " football " + " and I live in " + noun + " . " + " she spoke " + adverb + " she wore a " + adjective + "dress");
    window.alert(user)
}

user();
