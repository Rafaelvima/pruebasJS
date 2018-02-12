console.log(document.readyState); 
document.addEventListener("readystatechange", cargarEventos, false);
        function cargarEventos(evento) {
            if(document.readyState=="complete"){
                alert(document.readyState);
            document.getElementById("verde").addEventListener("click", funcionv, true);
            document.getElementById("rojo").addEventListener("click", funcionr, true);
            document.getElementById("azul").addEventListener("click", funciona, true);
            document.getElementById("imagen").addEventListener("click", funcioni, true);
            }
            
            /*document.getElementById("verde").addEventListener("click", funcionv, false);
            document.getElementById("rojo").addEventListener("click", funcionr, false);
            document.getElementById("azul").addEventListener("click", funciona, false);
            document.getElementById("imagen").addEventListener("click", funcioni, false);*/
            
        }
        function funcionv (evento) {
    
              alert("VERDE");
           console.log(evento.currentTarget.attributes[1].nodeValue);
            //evento.stopInmediatePropagation();
        }
        function funcionr(evento) {
             if(evento.eventPhase==2){
                //break;
                alert("holar 2");
            }
            alert("ROJO");
            document.getElementById("verde").addEventListener("click", funcionv, false);
            //vale cualquiera de las dos formas 
            console.log(evento.currentTarget.attributes["id"].nodeValue);
            console.log(evento.currentTarget.getAttribute("id"));
            console.log(evento.currentTarget.id);
           // evento.stopPropagation();
        }
        function funciona(evento) {
            alert("AZUL");
            document.getElementById("rojo").addEventListener("click", funcionr, false);
            console.log(evento.currentTarget.attributes["id"].nodeValue);
           //  evento.stopPropagation();
        }
        function funcioni(evento) {
            alert("img");

            document.getElementById("azul").addEventListener("click", funciona, false);
            console.log(evento.currentTarget.attributes["id"].nodeValue);
            //evento.stopPropagation();
        }