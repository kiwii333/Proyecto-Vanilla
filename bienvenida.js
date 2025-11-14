let boton = document.getElementById("boton");
let cont = 0;


function entrar(evento){
    if(evento.crtlKey){
        document.getElementById('body').innerHTML += `
        <p>Usuario</p>
        <input type="text" name="usuario id="correo">
        <br>
        <input type="button" value="iniciar sesión" id="iniciar">
        `
        var bienvenido = document.getElementById("p1");
        document.body.removeChild(bienvenido)
        
        
        
    }
}





var temp = setTimeout(function(){
    
    
   
    document.body.innerHTML += `
    <p>Usuario</p>
    <input type="text" name="usuario" id="correo">
    <br>  
    <input type="button" value="iniciar sesión" id="iniciar">
    `

    input = document.getElementById("correo");


    var bienvenido = document.getElementById("p1");
    document.body.removeChild(bienvenido)


    
    input.onblur = function(){
        if(!input.value.includes('@')){
            document.getElementById('body').innerHTML += `correo incorrecto` 
        }else{
            innerHTML += 'correo correcto'
        }
        
    }

    function iniciar(evento){
        if(evento.type=='click'){
            localStorage.setItem('email', input.value)
            localStorage.getItem('email')
            localStorage.setItem('hora',document.timeline)
            localStorage.getItem('hora')
            window.location.assign('index.html')
        }
    }


    
        
    document.getElementById("iniciar").onclick = iniciar
    

},1000);



    


    





document.body.onkeyup = entrar;
