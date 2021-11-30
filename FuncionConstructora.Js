///Como podemos hacer objetos de forma automatica y no tan manual
///Generamos un template de un objeto en donde generamos opciones que seran sus parametros y sus propiedades y vamos a poder hacer nuevas instancias con un operador especial 
///Haremos objetos de una manera mas profesional 
///Antes lo haciamos asi 
var miAuto={
    marca:"Toyota", //Marca es palabra clave y toyota el valor
    modelo:"corolla",
    annio: 2020, ///Valor y tipo numero
    detalleDelAuto:function(){
    console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
///Ahora lo haremos de la siguiente manera
function auto(marca, modelo, annio){ ///coloco dentro de los parentesis las propiedades que quiero que tenga ese objeto
this.marca=marca;

};
///La funcion que se llama auto tiene como parametros las propiedades que yo espero que mi objeto tenga y ocupo la palabra reservada this como referencia a mi funcion constructora
///Tambien ocupo la palabra clave como marca que es igual a marca que ocupamos como parametro en la funcion pero hace referencia a la propiedad de mi objeto
function auto(marca, modelo, annio){ ///coloco dentro de los parentesis las propiedades que quiero que tenga ese objeto
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
    };
 ////Guardo y mando a llamar auto me trae el mismo tamplate, pero si quiero comenzar a construir el objeto
 ///Seria asi

 //var autoNuevo=new 
 ///EL new va a generar una nueva instancia de nuestra funcion constructora
 ///Una instancia es generar un objeto que deriva de otro objeto
 var autoNuevo=new auto("Tesla","model 3", 2020);
 ///Mando a llamar
 autoNuevo
 ///Generamos mas instancias de la misma manera
 var autoNuevo2=new auto("Tesla","model x", 2018);
 var autoNuevo3=new auto("Tesla","corolla", 2020);



 ///Reto hacer un loop donde genere nuevos autos a mi funcion constructora   
  ///Una lista de 30 carros poder usar el loop 