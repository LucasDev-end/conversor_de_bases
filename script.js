function converter() {
    //Receber numero e base
    
    var num = ipt_num.value;
    var priEscolha = select_bases.value;
    //Convertendo para decimal
    let decimal = 0
    if( priEscolha == "decimal"){
        num = Number(num); 
        decimal=num;
    }else{
        if(priEscolha == "binario"){
            decimal= parseInt(num, 2);     
        }
        if(priEscolha == "octal"){
             decimal= parseInt(num, 8);
        }
        if(priEscolha == "hexadecimal"){
            decimal= parseInt(num, 16);
        }
    }        
    
    // Converter para
    var segEscolha = select_bases2.value;
    demo.style.display = 'flex';
    

    if ( segEscolha == "decimal" ){
        document.getElementById("demo").innerHTML = `Decimal: ${decimal}`;
    }
    if ( segEscolha == "binario" ){
        let binaria = decimal.toString(2);
        document.getElementById("demo").innerHTML =  `Binário: ${binaria}`;
    }
    if ( segEscolha == "octal" ){
        let octal = decimal.toString(8);
        document.getElementById("demo").innerHTML =  `Octal: ${octal}`;
        
    }
    if ( segEscolha == "hexadecimal" ){
        let hexadecimal = decimal.toString(16);
        document.getElementById("demo").innerHTML =  `Hexadecimal: ${hexadecimal}`;
    }  
}    