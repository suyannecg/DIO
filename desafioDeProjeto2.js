let vitorias = 200;
let derrotas = 70;

let resultado = calcularLvl(vitorias, derrotas);

console.log(`O Herói tem saldo de ${resultado.saldoVitorias} vitórias e está no nível: ${resultado.lvl}`)

function calcularLvl(vitorias, derrotas) {

 let saldoVitorias = vitorias - derrotas;
 let lvl = " ";

if (saldoVitorias <= 10) {
	lvl = 'Ferro'
    
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
	lvl = 'Bronze'
}

else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
	lvl = 'Prata'
}

else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
	lvl = 'Ouro'
}

else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
	lvl = 'Diamante'
}

else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
	lvl = 'Lendário'
}

else {
	lvl = 'Imortal';
}

return { saldoVitorias, lvl };
}
