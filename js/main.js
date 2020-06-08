window.onload = function () {
    var info = document.getElementById("info");
    let clicker = document.getElementById("clicker");
    let fruits = ["Яблоко", "Апельсин", "Слива"];
    let i=0;

    clicker.onclick=function () {
        info.innerHTML += '<a href="#">'+fruits[i]+'</a><br/>';
        i++;
        var text_one = document.getElementById("txt_one");
        console.log("Input value", text_one.value);
        //alert("click span");
    }
}