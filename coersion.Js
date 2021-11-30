4+"7"; //47 es un string genera una concatenacion 
4*"7"; //28 Si genera una operacion completa
2+true; //3
false-3; //-3

//A esto se les llama coerciones implicitas y coersiones explicitas 

///Implicitas es cuando el lenguaje nos ayuda y cambia de un tipo de valor a otro tipo de valor
///Coersion significa que podemos cambiar un tipo de valora otro tipo de valor si tenemos un valor string  a in tipo de valor numero 

///Coersion explicita cuando nosotros obligamos que un valor de un tipo cambie a otro valor de otro tipo de dato cuando necesitemos que ese valor sea distinto 
var a=4+"7";  ///coersion implicita general el numero 47 dentro de un string, por el operador de mas concatena el valor de un tipo de dato con otro valor de otro tipo de dato juntandolos en el string osea los junta porque los fusiona no hace la operacion solo los fusiona

typeof a

4*"7" 
var b=4*"7";// otra coersion implicita como cambiamos el operador* es una suma numerica y java Script da por hecho que no queriamos ocupar un string entonces quieres ocupar un numero y si genera la operacion 
typeof b
///Coersion Explicita
var a=20;
var b=a+"";
console.log(b);
typeof b; 
///Como obligamos que la a se convierta a un string sin concatenar 
//coersion explicita

var c=String(a);//queremos que el 20 se convierta en un string sin concatenar usamos u metodo llamado string
typeof c //Es ya un string 
console.log (c); //El 20 es un string 

///Obligamos que la variable a que era un 20 numero se convierta en un 20 string, lo pudimos obligar gracias al metodo string 
///El metodo hace la coersion explicita
///Si quiero obligar que el 20 string se convierta a 20 numero hacemos lo siguiente

var d =Number(c);
typeof d

///Llega a pasar en web y ocupamos etiquetas que se llaman imput y si queremos hacer operaciones lo boligamos a que se covierta en numeros 
