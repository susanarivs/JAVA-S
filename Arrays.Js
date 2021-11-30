 ///Es una estructura de datos y un tipo objeto, es un valor que va a guardar mas valores adentro pueden ser numeros, strings, objetos e incluso puede contener mas arrays dentro del array
 ///Genera una structura de datos en javaScript
 ///Como genero un array
 var frutas=[]; ///sintaxica de generar un array
///COMO LE METEMOS DATOS AL ARRAY
 var frutas=["Manzana","Platano","Cereza"];
  ///Accedemos al array y sus elementos atraves de la variable que hemos definido
  console.log(frutas);
  ///Como se que un array tiene elementos en su interior si no conozco el array o yo no lo genere
  console.log(frutas.length);
  ///Si yo quiero acceder a cada uno de los elementos
  console.log(frutas[0]);////En programacion se dice que se inicia con un cero
  ///En el index manzana esta posicionada en el elemento 0 
  ///Por tal motivo me va a devolver manzana

  ////En los arrays tenemos 2 tipos de elementos que son metodos 
  ///Me ayudan a poder generar cosas con los array y son cosas que nos ayuda a mutar el contenido del array o sea quitar o agregar elementos
  var frutas=["Manzana","Platano","Cereza"];
  var masFrutas=frutas.push("Uvas"); ///Añadir,agregar, empujar elementos en ell array
  frutas
  ///Si quiero acceder a uvas 
  frutas[3]

  ///Quitar elementos
  var ultimo=frutas.pop("uvas");
  frutas
  ///Vamos a ver un elemento que nos va a ayudar a agregar elementos al incio del arreglo
  var nuevaLongitud=frutas.unshift("uvas");
///Vamos a ver otro elemento que se llama shift nos va a ayudar a eliminar el elmento que este en el inicio
var borrarFruta=frutas.shift("uvas");
///Elemento que no va a ayudar a mutar y nos va a ayudar a saber la posicion del elemento que le pasemos en el array
var posicion=frutas.indexOf("platano");

 posicion

 ///De esta forma mando a llamar frutas con la posicion
 frutas[2]