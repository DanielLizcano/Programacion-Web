//Validación nombre
function validacionNombre(){
    if(document.formulario.nombre.value.length==0){
    alert("Escriba su nombre por favor");
    document.formulario.nombre.focus();
    return 1;
    }
    if(document.formulario.nombre.value.length>25){
        alert("El nombre solo debe tener máximo 25 caracteres");
        document.formulario.nombre.focus();
        return 1;
    }
    return 0;
}

//Validación apellido 
function validacionApellido(){
    if(document.formulario.apellido.value.length==0){
        alert("Escriba su apellido por favor");
        document.formulario.apellido.focus();
        return 1;
    }
    if(document.formulario.apellido.value.length>25){
        alert("El apellido solo debe tener máximo 25 caracteres");
        document.formulario.apellido.focus();
        return 1;
    }
    return 0;
}

//validación dirección
function validacionDirección(){
    let dato = document.formulario.direccion.value;
    if(dato.substring(0,3)!="cll" && dato.substring(0,3)!="cra" && dato.substring(0,2)!="av" && dato.substring(0,3)!="anv" && dato.substring(0,5)!="trans"){
        alert("Error! Llenar correctamente el campo( ejemplo: cll 9 # 13-12)(debe iniciar con cll, cra, anv, trans)");
        document.formulario.direccion.focus();
        val = 1;
        return 1;
    }
    return 0;
}

//Validación del país
function validacionSelectBox(){
    if(document.formulario.pais.selectIndex==0){
        alert("Por favor seleccione un país");
        document.formulario.pais.focus();
        val = 1;
        return 1;
    }
    return 0;
}

//Validación ccusuario
function validacionCcusuario(){
    let usr = document.formulario.ccusuario.value.length;
    if(usr<10 || usr>20){
        alert("Error! el ccusuario debe contener entre 10 y 20 caracteres");
        document.formulario.ccusuario.focus();
        return 1;
    }
    let patron=/[\^$.*+?=!:|\\/()\[\]{}]@_'´/;
    let usur = document.formulario.ccusuario.focus();
    if(patron.test(usur)){
        alert("Error! El campo no debe tener ningun caracter ^ $. * +? =! : | \ / () [] {}'@ _ ");
        document.formulario.ccusuario.focus();
        val = 1;
        return 1;
    }
    return 0;
}

//Validación Contrseña
function validacionContrasena(){
    let cont = document.formulario.ccpaswd.value.length;
    let contrasena = document.formulario.ccpaswd.value;
    if(cont<15 || cont>20){
        alert("Error! la contraseña debe contener entre 15 a 20 caracteres");
        document.formulario.ccpaswd.focus();
        return 1;
    }
    //Caracteres obligatorios
    let patron = /[#%/&]/;
    if(!patron.test(contrasena)){
        alert("Error! la contraseña debe contener algun caracter #, %, /, o &");
        document.formulario.ccpaswd.focus();
        return 1;
    }
    //Que contenga números
    let patron2 = /[0-9]{1,}/;
    if(!patron2.test(contrasena)){
        alert("Error! la contraseña debe contener números");
        document.formulario.ccpaswd.focus();
        return 1;
    }
    //Que contenga mayusculas y minisculas
    let patron3 = /[ABCDEFGHYJKLMNÑOPQRSTUVWXYZ]/;
    if(!patron3.test(contrasena)){
        alert("Error! La contraseña debe contener MAYUSCULAS");
        document.formulario.ccpaswd.focus();
        return 1;
    }
    return 0;
}

//Compración contraseñas
function compararContrasena(){
    let contra1 = document.formulario.ccpaswd.value;
    let contra2 = document.formulario.ccpaswd2.value;
    if(contra1 != contra2){
        alert("Error! las contraseñas no coinciden");
        document.formulario.ccpaswd.focus();
        return 1;
    }
    return 0;
}

//Validación correo
function validacionEmail(){
    lenEmail = document.formulario.email.value.length;
    if(len<1 || len>120){
        alert("Error en el email");
        document.formulario.email.focus();
        return 1;
    }
    return 0;
}

function validacionEnvio(){
    let val=0;
    val = validacionNombre();
    val = validacionApellido();
    val = validacionSelectBox();
    val = validacionDirección();
    val = validacionCcusuario();
    val = validacionContrasena();
    val = validacionEmail();
    val = compararContrasena();
    if(val == 0){
        alert("El formulario se llenó correctamente");
        document.formulario.submit();
    }
}

function check(e){
    tecla = (document.all) ? e.keyCode : e.which;
    if(tecla == 8){
        return true;
    }
    patron = /[A-Za-z0-9]/;
    tecla_final.test(tecla_final);
}

var slider = document.getElementById("myRange");
var output = document.getElementById("valor");
output.innerHTML=this.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}




