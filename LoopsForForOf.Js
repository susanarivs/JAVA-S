//Un ciclo es una manera rapida o sencilla de poder hacer que una tarea se repita sin necesidad de hacerlo forma manual
//Para hacerlo generamos una funcion  y mientras adentro de este loop  se cumpla una condicion la tarea va a poder seguir pasando de manera repetitiva hasta que se rompa o deje de ser verdad 

///Ejemplos para generar los loops y cauntas formas de loops tenemos 

var estudiantes=["Maria","Sergio","Rosa","Daniel"];

///Primero hago la tarea que va a poder ejecutar el loop
function saludarEstudiantes(estudiantes){
    console.log(`hola,${estudiantes}`);
}
for(var i=0; i < estudiantes.length; i++){
    console.log(estudiantes[i]); ///Recoerdemos que vamos a mandar a llamar del array el lugar cero entonces el primer lugar es maria 
}

///Vamos a usar la funcion de saludar estudiantes
for(var i=0; i < estudiantes.length; i++){
   saludarEstudiantes(estudiantes[i]);  
}
////Vamos a ver otra opcion 
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
///Debido a que estudiante es el singular de estudiantes se convierte en el index 