$(document).ready(iniciarEventos);
function iniciarEventos(){
    llenarDepartamentos();
    $("#departamento").change(llenarMunicipios);
}
function llenarDepartamentos(){
    fetch('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let regiones = json;
        let departamentos=[];
        let html='<option value="">Seleccione...</option>';
        regiones.forEach(element => {
            departamentos.push(element.departamento)
        });
        sinRepetidos=departamentos.unique();
        sinRepetidos.sort();
        sinRepetidos.forEach(element =>{
            html+='<option>'+element+'</option>';
        });
        document.getElementById('departamento').innerHTML=html;
    });
}
function llenarMunicipios(){
    let select = document.getElementById('departamento');
    let departamento = select.options[select.selectedIndex].value;
    fetch('https://https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json')
    .then(response => response.json())
    .then(json => {
        let regiones = json;
        let ciudades=[];
        let html='<option value="">Seleccione...</option>';
        regiones.forEach(element => {
            if(element.ciudades==ciudades){
                ciudades.push(element.ciudades);
            }
        });
       ciudades.sort();
        ciudades.forEach(element =>{
            html+='<option>'+element+'</option>';
        });
        document.getElementById('ciudades').innerHTML=html;
    });
}
Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

    