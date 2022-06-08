let businessmen = ["Zacheus", "Jemediah", "Horace", "Claus", "Abdul"];


let [topgun, bravo, ...rest] = businessmen;


let listBravoCoworkers = function (topgun, rest) {
    console.log(topgun+","+rest);
}

listBravoCoworkers(topgun,rest);