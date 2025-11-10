let boton = document.getElementById("boton");
let cont = 0;

function entrar(evento){
    if(evento=='ctrlKey'){
        document.getElementById('body').innerHTML += `
        <p>Usuario</p>
        <input type="text" name="usuario id="usuario">
        <br>
        <input type="button" value="iniciar sesión">
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
        <input type="text" name="usuario id="usuario">
        <br>  
        <input type="button" value="iniciar sesión">
        `
        
    }
},5000);

document.getElementById('body').crtlKey = entrar