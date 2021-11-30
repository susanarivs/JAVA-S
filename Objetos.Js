//Para poder entender el tema de objetos es como llevamos un objeto del mundo fisico al paradigma de lenguaje de programacion Java 
///Ejemplo carro 
//Lo convertimos en una variable con propiedades
///La sintaxis de un objeto en JS
var objeto={   ///Java reconoce a la variable y sabe que su valor y tipo es de objeto 
///Todo lo que vaya adentro son propiedades es una combinacion de palabras claves y valores
};
///Ejemplo
var miAuto={
 marca:"Toyota", //Marca es palabra clave y toyota el valor
 modelo:"corolla",
 annio: 2020 ///Valor y tipo numero
};
miAuto;
///Para acceder algo especifico de un objeto  
miAuto.marca; ///Me trae el valor como si mandamos a llamar un variable de ese objeto
///Vamos a hacer que una propiedad de este objeto sea una FUNCION y se le llama metodo
///Son metodos de objetos
var miAuto={
    marca:"Toyota", //Marca es palabra clave y toyota el valor
    modelo:"corolla",
    annio: 2020, ///Valor y tipo numero
    detalleDelAuto:function(){
    console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
///Para poder ingresar al matodo que es la funcion que esta dentro de mi objeto es de la siguiente manera
miAuto.detalleDelAuto();
///El this es una variable que hace referencia a un objeto this= miauto.modelo me va a traer un objeto
