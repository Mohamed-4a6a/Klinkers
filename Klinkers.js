function veranderen(tekst) {
    if (tekst.indexOf("a")) {
        tekst.replace("a", "!");
    } else if (tekst.indexOf("e")) {
        tekst.replace("e", "@");
    } else if (tekst.indexOf("o")) {
        tekst.replace("o", "#");
    } else if (tekst.indexOf("u")) {
        tekst.replace("u", "$");
    } else if (tekst.indexOf("i")) {
        tekst.replace("i", "%");
    }
    return tekst;   
}

function tekst(){
    var input = document.getElementById("input").value;
    document.getElementById('content').InnerHTML = veranderen(input);
}