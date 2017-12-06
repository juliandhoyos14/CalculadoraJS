function cambiarTamanioTecla(elemento){
  var id = elemento.id;
  if (id=="1" || id=="2" || id=="3" || id=="0" || id=="punto" || id=="igual"){
    elemento.style.width = "28%";
		elemento.style.height = "62px";
  } else if (id == "mas"){
    elemento.style.width = "88%";
		elemento.style.height = "98%";
  } else{
    elemento.style.width = "21%";
    elemento.style.height = "60px";
  }
  setTimeout(regresarTamanioOriginal,500,elemento);
}

function regresarTamanioOriginal(elemento){
  var id = elemento.id;
  if (id=="1" || id=="2" || id=="3" || id=="0" || id=="punto" || id=="igual"){
    elemento.style.width = "29%";
		elemento.style.height = "62.91px";
  } else if (id == "mas"){
    elemento.style.width = "90%";
		elemento.style.height = "100%";
  } else{
    elemento.style.width = "22%";
    elemento.style.height = "62.91px";
  }
}

Calculadora = {
  display: document.getElementById('display'),
  valorDisplay: "0",
  ultimaOperacion: "",
  ultimoOperador: "",
  operaciones: [],
  valores: [],
  resultado: 0,
  banderaIgual: false,

  /*Inicializa, asigna eventos a las teclas*/
  init: function(){
    this.asignarEventosFormatoTeclas('tecla');
    this.asignarEventosTeclas();
  },

  asignarEventosFormatoTeclas: function(selector){
    var teclasCalculadora = document.getElementsByClassName(selector);
    for(var i = 0; i < teclasCalculadora.length; i++) {
      teclasCalculadora[i].onclick = this.eventoClickTecla;
    }
  },

  eventoClickTecla: function(event){
    cambiarTamanioTecla(event.target);
  },

  /*Asigna los eventos de teclado de la Calculadora*/
  asignarEventosTeclas: function(){
    document.getElementById('0').addEventListener("click", function() {
      Calculadora.ingresarDigito("0");
    });
    document.getElementById('1').addEventListener("click", function() {
      Calculadora.ingresarDigito("1");
    });
    document.getElementById('2').addEventListener("click", function() {
      Calculadora.ingresarDigito("2");
    });
    document.getElementById('3').addEventListener("click", function() {
      Calculadora.ingresarDigito("3");
    });
    document.getElementById('4').addEventListener("click", function() {
      Calculadora.ingresarDigito("4");
    });
    document.getElementById('5').addEventListener("click", function() {
      Calculadora.ingresarDigito("5");
    });
    document.getElementById('6').addEventListener("click", function() {
      Calculadora.ingresarDigito("6");
    });
    document.getElementById('7').addEventListener("click", function() {
      Calculadora.ingresarDigito("7");
    });
    document.getElementById('8').addEventListener("click", function() {
      Calculadora.ingresarDigito("8");
    });
    document.getElementById('9').addEventListener("click", function() {
      Calculadora.ingresarDigito("9");
    });
    document.getElementById('on').addEventListener("click", function() {
      Calculadora.inicializarCalculadora();
    });
    document.getElementById('sign').addEventListener("click", function() {
      Calculadora.cambiarSignoDisplay();
    });
    document.getElementById('dividido').addEventListener("click", function() {
      Calculadora.ingresarOperacion("division");
    });
    document.getElementById('por').addEventListener("click", function() {
      Calculadora.ingresarOperacion("multiplicacion");
    });
    document.getElementById('menos').addEventListener("click", function() {
      Calculadora.ingresarOperacion("resta");
    });
    document.getElementById('mas').addEventListener("click", function() {
      Calculadora.ingresarOperacion("suma");
    });
    document.getElementById('punto').addEventListener("click", function() {
      Calculadora.ingresarDecimal();
    });
    document.getElementById('igual').addEventListener("click", function() {
      Calculadora.calcularResultado();
    });
  },

  /*Función que se ejecuta cuando se pulsa sobre algún dígito en la calculadora*/
  ingresarDigito: function(digito){
    if(this.banderaIgual) {
      this.inicializarCalculadora();
    }
    longitudValorDisplay = this.valorDisplay.length;
    if (longitudValorDisplay < 8){
      if (this.valorDisplay == "0" || this.valorDisplay == ""){
        this.valorDisplay = digito;
      } else {
        this.valorDisplay = this.valorDisplay + digito;
      }
    }
    this.actualizarValorDisplay();
    this.banderaIgual = false;
  },

  /*Función que permite que se modifique el signo del valor que se encuentra en el display*/
  cambiarSignoDisplay: function(){
    if (this.valorDisplay != 0 && this.valorDisplay != "") {
      var valorAuxiliar;
      if(this.valorDisplay.charAt(0)=="-") {
        valorAuxiliar = this.valorDisplay.slice(1);
      } else{
        valorAuxiliar = "-" + this.valorDisplay;
      }
      this.valorDisplay = valorAuxiliar;
      this.actualizarValorDisplay();
    }
  },

  /*Permite ingresar un número decimal cuando se presiona la tecla punto "."*/
  ingresarDecimal: function(){
    if (this.valorDisplay.indexOf(".") == -1) {
			if (this.valorVisor == ""){
				this.valorDisplay = this.valorDisplay + "0.";
			} else {
				this.valorDisplay = this.valorDisplay + ".";
			}
			this.actualizarValorDisplay();
		}
  },

  /*Limpia la calculadora y la deja lista para una nueva operación*/
  inicializarCalculadora: function(){
    this.valorDisplay = "0";
    this.ultimaOperacion = "";
    this.ultimoValor = "";
    this.operaciones = [];
    this.valores = [];
    this.banderaIgual = false;
    this.actualizarValorDisplay();
  },

  /*Función que se ejecuta cuando se pulsa sobre alguna tecla de operación (+,-,+,/) en la calculadora*/
  ingresarOperacion: function(operacion){
    if(this.valorDisplay != ""){
      this.valores.push(this.valorDisplay);
      this.operaciones.push(operacion);
      this.ultimaOperacion = operacion;
      this.ultimoOperador = this.valorDisplay;
      this.valorDisplay = "";
      this.actualizarValorDisplay();
      this.banderaIgual = false;
    } else if(this.valores.length == 0 || this.valorDisplay == ""){
      alert("Debe ingresar primero un valor");
      this.inicializarCalculadora();
    }
  },

  /*Calcula el resultado cuando se presiona la tecla igual "=", y lo muestra en la pantalla de la calculadora*/
  calcularResultado: function(){
    if(!this.banderaIgual){
      if(this.valorDisplay != ""){
        this.valores.push(this.valorDisplay);
        this.ultimoOperador = this.valorDisplay;
      }
      if(this.valores.length == 0 || this.valorDisplay == ""){
        alert("Debe ingresar primero un valor");
        this.inicializarCalculadora();
      } else if(this.valores.length == 1){
        alert("Debe ingresar al menos dos valores");
        this.inicializarCalculadora();
      } else if(this.operaciones.length >= this.valores.length){
        alert("Hay un error en los datos");
        this.inicializarCalculadora();
      } else{
        operadorUno = parseFloat(this.valores[0]);
        operadorDos = parseFloat(this.valores[1]);
        operacion = this.operaciones[0];
        for(var i = 2; i < this.valores.length; i++){
          this.ejecutarOperacion(operadorUno, operadorDos, operacion);
          operadorUno = parseFloat(this.resultado);
          operadorDos = parseFloat(this.valores[i]);
          operacion = this.operaciones[i-1];
        }
        this.ejecutarOperacion(operadorUno, operadorDos, operacion);
        this.banderaIgual = true;
        this.valorDisplay = this.resultado.toString();
        this.actualizarValorDisplay();
        this.operaciones = [];
        this.valores = [];
      }
    } else{
      operadorUno = parseFloat(this.resultado);
      operadorDos = parseFloat(this.ultimoOperador);
      operacion = this.ultimaOperacion;
      this.ejecutarOperacion(operadorUno, operadorDos, operacion);
      this.banderaIgual = true;
      this.valorDisplay = this.resultado.toString();
      this.actualizarValorDisplay();
      this.operaciones = [];
      this.valores = [];
    }
  },

  /*Realiza la operación matemática de suma, resta, multiplicacion o división entre dos operandos*/
  ejecutarOperacion: function(operadorUno, operadorDos, operacion){
    switch (operacion){
      case "suma":
        this.resultado = eval(operadorUno + operadorDos);
        break;
      case "resta":
        this.resultado = eval(operadorUno - operadorDos);
        break;
      case "multiplicacion":
        this.resultado = eval(operadorUno * operadorDos);
        break;
      case "division":
        this.resultado = eval(operadorUno / operadorDos);
        break;
    }
  },

  /*Actualiza el valor de la pantalla de display en la calculadora*/
  actualizarValorDisplay: function(){
    if(this.valorDisplay.length > 8){
      if(this.valorDisplay.charAt(0) == "-") {
        this.valorDisplay = this.valorDisplay.substring(0, 9);
      } else{
        this.valorDisplay = this.valorDisplay.substring(0, 8);
      }
    }
    this.display.innerHTML = this.valorDisplay;
  }
}

Calculadora.init();
