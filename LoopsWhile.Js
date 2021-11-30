var estudiantes=["Maria", "sergio","Rosa","Daniel"];
 function saludarEstudiantes(estudiante){
     console.log(`hola,${estudiante}`)       ///Lllamamos string y variable concatenada
 }

 while(estudiantes.length>0){   ///Mientras lo que este adentro sea verdad lo que esta adentro del while va a pasar osea se va a generar el loop
    var estudiante=estudiantes.shift(); //Shift metodo de mutacion que vimos en los arrays que va a sacar elementos de nuestro array osea que cada que se cumpla la condicion del loop va a sacar a los estudiantes del arreglo
    saludarEstudiantes(estudiante);
 } 

 ////Vamos a poner el console.log vara que veamos como funciona el shift en cada ciclo
 while(estudiantes.length>0){   ///Mientras lo que este adentro sea verdad lo que esta adentro del while va a pasar osea se va a generar el loop
    console.log(estudiantes);
    var estudiante=estudiantes.shift(); //Shift metodo de mutacion que vimos en los arrays que va a sacar elementos de nuestro array osea que cada que se cumpla la condicion del loop va a sacar a los estudiantes del arreglo
    saludarEstudiantes(estudiante);
 } 
 /////Da como resultado esto
 ///(4) ['Maria', 'sergio', 'Rosa', 'Daniel']
///hola,Maria
///(3) ['sergio', 'Rosa', 'Daniel']
/// hola,sergio
///(2) ['Rosa', 'Daniel']
///hola,Rosa
///['Daniel']