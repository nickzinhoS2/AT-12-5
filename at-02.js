//2
let velocidade =  parseInt(prompt ('qual a velocidade que o seu carro percorria?'))

if(velocidade > 80){
    let multa = (velocidade - 80)*5;
alert(`voce ultrapassou o limite. A multa é de ${multa}`);
}else{
    alert( 'voce esta dentro do limite');
}