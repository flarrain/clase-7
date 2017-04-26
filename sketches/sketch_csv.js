var data;

function preload() {
   data = loadTable("https://raw.githubusercontent.com/profesorfaco/dno037-2017-07/gh-pages/data/titanic_passengers.csv", "true", "header");
}

function setup() {
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noLoop();
   noStroke();//círculos sin bordes negros
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
   background(237, 34, 93);
   var total_primera = 0;
   var total_segunda = 0;
   var total_tercera = 0;
   var muertos_primera = 0;
   var muertos_segunda = 0;
   var muertos_tercera = 0;

   //con esto cuento el total de pasajeros por clase
   for (var a = 0; a < data.getRowCount(); a++) { //++ significa más 1
      if (data.get(a, 2) == 1) { //a es una variable que cambia su valor hasta el último número
         total_primera++ //condición
      } else if (data.get(a, 2) == 2) {
         total_segunda++
      } else if (data.get(a, 2) == 3) {
         total_tercera++
      }
   }
   //con esto, que incluye una doble condición de muerto y clase, cuento los fallecidos por clase
   for (var b = 0; b < data.getRowCount(); b++) {
      if ((data.get(b, 1) == 0) && (data.get(b, 2) == 3)) {
         muertos_tercera++
      } else if ((data.get(b, 1) == 0) && (data.get(b, 2) == 2)) {
         muertos_segunda++
      } else if ((data.get(b, 1) == 0) && (data.get(b, 2) == 1)) {
         muertos_primera++
      }
   }

   var muerto = 0;
   var muerta = 0;

for (var c = 0; c < data.getRowCount(); c++) {
  if ((data.get(c, 1) == 0) && (data.get(c, 5) == "male")) {
    muerto++
} else if ((data.get(c, 1) == 0) && (data.get(c, 5) == "female")) {
   muerta++
 }
}

var muertos_uno = 0;
var muertos_dos = 0;
var muertos_tres = 0;

for (var d = 0; d < data.getRowCount(); d++) {
   if ((data.get(d, 1) == 0) && (data.get(d, 5)== "male") && (data.get(d, 2) == 1)) {
    muertos_uno++
  } else if ((data.get(d, 1) == 0) && (data.get(d, 5)== "male") && (data.get(d, 2) == 2)) {
    muertos_dos++
  } else if ((data.get(d, 1) == 0) && (data.get(d, 5)== "male") && (data.get(d, 2) == 3)) {
    muertos_tres++
   }
}

var muertas_primera = 0;
var muertas_segunda = 0;
var muertas_tercera = 0;

for (var e = 0; e < data.getRowCount(); e++) {
   if ((data.get(e, 1) == 0) && (data.get(e, 5)== "female") && (data.get(e, 2) == 1)) {
    muertas_primera++
  } else if ((data.get(e, 1) == 0) && (data.get(e, 5)== "female") && (data.get(e, 2) == 2)) {
    muertas_segunda++
  } else if ((data.get(e, 1) == 0) && (data.get(e, 5)== "female") && (data.get(e, 2) == 3)) {
    muertas_tercera++
   }
}

   //todo esto se imprime en su consola de JavaScript
   print("En el Titanic viajaban " + data.getRowCount() + " pasajeros.")
   print("Eran " + total_primera + " pasajeros los que viajaban en la primera clase, de ellos fallecieron " + muertos_primera + ".");
   print("Eran " + total_segunda + " pasajeros los que viajaban en la segunda clase, de ellos fallecieron " + muertos_segunda + ".");
   print("Eran " + total_tercera + " pasajeros los que viajaban en la tercera clase, de ellos fallecieron " + muertos_tercera + ".");
   print("Murieron " + muerto + " hombres ")
   print("Murieron " + muerta + " mujeres ")
    print("Murieron " + muertos_uno + " hombres de primera clase ")
     print("Murieron " + muertos_dos + " hombres de segunda clase ")
      print("Murieron " + muertos_tres + " hombres de tercera clase ")
      print("Murieron " + muertas_primera + " mujeres de primera clase ")
       print("Murieron " + muertas_segunda + " mujeres de segunda clase ")
        print("Murieron " + muertas_tercera + " mujeres de tercera clase ")

   //esto dibuja los círculos blancos, del total de pasajeros.
   fill(255);
   ellipse((width / 4), (height / 2), (total_primera / 3), (total_primera / 3));
   ellipse((width / 4 * 2), (height / 2), (total_segunda / 3), (total_segunda / 3));
   ellipse((width / 4 * 3), (height / 2), (total_tercera / 3), (total_tercera / 3));
   //estos dibuja los círculos negros, de total de facellecidos.
   fill(0);
   ellipse((width / 4), (height / 2), (muertos_primera / 3), (muertos_primera / 3));
   ellipse((width / 4 * 2), (height / 2), (muertos_segunda / 3), (muertos_segunda / 3));
   ellipse((width / 4 * 3), (height / 2), (muertos_tercera / 3), (muertos_tercera / 3));
}
