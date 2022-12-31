const p_dias = document.querySelector(".p_dias");

const inicio = new Date(2016,09,24);

const hoy = new Date();

let dif = inicio.getTime() - hoy.getTime();

const diasTotales = (inicio, hoy) => {
    let dif = inicio.getTime() - (hoy.getTime() - (1000 * 3600));
    let diasTotales = Math.ceil(dif / (1000 * 3600 * 24));
    return diasTotales > 0 ? diasTotales : diasTotales * (-1);
}

const diasDesde = diasTotales(inicio,hoy);

p_dias.innerHTML = `Hoy llevamos juntos ${diasDesde} dias y siempre que regreses aqui recuerda que estare aqui para lo que sea, te hare feliz y te protegere siempre, en las buenas y en las malas, aqui estoy siempre para ti, por siempre tuyo ramsio&#128147;`;

console.log("Es una de las paginas a las cuales me he esforzado por hacer practicamente desde algo cero y puesto mucho atencion, te amo hoy por siempre y mañana mas &#128147;")