/// Son un arreglo se sentencias para generar acciones con los valores guardados previamente en las variables
///Tenemos 2 tipos de funciones las declarativas y las de expresion

///Declarativas

function miFuncion(){
  return 3;
}  ///Tenemos declara la funcion declarativa porque ocupamos la palabra reservada se declara automaticamente la funcion
/// Ocupa el nombre de la funcion para reservar un espacio en memoria y guardo el calculo o la operacion que se haga dentro de la funcion 
///A esta funcion si le estoy dando un nombre
/// Expresion 
///Para que corra mi funcion le tengo que dar valores 
var miFuncion=function(a,b){ ///Tiene valores pueden estar dentro o no de la funcion y necesita parametros
   return a+b;
} /// Guardamos una funcion dentro de la variable

///Para mandar a llamar la funcion le tengo que dar los parametros que estoy esperando recibir como valor para que la funcion pueda hacer algo 
///Tambien se le conoce como funcion anonima porque no le doy nombre
///Ya que solo declaro una variable que tiene como valor una funcion pero la funcion no tiene un nombre 
miFuncion();


///Funcion declarativa
function saludaEstuadiantes(Estudiante){
    console.log(estudiante);
}   ///Generamos una funcion que no tiene un valor definido llamada saluda estudiantes, porque el valor se lo doy despues cuando mande a llamar la funcion

///Template string o plantilla de cadena de texto, sirve para poner mas de un dato 

function saludaEstudiantes(estudiantr){
    console.log(`Hola ${estudiante}`); ///Para conectar a una BD y traer toda la informacion
}

///Otra manera de traer informacion sin el console log es return

function sumar(a,b){ ///Voy a usar  2 parametros
     var resultado=a+b; //Dentro de la funcion se va a generar una variable con el valor de la operacion de a+b
       return  resultado;     ///Palabra reservada para devolver informacion 
    }
///Otra mamera de traer la informacion
function sumar(a,b){   
      return a+b;   //En este caso solo pido la suma de los parametros   
   }
///Mando a llamar mi funcion 
   sumar(1,2);

