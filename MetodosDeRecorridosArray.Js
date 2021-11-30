//Hay 2 metodos de array uno para mutar y otro para hacer un recorrido
///Con el metodo de recorrido vamos a aprender como podemos obbtener propiedades especificas de los objetos que estan dentro de los array
///El array es una lista de articulos con el nombre del articulo con el nombre del articulo

var articulos=[
        {nombre:"bici",costo:3000},
        {nombre:"tv",costo:2500},
        {nombre:"libro",costo:320},
        {nombre:"celular",costo:10000},
        {nombre:"Laptop",costo:20000},
        {nombre:"teclado",costo:500},
        {nombre:"audifonos",costo:1700},

];

///Primer metodo filter
var articulosFiltrados=articulos.filter(function(articulo){ ///Le voy a dar el articulo que vaya filtrando
  return articulo.costo<=500;
});

///El filter lo que hace es agregar a un nuevo array los articulos filtrados 

////Veremos otro metodo se llama map ayuda a mapear ciertos articulos 
//Genero un array 

var nombreArticulos=articulos.map(function(articulo){
    return articulo.nombre;                                   ///Pido que me regrese de todos los articulos los nombres de los articulos 
    
});

nombreArticulos
///Ninguno de los metodos modifica mi array si no lo contrario hace otro array con el valor que le paso si lo encuentra
///Usaremos find() valida un true o un false si lo encuentra lo regresa y si no hace lo contario
//find();///Nos ayuda a encontar algo dentro del articulo
var encuentraArticulo=articulos.find(function(articulo){
    return articulo.nombre ==="laptop";
});
///El array es buscar un articulo osea que nos va a regresar de los articulos del arreglo

///Nuevo metodo foreach
///Este metodo no me genera un nuevo arreglo lo que hace es filtrar sobre el array original y sin modificar

articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

///Otro metodo es el some
//some();   ///Genera verdadero o falso
var articulosBaratos=articulos.some(function(articulo){
    return articulo.costo<=700;
});