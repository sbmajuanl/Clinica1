window.onload=function(){

var objPaciente = JSON.parse(localStorage.getItem("nuevoPaciente"));
var inputsEditar = document.getElementsByClassName("input-editar");
inputsEditar[0].value = objPaciente.nombre;
inputsEditar[1].value = objPaciente.apellido;
inputsEditar[2].value = objPaciente.edad;
inputsEditar[3].value = objPaciente.genero;
inputsEditar[4].value = objPaciente.ciudad;
inputsEditar[5].value = objPaciente.pais;

document.getElementsByTagName("button")[0].addEventListener("click",function(){
  if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && inputsEditar[3].length!=0 && inputsEditar[4].length!=0 && inputsEditar[5].length!=0){
    objPaciente.nombre=inputsEditar[0].value;
    objPaciente.apellido= inputsEditar[1].value
    objPaciente.edad = inputsEditar[2].value;
    objPaciente.genero = inputsEditar[3].value;
    objPaciente.ciudad = inputsEditar[4].value
    objPaciente.pais = inputsEditar[5].value;
    localStorage.setItem("nuevoPaciente",JSON.stringify(objPaciente));
    window.location="Paciente.html";
  }
  else{
    alert("Todos los campos son obligatorios");
  }
});
}
