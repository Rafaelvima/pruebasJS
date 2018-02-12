console.log(document.readyState); 
document.addEventListener("readystatechange", cargarEventos, false);
        function cargarEventos(evento) {
            document.getElementById("verde").addEventListener("click", funcionv, true);
            document.getElementById("rojo").addEventListener("click", funcionr, true);
            document.getElementById("azul").addEventListener("click", funciona, true);
            document.getElementById("imagen").addEventListener("click", funcioni, true);
            
            document.getElementById("verde").addEventListener("click", funcionv, false);
            document.getElementById("rojo").addEventListener("click", funcionr, false);
            document.getElementById("azul").addEventListener("click", funciona, false);
            document.getElementById("imagen").addEventListener("click", funcioni, false);
            
        }
        function funcionv (evento) {
            alert("VERDE");
            
            //evento.stopPropagation();
        }
        function funcionr(evento) {
            alert("ROJO");
            
           // evento.stopPropagation();
        }
        function funciona(evento) {
            alert("AZUL");

           //  evento.stopPropagation();
        }
        function funcioni(evento) {
            alert("img");

            //evento.stopPropagation();
        }