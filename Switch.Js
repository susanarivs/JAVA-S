//El switch es una forma de validar o generar una condicion y es una forma de validar o generar una informacion
 ///El switch funciona por casos 
 switch(true){
      case 1:
          console.log("soy uno");


 }
///Ejemplo 
var numero=1;
switch(numero){
    case 1:
        console.log("soy uno");
        break;  ///Ya no permite que revise mas casos se rompe y no deja que genere mas validaciones
    
}

///Si tengo mas casos 
var numero=1;
switch(numero){
    case 1:
        console.log("soy uno");
        break;  ///Ya no permite que revise mas casos se rompe y no deja que genere mas validaciones
    case 2:
        console.log("soy un 10");
        break;
    case 100:
        console.log("soy un 100");
        break;    
}
///En la situacion de que ninguno de los casos se cumpla se genera un default de hecho aqui ya no tengo que generar nada
var numero=1;
switch(numero){
    case 1:
        console.log("soy uno");
        break;  ///Ya no permite que revise mas casos se rompe y no deja que genere mas validaciones
    case 2:
        console.log("soy un 10");
        break;
    case 100:
        console.log("soy un 100");
        break;   
    default:
        console.log("No soy nada");     
}

///Generar juego de piedra papel y tijera con switch
