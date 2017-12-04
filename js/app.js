Calculadora = {

  display: document.getElementById('display'),
  valorDisplay: "0",
  ultimaOperacion: "",
  ultimoValor: "",
  operaciones: [],
  valores: [],

  /*Inicializa, asigna eventos a las teclas*/
  init: function(){
    this.asignarEventosFormatoTeclas('tecla');
    this.asignarEventosTeclas();
  },

  asignarEventosFormatoTeclas: function(selector){
    var teclasCalculadora = document.getElementsByClassName(selector);
    for(var i = 0; i < teclasCalculadora.lenght; i++) {
      teclasCalculadora[i].onclick = this.eventoClickTecla;
    }
  },

  eventoClickTecla: function(event) {
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
    longitudValorDisplay = this.valorDisplay.length;
    if (longitudValorDisplay < 8){
      if (this.valorDisplay == "0" || this.valorDisplay == ""){
        this.valorDisplay = digito;
      } else {
        this.valorDisplay = this.valorDisplay + digito;
      }
    }
    this.actualizarValorDisplay();
  },

  /*Limpia la calculadora y la deja lista para una nueva operación*/
  inicializarCalculadora: function(){
    this.valorDisplay = "0";
    this.ultimaOperacion: "",
    this.ultimoValor: "",
    this.operaciones: [],
    this.valores: [],
    this.actualizarValorDisplay();
  },

  /*Función que se ejecuta cuando se pulsa sobre alguna tecla de operación (+,-,+,/) en la calculadora*/
  ingresarOperacion: function(operacion){
    if(this.valorDisplay != "0" && this.valorDisplay != ""){
      this.valores.push(this.valorDisplay);
      this.operaciones.push(operacion);
      this.valorDisplay = "";
      this.ultimaOperacion = operacion;
      this.ultimoValor = this.valorDisplay;
      this.actualizarValorDisplay();
    } else if(this.valores.length == 0 || this.valorDisplay == "") {
      alert("Debe ingresar primero un valor");
    }
  },

  calcularResultado: function(){
    
  },

  /*Actualiza el valor de la pantalla de display en la calculadora*/
  actualizarValorDisplay: function(){
    this.display.innerHTML = this.valorDisplay;
  },




  sumar: function(){

  },
  restar: function(){

  },
  multiplicar: function(){

  },
  dividir: function(){

  }
}

Calculadora.init();
