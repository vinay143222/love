var per;
var num;
var par1;
var par2;

function percentage() {
    var num = Math.random();
    var per = (Math.floor(num * 100));
    return (per);
}
document.getElementById("button_1").onclick = function() {
    var par1 = document.getElementById("name1").value;
    var par2 = document.getElementById("name2").value;
    if ((par1 == "") && (par2 == "")) {
        alert("fill the field first");
    } else {
        document.getElementById("answer").innerHTML = percentage() + "%";
        var c = document.getElementById("button_1");
        c.style.display = "none";
    }

}