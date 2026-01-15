let nome = 'fulano';
let exp = 9500.00;
let lvl = " "

if (exp < 1000.00) {
	lvl = "Ferro"
    
} else if (exp >= 1001.00 && exp < 2000.00) {
	lvl = "Bronze"
}

else if (exp >= 2001.00 && exp < 5000.00) {
	lvl = "Prata"
}

else if (exp >= 5001.00 && exp < 7000.00) {
	lvl = "Ouro"
}

else if (exp >= 7001.00 && exp < 8000.00) {
	lvl = "Platina"
}

else if (exp >= 8001.00 && exp < 9000.00) {
	lvl = "Ascendente"
}

else if (exp >= 9001.00 && exp < 10000.00) {
	lvl = "Imortal"
}

else if (exp >= 10000.00) {
	lvl = "Radiante"
}

console.log("O herói de nome " + nome + " está no nível: " + lvl + "!")
