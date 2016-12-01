function validar() {
    var key1=document.getElementById("password1").value;
    var key2=document.getElementById("password2").value;
    var usuario=document.getElementById("usuario").value;

    if(usuario == false) {
        window.alert("Debe introducir un e-mail");
    }
    if(key1 == false && key2 == false) { 
        window.alert("Las contraseñas no son iguales");
    }
    else if(key1==key2) {
        window.alert("Cuenta creada, gracias");
        login.submit();  
    }
    else {
        window.alert("Las contraseñas no son iguales");
    }
}
function enviar() {
         window.alert("Pedido Registrado, gracias");
     }
if(window.addEventListener) {
    window.addEventListener("load", setUpPagina, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", setUpPagina);  //cnd la pagina este cargada k ejecute la funcion setUpPagina
    }
        
        function setUpPagina() {
            removerValoresSelected();
            cargarDias();
        } 

        function personalizado() {
            var mensaje = document.getElementById('check1').checked; 
            if(mensaje)  //si el id check1 esta chekeao(ticado) hazme todo esto
            {
                document.getElementById('txMensaje').disabled=false;
                document.getElementById('mensajes1').disabled=true;
                document.getElementById('mensajes1').checked=false; //si esta chekeado, kitalo
                document.getElementById('mensajes2').disabled=true;
                document.getElementById('mensajes2').checked=false;
                document.getElementById('mensajes3').disabled=true;
                document.getElementById('mensajes3').checked=false;
                document.getElementById('mensajes4').disabled=true;
                document.getElementById('mensajes4').checked=false;
            }
            else
            {
                document.getElementById('txMensaje').disabled=true;
                document.getElementById('txMensaje').value = "";
                document.getElementById('mensajes1').disabled=false;
                document.getElementById('mensajes2').disabled=false;
                document.getElementById('mensajes3').disabled=false;
                document.getElementById('mensajes4').disabled=false;                
            }
        }
        
        function copiarFactura() {
            var dirFactura = document.getElementById('check2').checked;
            if(dirFactura)
            {
                document.getElementById('nombre2').value = document.getElementById('nombre').value;
                document.getElementById('apellidos2').value = document.getElementById('apellidos').value;
                document.getElementById('domicilio2').value = document.getElementById('domicilio').value;
                document.getElementById('cpostal2').value = document.getElementById('cpostal').value;
                document.getElementById('provincias2').selectedIndex = document.getElementById('provincias').selectedIndex;
                document.getElementById('ciudad2').value = document.getElementById('ciudad').value;
                document.getElementById('telefono2').value = document.getElementById('telefono').value;

                document.getElementById('nombre2').disabled=true;
                document.getElementById('apellidos2').disabled=true;
                document.getElementById('domicilio2').disabled=true;
                document.getElementById('cpostal2').disabled=true;
                document.getElementById('provincias2').disabled=true;
                document.getElementById('ciudad2').disabled=true;
                document.getElementById('telefono2').disabled=true;
            } else
            {
                document.getElementById('nombre2').disabled=false;
                document.getElementById('apellidos2').disabled=false;
                document.getElementById('domicilio2').disabled=false;
                document.getElementById('cpostal2').disabled=false;
                document.getElementById('provincias2').disabled=false;
                document.getElementById('ciudad2').disabled=false;
                document.getElementById('telefono2').disabled=false;
            }
        }
        
        function cargarDias() {  //
            for (i=1; i<29; i++) {
                var option = document.createElement("option"); //crea un elemento option(ke siempre va en un select)
                option.text = i;  //el texto de option será i
                option.value = i;  //el value de option será i
                var select = document.getElementById("diaEntrega");
                select.appendChild(option); //agrega a la variable select unos hijos(appendChild), ke son todos los valores de option ; appendChild es para agregar, en este caso a los id=diasEntrega;; te agrega un hijo llamado option a todos los id ke se llamen "diaEntrega", con el valor de i
            }
        }
        
        function actualizarDias() {
            var diaEntrega = document.getElementById("diaEntrega");
            var mesEntrega = document.getElementById("mesEntrega");
            var yearEntrega = document.getElementById("yearEntrega");
            var mesSeleccion = mesEntrega.options[mesEntrega.selectedIndex].value; // 
            var fechas = diaEntrega.getElementsByTagName("option");
            while (fechas[28])
            {
                diaEntrega.removeChild(fechas[28]); //remove.Child es kitar hijos
            }
            if (yearEntrega.selectedIndex === -1) {  // -1 es un valor vacio en un array
                yearEntrega.selectedIndex = 0;
            }
            if (mesSeleccion === "2" && yearEntrega.options[yearEntrega.selectedIndex].value === "2018") { //los ===,comparan sin ninguna conversion de datos; yearEntrega.options: entre todas las opciones de yearEntrega cogeme del index(array) el k tengan value 2018 ke es bisiesto
                var option = document.createElement("option");
                option.text = 29;
                option.value = 29;
                var select = document.getElementById("diaEntrega");
                select.appendChild(option);
            } else if (mesSeleccion === "1" || mesSeleccion === "3" || mesSeleccion === "5" || mesSeleccion === "7" || mesSeleccion === "8" || mesSeleccion === "10" || mesSeleccion === "12") {
                var option = document.createElement("option");
                option.text = 29;
                option.value = 29;
                var select = document.getElementById("diaEntrega");
                select.appendChild(option);
                option = document.createElement("option");
                option.text = 30;
                option.value = 30;
                select = document.getElementById("diaEntrega");
                select.appendChild(option);
                option = document.createElement("option");
                option.text = 31;
                option.value = 31;
                select = document.getElementById("diaEntrega");
                select.appendChild(option);
            } else if (mesSeleccion === "4" || mesSeleccion === "6" || mesSeleccion === "9" || mesSeleccion === "11") {
                var option = document.createElement("option");
                option.text = 29;
                option.value = 29;
                var select = document.getElementById("diaEntrega");
                select.appendChild(option);
                option = document.createElement("option");
                option.text = 30;
                option.value = 30;
                select = document.getElementById("diaEntrega");
                select.appendChild(option);
            }
        }
        
        function removerValoresSelected() {
            var selectVacias = document.getElementsByTagName("select");  //coge las etiketas(tag) ke se llamen <select>
            for(var i=0; i < selectVacias.length; i++){   //coge el numero de <select> k hay en el documento
                selectVacias[i].selectedIndex = -1;  // -1 en el array siempre es un valor vacio; esto me dice k a los select les 
                //dara un valor vacio
            }
        }
 

        