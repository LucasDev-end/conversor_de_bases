    function converter() {
        
        var base1 = select_bases1.value;
        var base2 = select_bases2.value;
        var conversao = "";
        var num = 0;

        if (base1 == "decimal"){
            num = Number(ipt_num.value);
        } else {
            num = ipt_num.value;
        }
        
        let octal = num.toString(8);
        let hexadecimal = num.toString(16);
        let binaria = num.toString(2);
        let decimal = parseint(binaria,10);
        
        
        if (base2 == "decimal"){
            Number(conversao);
            conversao = decimal;
        }else if (base2 == 'octal'){
            conversao = octal;
        }else if (base2 == 'hexadecimal'){
            conversao = hexadecimal;
        }else if (base2 == 'binario'){
            conversao = binaria;
        }

        div_mensagem.innerHTML = `Sua conversao de ${num} com a base (${base1}) para a base (${base2}) e: ${conversao}`;

    }
