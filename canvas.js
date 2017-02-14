
            var a = document.getElementById("slate");
            var b = document.getElementById("clear");
            var ctx = a.getContext(‘2d’); 
            var draw = function(event){       
               var c = event.clientX;
               var d = event.clientY;  
               ctx.fillRect(c, d, 100, 100);
            }
            a.addEventListener('click', draw);
            var clean = function(e){
               ctx.clearRect(0,0,1000,1000);
            }
            b.addEventListener('click', clean);
 
