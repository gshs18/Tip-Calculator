function tip(){
    var bill = document.getElementById("billamt").value;
    var qual = document.getElementById("serviceQual").value;
    var Peop = document.getElementById("people").value;
    var answ;
    answ = ( bill * qual ) / Peop;
    document.getElementById('totaltip').innerHTML = answ;
}