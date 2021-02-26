// write your JS here
// remember to always test in the browser
// to see if everything works correctly


var children = prompt("Please number of children");
var partner = prompt("please your partner's name");
var city = prompt("Please your geogragphic location");
var job = prompt("Please your job title");

function tellFortune(children, partner, location, job) {
    this.children = children
    this.partner = partner
    this.location = location
    this.job = job
    this.fortune = function() {
        window.alert("You are going to be married to " + partner + " live in " + location)
    }
}
var joshua = new tellFortune(children, partner, city, job);
joshua.fortune()
var hassan = new tellFortune(4, "sarah", "switzerland", "developer");
hassan.fortune()