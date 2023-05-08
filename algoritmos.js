//1 -> Escreva na tela todos os números pares de 0 a 100 
/*
for (i=0; i<=100; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}
*/

//2 -> Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números
/*
let array = [2, 4, 6, 8]
let soma = 0
array.forEach(num => {
    soma += num;
});

console.log(soma)
*/

//3 -> Crie uma função que remova todos os números negativos de um array
/*
const removeNegativo = (array) => array.filter(x => x > 0);
const array =[-2, 5, -6, 2, -1, 9];
const arrayPositivo = removeNegativo(array);
console.log(arrayPositivo);
*/

//4 -> Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2

let array = [1, 2, 3, 4, 5]
let array2 = []

array.forEach(num=> {
    array2[num-1] = array[num-1] * 2
})

console.log(array2);

