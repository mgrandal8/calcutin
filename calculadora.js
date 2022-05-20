
        
        var dato1 = ''
        var signo = ''
        var dato2 = ''
        var dato = ''
        //FUNCION PARA OPERAR SEGÚN EL SIGNO
        function operar(num1, num2, signo){ 
            num1 = parseFloat(num1)
            num2 = parseFloat(num2)        
            
            if(signo === "+") {
                return num1 + num2
            }
            if(signo === "-") {
                return num1 - num2
            }
            if(signo === "/") {
                return num1 / num2
            }
            if(signo === "x") {
                return num1 * num2
            }
            if (signo==="x²") {
                return num1*num1
            }
            if (signo==="√") {
                return Math.sqrt(num1)
            }
        }
        
        //FUNCION PARA REGISTRAR LOS NUMEROS Y EL SIGNO
        function registraDato (num,datos)  {
            num.toString() 
                if (!datos) {
                    if (num==".") {
                        num="0."
                    }
                }
                else{
                    if (num==".") {
                        if (datos.includes(".")) {
                            num=""
                        }
                    }
                }
                var dato = num
                return dato
            }  
                    
        //FUNCION QUE TOMA DATOS DEL TECLADO
        function eventoTeclado(evento){
            string= evento.which;
            number= String.fromCharCode(evento.which);
            
            }            
                            

               
                     
               
            

 $(document).ready(function(){
    //SE ACTIVA CUANDO SE APRIETA UNA TECLA
    $(document).keypress(
        function(evento){
            var string= evento.which;
            var number= String.fromCharCode(evento.which);
            if(number=="1"||number=="2"||number=="3"||number=="4"||number=="5"||number=="6"||number=="7"||number=="8"||number=="9"||number=="0"||number=="."){
                if(signo) {
                    dato2 = dato2 + registraDato(number,dato2)
                    $("#pantalla").html(`${dato2}`);
                } 
                else {
                    dato1 = dato1 + registraDato(number,dato1)
                    $("#pantalla").html(`${dato1}`);
                }
            }
            else if (number=="+"||number=="-"||string=="42"||number=="/") {
                if(string=="42"){
                    number="x";
                }
                signo = registraDato(number)
                $("#pantalla").html(`${signo}`);         
            }
            else if(number=="="||string=="13"){
                const resultado = operar(dato1, dato2, signo)
                dato1=resultado;
                dato2="";
                $("#pantalla").html(`${resultado}`);    
            }
                    
                     
            else{
            }
    });          
    //SE ACTIVA CUANDO SE HACE CLICK SOBRE LOS NUMEROS O LA COMA.
    $(".nums").click(
        function(event) {
            if(signo) {
                dato2 = dato2 + registraDato(event.target.innerHTML,dato2)
                $("#pantalla").html(`${dato2}`);
            } 
            else {
                dato1 = dato1 + registraDato(event.target.innerHTML,dato1)
                $("#pantalla").html(`${dato1}`);
            }
    });
    //SE ACTIVA CUANDO SE HACE CLICK SOBRE LOS SIGNOS
    $(".signos").click(
        function(event) {
            signo = registraDato(event.target.innerHTML)
            $("#pantalla").html(`${signo}`);
        });
    //SE ACTIVA CUANDO SE HACE CLICK SOBRE EL SIMBOLO DE iGUAL
    $("#igual").click(
        function(event) {
            const resultado = operar(dato1, dato2, signo)
            dato1=resultado;
            dato2="";
            $("#pantalla").html(`${resultado}`);
    });
    //SE ACTIVA CUANDO SE PRESIONA SOBRE LIMPIAR PANTALLA
    $("#limpiar").click(
        function(event) {
            dato1 = '';
            dato2 = '';
            signo = '';            
            $("#pantalla").html("0");
    });


    });
        
    