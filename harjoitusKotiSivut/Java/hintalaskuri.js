"use strict";

function alustus(){
    var hotelli= localStorage.getItem('hotelli')
    var lennot= localStorage.getItem('lennot')
        if (hotelli !=null && lennot !=null){
            document.getElementById('hotelli').value=hotelli;
            document.getElementById('lennot').value=lennot;
            document.getElementById('kyllä').checked=true        
        }
        else{
            document.getElementById('ei').checked=true
        }
    yhteishinta(document.getElementById('hotelli').value, document.getElementById('lennot').value, document.getElementById('hinta').value);
}

function yhteishinta(hotelli, lennot){
    var hotelli_hinta= parseInt(hotelli)
    var lennot_hinta= parseInt(lennot)
    var hinta= lennot_hinta + hotelli_hinta

    document.getElementById('hinta').innerHTML="<p>Yhteishinta on: "
    + hinta+"</p>";
    if (document.getElementById('kyllä').checked){
        sailytys(true)
    }
}
function sailytys(valinta){

    if(valinta==true) {
        localStorage.setItem('hotelli',
        document.getElementById('hotelli').value);
        localStorage.setItem('lennot',
        document.getElementById('lennot').value)
    } else {
        localStorage.removeItem('hotelli');
        localStorage.removeItem('lennot');
    }
}