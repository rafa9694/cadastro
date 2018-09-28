class Aluno{
    constructor(nome,sobrenome,email,curso,idade,telefone,cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.curso = curso;
        this.email = email;
        this.idade = idade;
        this.telefone = telefone;
        this.cpf = cpf;
    }     
}

var list = [] ;
var indice
function cadastro(){
    
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobreNome').value;
    var email = document.getElementById('email').value;
    var curso = document.getElementById('curso').value;
    var idade = document.getElementById('idade').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;
    var aluno = new Aluno(nome,sobrenome,email,curso,idade,telefone,cpf);
    list.push(aluno);
    alert("Cadastro concluído com sucesso !");

}

function verlista (){

    var i = 0
    var imprimir = "";
    

    while(list.length != i ){
        imprimir = imprimir + alunoImprimir(list[i],i)
        i++;
        console.log(imprimir)
    }
    document.getElementById("saida").innerHTML = imprimir 
    document.getElementById("boxsaida").style.visibility = "visible"

}

function alunoImprimir(elemento,indice){
    return ("<p>Nome = " + elemento.nome + alunoImprimirSobrenome(elemento) +
             alunoImprimirEmail(elemento) + alunoImprimirCurso(elemento) + 
             alunoImprimirIdade(elemento) + alunoImprimirTelefone(elemento) +
             alunoImprimirCpf(elemento) + "     <button type=" + 
             '"button" id="deletabutton" onclick="deletar(' + indice + ')">Deletar</button>' +
             "     <button type=" + 
             '"button" id="updatebutton" onclick="update(' + indice + ')">Update</button>' + "</p>" )
}

function alunoImprimirSobrenome(aluno){
       if (aluno.sobrenome == ""){
           return (aluno.sobrenome)
       }else {
           return("| Sobrenome = " + aluno.sobrenome)
       } 

}

function alunoImprimirEmail(aluno){
    if (aluno.email == ""){
        return (aluno.email)
    }else {
        return("| Email = " + aluno.email)
    } 

}

function alunoImprimirCurso(aluno){
    if (aluno.curso == ""){
        return (aluno.curso)
    }else {
        return("| Curso = " + aluno.curso)
    } 

}

function alunoImprimirIdade(aluno){
    if (aluno.idade == ""){
        return (aluno.idade)
    }else {
        return("| Idade = " + aluno.idade)
    } 

}

function alunoImprimirTelefone(aluno){
    if (aluno.telefone == ""){
        return (aluno.telefone)
    }else {
        return("| Telefone = " + aluno.telefone)
    } 

}

function alunoImprimirCpf(aluno){
    if (aluno.cpf == ""){
        return (aluno.cpf)
    }else {
        return("| CPF = " + aluno.cpf)
    } 

}

function buscar(){
    
    var pesquisa = document.getElementById('pesquisa').value
    var resultado =list.filter(function(item){
    return (pesquisa == item.nome) 
    });
    var i = 0
    var imprimir = ""
    while (resultado.length != i ){
        imprimir = imprimir + alunoImprimir(resultado[i],i)
        i++                    
    }
    document.getElementById("saida").innerHTML = imprimir
    document.getElementById("boxsaida").style.visibility = "visible"
}

function deletar (indice){
    list.splice(indice,1)
    buscar()
}

function sair(){
    document.getElementById("boxsaida").style.visibility = "hidden"
}

function update(i){
    document.getElementById("boxupdate").style.visibility = "visible"
    indice = i
    document.getElementById("Update").innerHTML = "Dados do " + list[i].nome 

}

function atualizar(){
    var nome = document.getElementById('updateNome').value
    list[indice].nome =  nome
    verlista()
    alert("Dados atualizados");
}

function sairUpdate(){
    document.getElementById("boxupdate").style.visibility = "hidden"
}