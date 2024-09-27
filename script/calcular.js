function calcular(){
    // Numero 1
    var num1 = ipt_num1.value;
    var select1 = select_conta1.value;
    var numero1 = 0;
    
    if( select1 == "decimal"){
        num1 = Number(num1); 
        numero1=num1;
    }else{
        if(select1 == "binario"){
            numero1= parseInt(num1, 2);     
        }
        if(select1 == "octal"){
             numero1= parseInt(num1, 8);
        }
        if(select1 == "hexadecimal"){
            numero1= parseInt(num1, 16);
            console.log(numero1);

        }
    }   

    //Numero 2
    
    var num2 = ipt_num2.value;
    var select2 = select_conta2.value;
    var numero2 = 0;

    if( select2 == "decimal"){
        num2 = Number(num2); 
        numero2=num2;
    }else{
        if(select2 == "binario"){
            numero2= parseInt(num2, 2);     
        }
        if(select2 == "octal"){
             numero2= parseInt(num2, 8);
        }
        if(select2 == "hexadecimal"){
            numero2= parseInt(num2, 16);
            console.log(numero2);
        }
    }   

    // CONTA
    var operador = select_operador.value;
    var conta = 0;
    if( operador == "somar"){
        conta = numero1 + numero2;
    } else if ( operador == "subtrair" ){
        conta = numero1 - numero2;
    } else if ( operador == "multiplicar"){
        conta = numero1 * numero2;
    } else if(operador == "divisao"){
        conta = numero1 / numero2;
    }
    console.log(operador);

    document.getElementById("demo").innerHTML = `${conta}`;
    demo.style.display = 'flex';
}