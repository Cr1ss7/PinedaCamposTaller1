var opcion, interes = 0.15, veri = false, edad=0,prestamo,cuota,cant=0, capitalFinal=0;
//array de usuarios
var usuario= new Array(50);
//fecha actual
const fecha = new Date();
const fecha2 = new Date("2022-9-09");

//funcion principal
function init() {
  do{
    opcion = prompt("Dijite 1 Para realizar un prestamo\nDigite 2 para obtener la tabla"); 
    switch (opcion) {
      case "1":
        opcion = 0;
        do {
          opcion = prompt("Dijite 1 si es Hombre\nDijite 2 si es Mujer");
          switch (opcion) {
            case "1":
              do {
                opcion = 0;
                opcion = prompt("Dijite 1 si es un Estudiante\nDijite 2 si es Trabajador");
                switch (opcion) {
                  case "1":
                    edad = prompt("Dijite su edad");
                    if(edad>="24" && edad<=34){
                      alert("Usted tiene el derecho a un prestamo de maximo de 2000 Dolares con una reduccion al 3% de interes");
                      interes = interes-0.03;
                    }else if(edad<0){
                      alert("Error,Digite una edad valida");
                      break;
                    }
                    else{
                      alert("Usted tiene el derecho de un prestamo de un maximo de 2000 dolares");
                    }
                    do {
                      prestamo = prompt("Dijite la cantidad del prestamo");
                      if(isNaN(prestamo)){
                        alert("Error. Digite un valor numerico");
                      }else if(parseFloat(prestamo)<0 || parseFloat(prestamo)>2000){
                        alert("Dijite un valor adentro del rango");
                      }else{
                        veri=true;
                      }
                    } while (veri==false);
                    veri = true;
                    opcion = 0;
                    opcion = prompt("¿Dijite de cuanto tiempo va a ser su prestamo?\nDijite 1 para 6 meses\nDijite 2 para 12 mese\nDijite 3 para 18 meses");
                    tiempoPrestamo(opcion);
                    break;
                  case "2":
                    edad = prompt("Dijite su edad");
                    if(edad>="24" && edad<=34){
                      alert("Usted tiene el derecho de una reduccion al 3% de interes");
                      interes = interes-0.03;
                    }else if(edad<0){
                      alert("Error,Digite una edad valida");
                      break;
                    }
                    do {
                      prestamo = prompt("Dijite la cantidad del prestamo");
                      if(isNaN(prestamo)){
                        alert("Error. Digite un valor numerico");
                      }else if(parseFloat(prestamo)<0){
                        alert("Dijite un valor adentro del rango");
                      }else{
                        veri=true;
                      }
                    } while (veri==false);
                    veri = true;
                    opcion = 0;
                    opcion = prompt("¿Dijite de cuanto tiempo va a ser su prestamo?\nDijite 1 para 6 meses\nDijite 2 para 12 mese\nDijite 3 para 18 meses");
                    tiempoPrestamo(opcion);
                    break;
                  default:
                    alert("Error, Dijite una opcion valida");
                    break;
                }
              }while (veri == false);
              break;
            case "2":
              do {
                opcion = 0;
                opcion = prompt("Dijite 1 si es un Estudiante\nDijite 2 si es Trabajador");
                switch (opcion) {
                  case "1":
                    edad = prompt("Dijite su edad");
                    if(edad>="24" && edad<=34){
                      alert("Usted tiene el derecho a un prestamo de maximo de 2000 Dolares con una reduccion al 3% de interes");
                      interes = interes-0.03;
                    }else if(edad<0){
                      alert("Error,Digite una edad valida");
                      break;
                    }
                    else{
                      alert("Usted tiene el derecho de un prestamo de un maximo de 2000 dolares");
                    }
                    do {
                      prestamo = prompt("Dijite la cantidad del prestamo");
                      if(isNaN(prestamo)){
                        alert("Error. Digite un valor numerico");
                      }else if(parseFloat(prestamo)<0 || parseFloat(prestamo)>2000){
                        alert("Dijite un valor adentro del rango");
                      }else{
                        veri=true;
                      }
                    } while (veri==false);
                    veri = false;
                    opcion = 0;
                    opcion = prompt("¿Dijite de cuanto tiempo va a ser su prestamo?\nDijite 1 para 6 meses\nDijite 2 para 12 mese\nDijite 3 para 18 meses");
                    if(opcion == "1" || opcion == "2"){
                      interes=interes-0.05;
                      alert("Tiene un descuento del 5% del interes");
                    }
                    tiempoPrestamo(opcion);
                    break;
                  case "2":
                    edad = prompt("Dijite su edad");
                    if(edad>="24" && edad<=34){
                      alert("Usted tiene el derecho de una reduccion al 3% de interes");
                      interes = interes-0.03;
                    }else if(edad<0){
                      alert("Error,Digite una edad valida");
                      break;
                    }
                    do {
                      prestamo = prompt("Dijite la cantidad del prestamo");
                      if(isNaN(prestamo)){
                        alert("Error. Digite un valor numerico");
                      }else if(parseFloat(prestamo)<0){
                        alert("Dijite un valor adentro del rango");
                      }else{
                        veri=true;
                      }
                    } while (veri==false);
                    veri = true;
                    opcion = 0;
                    opcion = prompt("¿Dijite de cuanto tiempo va a ser su prestamo?\nDijite 1 para 6 meses\nDijite 2 para 12 mese\nDijite 3 para 18 meses");
                    if(opcion == "1" || opcion == "2"){
                      interes=interes-0.05;
                      alert("Tiene un descuento del 5% del interes");
                    }
                    tiempoPrestamo(opcion);
                    break;
                  default:
                    alert("Error, Dijite una opcion valida");
                    break;
                }
              }while (veri == false);
              break;
            default:
              break;
          }
        } while (veri == false);
        veri == true;
       usuario[cant]= (cuota);
       cant++;
       opcion = 0;
       interes = 0.15;
        break;
      case "2":
          if(cant==0){
            alert("No hay prestamos realizados");
            veri=true;
          }
          else{
            for(var i = 0; i<cant;i++){
              document.write("<table>") ;
              document.write("<tr><th>Numero de prestamo</th><th>Cuota mensual</th><th>Fecha del prestamo</th><th>Fecha de pago</th></tr>");
              document.write("<tr><td>"+(i+1)+"</td><td>"+usuario[i]+"</td><td>"+fecha+"</td><th>"+fecha2+"</th></tr>");
              document.write("</table>") ;
              veri=false;
            }
          }
        break;
      default:
        alert("Error. Dijite un valor valido");
        break;
    }
  }while(veri == true);
}

function tiempoPrestamo(opcion){
capitalFinal = prestamo*(1+interes);
switch (opcion) {
  case "1":
    capitalFinal = Math.pow(capitalFinal,0.5)
    cuota = capitalFinal/6;    
    veri = true;
    break;
  case "2":
    capitalFinal = Math.pow(capitalFinal,1)
    cuota = capitalFinal/12;    
    veri = true;
    break;
  case "3":
    capitalFinal = Math.pow(capitalFinal,1.5)
    cuota = capitalFinal/18;    
    veri = true;
    break;
  default:
    alert("Dijite un valor valido");
    break;
}
}

window.onload = init();
