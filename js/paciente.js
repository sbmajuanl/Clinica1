window.onload=function(){//Muestra el paciente en otra pagina
  var nombre=document.getElementById("nombre_paciente");
  var apellido=document.getElementById("apellido_paciente");
  var edad=document.getElementById("edad_paciente");
  var genero=document.getElementById("genero_paciente");
  var ciudad=document.getElementById("ciudad_paciente");
  var pais=document.getElementById("pais_paciente");
  var objPaciente=JSON.parse(localStorage.getItem("nuevoPaciente"))
  //console.log(objPaciente);
   nombre.innerText=objPaciente.nombre;
   apellido.innerText=objPaciente.apellido;
   edad.innerText=objPaciente.edad;
   genero.innerText=objPaciente.genero;
   ciudad.innerText=objPaciente.ciudad;
   pais.innerText=objPaciente.pais;

//Editar el paciente
function Paciente(nombrePaciente, apellidoPaciente, edadPaciente, generoPaciente,ciudadPaciente,paisPaciente) {
		this.nombre = nombrePaciente;
		this.apellido = apellidoPaciente;
		this.edad = edadPaciente;
		this.genero = generoPaciente;
		this.ciudad = ciudadPaciente;
		this.pais = paisPaciente;
	}
	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="editar.html"
	});
}
