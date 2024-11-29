let heroi = "Batman";
let xp = 90000000;
let nivel;

  switch (true) {
    case xp < 1001:
        nivel = "Ferro";
        console.log("O herói " + heroi + " está no nível " + nivel  + "!");
        break;
    case xp <= 2000:
        nivel = "Bronze";
        console.log("O herói " + heroi + " está no nível " + nivel  + "!");
        break;
    case xp <= 5000:
        nivel = "Prata";
        console.log("O herói " + heroi + " está no nível " + nivel  + "!");
        break;
    case xp <= 7000:
        nivel = "Ouro";
        console.log("O herói " + heroi + " está no nível " + nivel  + "!");
        break;
    case xp <= 8000:
        nivel = "Platina";
        console.log("O herói " + heroi + " está no nível " + nivel  + "!");
        break;
    case xp <= 9000:
        nivel = "Ascendente";
        console.log("O herói " + heroi + " está no nível " + nivel  + "!");
        break;
    case xp <= 10000:
        nivel = "Imortal";
        console.log("O herói " + heroi + " está no nível " + nivel  + "!");
        break;
    default:
        nivel = "Radiante";
        console.log("O herói " + heroi + " está no nível " + nivel  + "!");
        break;
    
}