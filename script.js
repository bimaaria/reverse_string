function rev() {
    var str = document.getElementById("text").value;
    var revstr = '';

    for (var i=str.length - 1; i>=0; i--) {
        revstr = revstr + str.charAt(i);
    }
    document.getElementById("result").innerHTML = alert("The reversed string is: " + revstr);
}