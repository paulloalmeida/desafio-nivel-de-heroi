let heroi = prompt("Digite o nome do herói: ");
let xp = 4555;
let nivel;
switch (true) {
    case xp <= 1000 :
        nivel = "Ferro";
        break;
    case xp <= 2000 :
        nivel = "Bronze"
        break;
    case xp <= 5000 :
        nivel = "Prata"
        break;
        console.log("O herói " + heroi + " está no nível " + nivel  + "!");
        break;


}