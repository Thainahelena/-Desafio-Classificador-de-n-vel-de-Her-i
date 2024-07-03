let nomeHeroi = prompt("Informe o nome do herói: ");
let XpHeroi = prompt("Informe a quantidade de experiência do Herói(XP): ");

let nivel

if(XpHeroi <= 1000){
    nivel = "Ferro";
}else if(XpHeroi <= 1001 && XpHeroi <= 2000){
    nivel = "Bronze"
}else if(XpHeroi <= 2001 && XpHeroi <= 5000){
    nivel = "Prata";
}else if(XpHeroi <= 5001 && XpHeroi <= 7000){
    nivel = "Ouro";
}else if(XpHeroi <= 7001 && XpHeroi <= 8000){
    nivel = "Platina";
}else if(XpHeroi <= 8001 && XpHeroi <= 9000){
    nivel = "Ascendente";
}else if(XpHeroi <= 9001 && XpHeroi <= 10000){
    nivel = "Imortal";
}else if(XpHeroi >= 10001 ){
    nivel = "Radiante"; 
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel);
