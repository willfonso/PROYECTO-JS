var baseDatos = [];

class Mercaderia {
    constructor(codigo, descripcion, rubro, costo) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.rubro = rubro;
        this.costo = costo;
    }
}


function agregar() {
    let codigoAgregar = document.getElementById("codigo").value;
    var descripcionAgregar = document.getElementById("descripcion").value;
    var rubroAgregar = document.getElementById("rubro").value;
    var costoAgregar = document.getElementById("costo").value;

    nuevaMercaderia = new Mercaderia(
        codigoAgregar,
        descripcionAgregar,
        rubroAgregar,
        costoAgregar
    );

    console.log(nuevaMercaderia);
    baseDatos.push(nuevaMercaderia);

    document.getElementById("tbody").innerHTML += `
        <tr>
            <th>${nuevaMercaderia.codigo}</th>
            <th>${nuevaMercaderia.descripcion}</th>
            <th>${nuevaMercaderia.rubro}</th>
            <th>${nuevaMercaderia.costo}</th>
        </tr>
    `;

}