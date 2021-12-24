function agregar(){
    //console.log("Agregado")
    function Mercaderia(codigo,descripcion,rubro,costo) {
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.rubro=rubro;
        this.costo=costo;
    }
}

var codigoAgregar = document.getElementById("codigo").value;
var descripcionAgregar = document.getElementById("descripcion").value;
var rubroAgregar = document.getElementById("rubro").value;
var costoAgregar = document.getElementById("costo").value;

nuevaMercaderia = new Mercaderia(codigoAgregar,descripcionAgregar,rubroAgregar,costoAgregar);
console.log(nuevaMercaderia);
capturar();
}

var baseDatos =[];
function capturar(){
    baseDatos.push(nuevaMercaderia);
    console.log(nuevaMercaderia);
    document.getElementById("tabla").innerHTML += '<tbody><td>' +nuevaMercaderia.codigo+
    '<tbody><td>' +nuevaMercaderia.descripcion+'<tbody><td>' 
    +nuevaMercaderia.rubro+'<tbody><td>' +nuevaMercaderia.costo+'</td></rbody>';
}