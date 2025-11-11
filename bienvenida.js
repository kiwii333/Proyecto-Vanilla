let boton = document.getElementById("boton");
let cont = 0;
let input = document.getElementById('correo');

function entrar(evento){
    if(evento.crtlKey){
        document.getElementById('body').innerHTML += `
        <p>Usuario</p>
        <input type="text" name="usuario id="correo">
        <br>
        <input type="button" value="iniciar sesión" id="iniciar">
        `
        var bienvenido = document.getElementById("p1");
        bienvenido.body.removeChild(bienvenido)
        
        
        
    }
}





var temp = setInterval(function(){
    cont++;
    if(cont==5){
        clearInterval(temp);
        document.getElementById('body').innerHTML += `
        <p>Usuario</p>
        <input type="text" name="usuario id="correo">
        <br>  
        <input type="button" value="iniciar sesión" id="iniciar">
        `
        input.onblur = function(){
            if(!input.value.includes('@')){
               document.getElementById('body').innerHTML += `correo incorrecto` 
            }
        } 
    }
},5000);

function iniciar(evento){
    if(evento.type=='click'){
        input.onfocus = function(){
            if(!input.value.includes('@')){
               innerHTML += `correo incorrecto` 

            }
        }
    }
}



document.getElementById('body').onkeyup = entrar;
document.getElementById('iniciar').onclick = iniciar