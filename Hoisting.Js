console.log(miNombre); //¿Que es?--Una funcion que nos da el navegador--Ayuda a imprimir la consola que hemos estado usando de chrome los resultados  
///Con el console.log se pueden imprimir variables y resultados 
var miNombre;
miNombre="susana";
//Con hoisting es cuando mandamos a llamar variables sin haberlas declarado
console.log(miNombre);
var miNombre;
miNombre="susana";
///El hoisting es cuando variables y funciones se declaran antes al incio del codigo

hey();
function hey(){
    console.log("hola "+ miNombre);
}
 
var miNombre="Susana"; ///Lo que sucede en esta seccion es que las funciones se declaran antes que las variables

///Esto quiere decir que cuando llega a la funcion lo procesa lo lleva arriba del codigo como funcion y despues declara las funciones 
///Entonces ve el codigo y como no esta definida declara la variable arriba y la inicializa como undefine
///Conclusion si tenemos una funcion y no esta declarada ni inicializada si funciona siempre y cuando las variables esten declaradas e inicializadas anteriormente en la parte de arriba 
///Por buenas practicas todas las variables que vayas a utilizar deben estar declaradas al inicio del codigo 
