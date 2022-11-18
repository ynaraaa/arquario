function Aqua(){
    var alt = parseFloat(document.getElementById("altura").value);
    var larg = parseFloat(document.getElementById("largura").value);
    var compr = parseFloat(document.getElementById("comprimento").value);



    var volume = alt*larg*compr;  //Calculo pra litro
    var litro =  volume/1000;

    var aux = Math.ceil(litro/50)  //Calculo pro aquecedor
    var aquecedor = (aux)*50;


    var bomba = (litro*6);  //Calculo para a bomba



    document.getElementById("volume").innerHTML = 'Litros: ' + litro.toFixed(2) + ' L';
    document.getElementById("bomba").innerHTML = 'Bomba: ' + bomba.toFixed(2) + ' L/h'
    document.getElementById("aquecedor").innerHTML = 'Aquecedor: ' + aquecedor.toFixed(2) + ' W'

}
    
    
     



//document.getElementById("aquecedor").innerHTML = 'ok'