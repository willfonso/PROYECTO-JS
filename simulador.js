
let suma = 0
function lanzardados() {
    let dado1 = Math.random(1,10);
    alert("El primer jugador obtuvo: " + parseInt(dado1*1000));
    let dado2 = Math.random(1, 10);
    alert("El segundo jugador obtuvo: " + parseInt(dado2*1000));

}

function resultado() {
    let suma = dado1 + dado2 
}
lanzardados();
resultado();