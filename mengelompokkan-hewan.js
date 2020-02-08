function groupAnimals(animals) {
    // you can only write your code here!
    var alphabet = 'abcdefghijklmnopqrstuvwxzy'
    var newArray = []
    for (i = 0; i < alphabet.length; i++) {
        var temp = []
        for (j = 0; j < animals.length; j++) {
            if (alphabet[i] == animals[j][0]) {
                temp.push(animals[j])
            }
        }

        if (temp.length !== 0) {
            newArray.push(temp)
        }

    }
    return newArray
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ] 