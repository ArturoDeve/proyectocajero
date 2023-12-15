
/* const usuarios = [
    { nombre: 'arturo', pin: 1122, saldo: 1000.0 },
    { nombre: 'jesus', pin: 3344, saldo: 1500.0 },
    { nombre: 'polo', pin: 5566, saldo: 2000.0 }
  ]; */


/* paso uno para iniciar sesion utilizar un ciclo*/
/* indexcuenta idice globarl para iniciar sesio */



let saldo = 0; // saldo

function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario === "Arturo" && contrasena === "1979") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("operaciones").style.display = "block";
        document.getElementById("mensajeError").innerHTML = "";
    } else {
        document.getElementById("mensajeError").innerHTML = "Usuario o contraseña incorrectos.";
    }
}

function depositar() {
    const montoDepositado = parseFloat(document.getElementById("montoDepositado").value);

    if (!isNaN(montoDepositado) && montoDepositado <= 10000) {
        saldo += montoDepositado;
        alert(`Depósito exitoso. Nuevo saldo: ${saldo}`);
    } else {
        alert("Error: El monto depositado no puede ser mayor a 10,000 ");
    }
}

function retirar() {
    const montoRetiro = parseFloat(document.getElementById("montoRetiro").value);

    if (!isNaN(montoRetiro) && montoRetiro <= 3000 && montoRetiro <= saldo) {
        saldo -= montoRetiro;
        alert(`Retiro exitoso. Nuevo saldo: ${saldo}`);
    } else {
        alert("El monto de retiro no puede ser mayor a 3,000 ");
    }
}

function consultarSaldo() {
    alert(`Saldo actual: ${saldo}`);
}


function cerrarSesion() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("operaciones").style.display = "none";
    document.getElementById("mensajeError").innerHTML = "";
}
