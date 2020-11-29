let e = $(document);
let edad = $(document);
e.ready(mostrarFormatos);
fnacimien.ready(calcularEdad);
//document.querySelector("#edad").textContent = calcularEdad(fecha);
//edad.ready(calcularEdad)

//function calcularEdad(fecha) {//
    //var hoy = new Date();
    //var nacimiento = new Date(fecha);
   // var edad = hoy.getFullYear() - nacimiento.getFullYear();
   // var m = hoy.getMonth() - nacimiento.getMonth();

  //  if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
  //      edad--;
  // }
  //return edad;
//}
//https://www.youtube.com/watch?v=rRRdhwSnifk-- video de como calcular la edad 

    
function calcularEdad(){
let fnacimien= $("input[name=fecha]");
let ahora= new Date();
let años= ahora.getFullYear()-fnacimien.getFullYear();
document.getElementById('edad').innerHTML = años;
fnacimien.click()
}


function Formulario(){
    $("#unidadOpcional1").hide();//se esconde esta unidad para luego hacer la comprobación 
    $("#unidadOpcional2").hide();
}

function mostrarFormatos(){
    Formulario();
    let e= $("input[name=enfermedades]");//Se traen los datos del input
    e.click(clickEnfermedad);//se usa evento click que se active al dar un click sobre el juego de radios
    let f = $("input[name=EnfContagiosa]");
    f.click(clickContagiosa);
}

function clickEnfermedad(){
    let e = $("#unidadOpcional1");//se obtiene lo que esta en html
    if($(this).val()=="si"){//se comprueba
        e.show("fast");
    }else{
        e.hide("fast");
    }
}
function clickContagiosa(){
    let e = $("#unidadOpcional2");
    if($(this).val()=="si"){
        e.show("fast");
    }else{
        e.hide("fast");
    }
}
