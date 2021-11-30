//Vamos a usar condicionales
///Son reglas que vamos a aplicar para validar si es verdadero falso y generar ciertas acciones
///Dentro de los parentesis debemos poner una condicion que sea verdadera y si no es verdad no va a poder accesar a la condicion ni hacer nada con ella
if(true){
console.log("hola");
}
if(false){
    console.log("hola");
    }
 //No pasa nada con el false porque el if evalua lo que hay dentro siempre y cuando sea verdadero
  //Entonces ocupamos 
  if(false){
    console.log("hola");
    }   
    else{     
        console.log("Soy falso");

    }
      ///No le pongo nada dentro de los parentesis porque no tengo que validar nada
    ///Si queremos seguir validando usamos else if
   
     
    if(false){
        console.log("hola");
        }   
        else if (true){
            console.log("Soy falso");
    
        } 
        else {

        }

///Pondremos un ejemplo 

var edad=18;
if(edad===18){
   console.log("puedes votar, sera tu primera votacion");
}else if(edad>18){
    console.log("Puedes votar de nuevo");
}else {
    console.log("Aun no puedes votar"); 
}
///Esta es una condicion donde se validan 2 cosas la primera es que si es mayor de 18 años o acaba de cumplir los 18 años 
///Podemos validar as veces y se le conoce como condiciones anidadas
if(edad===18){
    console.log("puedes votar, sera tu primera votacion");
 }else if(edad>18){
     console.log("Puedes votar de nuevo");
    }else if(edad>18){
        console.log("Puedes votar de nuevo");
    }else if(edad>18){
        console.log("Puedes votar de nuevo");
    }else {
     console.log("Aun no puedes votar"); 
 }
//Otra forma de hacerlo es asi
///Ocupamos el operador ternario generamos el if y el else en una sola linea

condition ? true : false; ///Para construir el operador ternario
 
///Ejemplo
var numero=1;
///Quiero validar que ese numero sea uno y si no entra en falso
var resultado=numero===1?"si soy un uno":"No soy un uno";
console.log(resultado); ///El resultado sera que es un uno
///con otro valor 
var numero=2;
var resultado=numero===1?"si soy un uno":"No soy un uno";
console.log(resultado);//Saldra no soy un uno

///Hacer un juego piedra papel o tijera