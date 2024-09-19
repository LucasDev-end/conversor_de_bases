

function converter() {
        
    var base1 = select_bases.value;
    var base2 = select_bases2.value;
    var resultado = "";

    if(base1=="decimal"){
        var num = Number (ipt_num.value);
    }else{
        var num = ipt_num.value;
    }
    
    
    let octal = num.toString(8);
    let hexadecimal = num.toString(16);
    let binaria = num.toString(2);
    
    if (base2 =="decimal"){
        resultado = Number(num);
    }else if (base2 =="octal"){
        resultado = octal;
    }else if (base2 =="hexadecimal"){
        resultado = hexadecimal;
    }else if (base2 =="binario"){
        resultado = binaria;
    }
    
    div_mensagem.innerHTML = `${base2} : ${resultado}`;

}