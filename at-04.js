let salario = parseInt(prompt('qual salário'));

if (salario > 1250){
    let aumento = (salario * 10/100) + salario;
    alert(aumento)
    }else{
        let aumento2 = (salario * 15/100) + salario;
        alert(aumento2);
    }