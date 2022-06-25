


// logica para una calculadora simple en javascript

export const calcular = (operacion, numero1, numero2) => {
    let nu1 = parseInt(numero1);
    let nu2 = parseInt(numero2);
    const resultado = {
        "+": nu1 + nu2,
        "-": nu1 - nu2,
        "*": nu1 * nu2,
        "/": nu1 / nu2,
    }
    return resultado[operacion];
}

