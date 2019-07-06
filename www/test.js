var showAns = document.getElementById("showAns");
var n10000 = 0;
function add(value) {
    var sum = n10000 + value;
    if (sum > -1 && sum < 100) {
        n10000 = sum;
    }
    showAns.innerHTML = n10000;
}
