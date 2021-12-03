let ListaParticipantes = [88]
if (ListaParticipantes < 100){
    // É possivel realizar o cadsatro para o evento
console.log("É possível se cadastrar no evento - Participantes abaixo de 100")

} else {
    // Não é possível realizar o cadastro
    console.log("Quantidade Máxima de Inscritos Atingida - Limite de 100 participantes atingido")
    }

let datacadastro = new Date(2021,02,12)

let dataevento = new Date(2021,04,12)

if (dataevento > datacadastro) {
    console.log("É Possivel Cadastrar um Evento - Data de Cadastro Permitida")
    // É possivel realizar o cadsatro para o evento

} else {
    console.log("Não é Possível Cadastrar um evento - Data de Cadastro Não Permitida")
    // Não é possível realizar o cadastro
}

let idade = [18]

if (idade >- 18) {
    console.log("Idade Permitida - É possivel realizar o cadastro")
    // É possivel realizar o cadsatro para o evento

} else {
    console.log("Idade mínima permitida 18 anos - Não é possível realizar o cadastro")
    // Não é possível realizar o cadastro
}