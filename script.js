function calcularMedia (){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota1").value);
    var resultado = (nota1 + nota2)/2;

    if (resultado >= 7) { 
        alert("Aluno aprovado")
    } 
    else 
        alert("Aluno reprovado")
}
