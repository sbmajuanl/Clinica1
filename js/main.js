window.addEventListener('load',function() {
  var listado=[];// Guarda los datos del formulario
  boton.addEventListener('click',function(evento) {// Evento del boton al hacerle click
    evento.preventDefault();

    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var edad=document.getElementById("edad").value;
    var genero=document.getElementById("genero").value;
    var ciudad=document.getElementById("ciudad").value;
    var pais=document.getElementById("pais").value;

    function enviardatos(nombre,apellido,edad,genero,ciudad,pais){
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
      this.genero=genero;
      this.ciudad=ciudad;
      this.pais=pais;
      this.formulario=function(){
        var div=document.createElement("div");
        div.classList.add("div-contenedor");
        var p =document.createElement("p")
        p.innerHTML+="Nombre:"+this.nombre+"<br>"+
        "Apellido:"+this.apellido+"</br>"+
        "Edad :"+this.edad+"</br>"+
        "Genero :"+this.genero+"</br>"+
        "Ciudad :"+this.ciudad+"</br>"+
        "Pais :"+this.pais;
        div.appendChild(p);
        return div;
      };
    }
    if(nombre.length !==0 && apellido.length !==0 && edad.length !==0 && ciudad.length !=0 && pais.length !==0){
      //var enviardatos=new enviardatos(nombre,apellido,edad,pais);
      //console.log(new enviardatos(nombre,apellido,edad,genero,ciudad,pais));
      localStorage.setItem("nuevoPaciente",JSON.stringify(new enviardatos(nombre,apellido,edad,genero,ciudad,pais)));
      //listado.push(enviardatos);
      //enviar.appendChild(enviardatos.formulario());
      document.getElementById("foormulario").reset();
      window.location="Paciente.html";
    }
    else{
      var indicacion=document.getElementsByClassName("indicacion_sl");
      for(var i = 0 ; i<indicacion.length;i++){
        indicacion[i].innerText="Este campo es obligatorios"
      }
    }
  });
});

var soloLetras=function(e){
  var codigoTecla=e.keyCode;//document.write(codigoTecla);
  if ((codigoTecla>=97 && codigoTecla<=122)|| (codigoTecla>=65 && codigoTecla<=90)||(codigoTecla==32 || codigoTecla==39 )){
    return true;
  }else{
    return false;
  }
}
nombre.onkeypress=soloLetras;
apellido.onkeypress=soloLetras;
ciudad.onkeypress=soloLetras;
pais.onkeypress=soloLetras;

var solonumeros=function tuedad(t){
  var codigoTecla=t.keyCode;
  var longitud = this.value.length;
		/*ongitud==1){
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.focus();
		}*/
  if(codigoTecla>=48 && codigoTecla<=57 && longitud<=1){
    return true;
  }else{
    return false;
  }
}
edad.onkeypress=solonumeros;

var input=document.getElementsByClassName("input-registro");//console.log(input);
var validacionInput=function(){
	if(this.getAttribute("type")=="text"){
			var arrDato = this.value.split(" ");//split division
			var datoConMayusculas = "";
			for(var i = 0; i<arrDato.length;i++){
				datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
			}
			this.value=datoConMayusculas;
		}
	}

	for(var i = 0; i<input.length;i++){
		input[i].onblur=validacionInput;
	}
