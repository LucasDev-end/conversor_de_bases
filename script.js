<script>

    function converter() {
        
        var num = Number (ipt_num.value);

        let octal = num.toString(8);
        let hexadecimal = num.toString(16);
        let binaria = num.toString(2);

    console.log (num);
    console.log (octal);
    console.log (hexadecimal);
    console.log (binaria);
    
    document.getElementById("demo1").innerHTML = ` ${num}`;
    document.getElementById("demo2").innerHTML = ` ${octal}`;
    document.getElementById("demo3").innerHTML = ` ${hexadecimal}`;
    document.getElementById("demo4").innerHTML = ` ${binaria}`;
    
    
    }
    
    function aparecer_bin() {
        demo4.style.display = 'block'
    }
    
    function aparecer_hexa() {
        demo3.style.display = 'block'
    }
    
    function aparecer_octal() {
        demo2.style.display = 'block'
    }
    document.bgColor = "#00ffff";
    
    
    </script>