function atividade1() {

    const diasPessoa = document.getElementById('atv1-dia');
    const mesesPessoa = document.getElementById('atv1-mes');
    const anosPessoa = document.getElementById('atv1-ano');
    const resultadoP = document.getElementById('textarea1');
    let resultado = 0;

    if (diasPessoa.value == '') {

        alert('Insira o valor no campo dias');
        diasPessoa.focus();
        resultadoP.innerHTML = (``);

    } else if (mesesPessoa.value == '') {

        alert('Insira o valor no campo meses');
        mesesPessoa.focus();
        resultadoP.innerHTML = (``);

    } else if (anosPessoa.value == '') {

        alert('Insira o valor no campo anos');
        anosPessoa.focus();
        resultadoP.innerHTML = (``);

    } else {

        resultado = parseInt(diasPessoa.value) + (parseInt(mesesPessoa.value) * 30) + (parseInt(anosPessoa.value) * 365); 
        resultadoP.innerHTML = (`A idade em dias é ${resultado}`);

    }

}

function atividade2() {

    const primeiraNota = document.getElementById('atv2-nota1');
    const segundaNota = document.getElementById('atv2-nota2');
    const terceiraNota = document.getElementById('atv2-nota3');
    const quartaNota = document.getElementById('atv2-nota4');
    const respostaT = document.getElementById('textarea2')
    let resultado, notaQuarta;

    if (primeiraNota.value == '') {

        alert('Insira o valor no campo Nota 1');
        primeiraNota.focus();
        respostaT.innerHTML = ''
        return

    } else if (segundaNota.value == '') {
        
        alert('Insira o valor no campo Nota 2');
        segundaNota.focus();
        respostaT.innerHTML = ''
        return

    } else if (terceiraNota.value == '') {

        alert('Insira o valor no campo Nota 3');
        terceiraNota.focus();
        respostaT.innerHTML = ''
        return

    }

    if (quartaNota.value != '') {

        notaQuarta = quartaNota.value 

    } else {

        notaQuarta = 0 
    }

    if (parseInt(terceiraNota.value) > parseInt(notaQuarta)) {
    
        resultado = ((parseInt(primeiraNota.value)) + (parseInt(segundaNota.value)) + (parseInt(terceiraNota.value))) / 3;
    
    } else {
    
        resultado = ((parseInt(primeiraNota.value)) + (parseInt(segundaNota.value)) + (parseInt(notaQuarta))) / 3;

    }

    respostaT.innerHTML = (`A média das notas do aluno é ${resultado}`);
    
}

function atividade3() {

    const numeroip = document.getElementById('atv3-numeroIp');
    const messageN = document.getElementById('textarea3');
    let valorPar, valorImpar, mensagemPI;

    if (numeroip.value == '') {

        alert('Insira o valor no campo de Número');
        numeroip.focus();
    
    } else {

        for (let valor = 1; valor <= parseInt(numeroip.value); valor++) {

            if (parseInt(numeroip.value) < 2) {

            valorPar = "Não há números pares"

            }

            if (valor % 2 == 0) {
            
                if (valorPar == undefined) {

                    valorPar = valor

                } else {
                
                    valorPar = valorPar + ', ' + valor
                
                }
            
            } else {
            
                if (valorImpar == undefined) {

                    valorImpar = valor 

                } else {

                    valorImpar = valorImpar + ', ' + valor

                }

            }
        
            messageN.innerHTML = (`Impar: ${valorImpar}\nPar: ${valorPar}`);

        }

    }

}

function atividade4() {

    const nameUser = document.getElementById('atv-4-user')
    const passUser = document.getElementById('atv-4-senha')
    const messageUser = document.getElementById('textarea4')

    if (nameUser.value == '') {
        
        alert('O campo de usuário não foi preenchido')
        nameUser.focus()
        return


    } else if (passUser.value == '') {

        alert('O campo de senha não foi preenchido')
        passUser.focus()
        return

    } 

    if (nameUser.value != 'KUNDEN') {

        messageUser.innerHTML = 'O usuário está incorreto!'
        nameUser.focus()
        return 
            
    } 

    if (passUser.value != 'KUNDENJS2023') {

        messageUser.innerHTML = 'A senha está incorreta!'
        passUser.focus() 
        return         

    } 

    messageUser.innerHTML = 'O login foi efetuado com sucesso'

}

function atividade5() {
    
    const verificaSenha = document.getElementById('atv5-senha')
    const verificaMensagem = document.getElementById('textarea5')

    if (verificaSenha.value == '') {

        alert('O campo de senha não foi preenchido!')
        verificaSenha.focus()
        verificaMensagem.innerHTML = ''
        return

    } 
    
    if (verificaSenha.value.search(/\d+/) == -1) { 

        verificaMensagem.innerText = 'Senha inválida! deve ter pelo menos um número.'

    } else if (verificaSenha.value.search(/[a-z]/i) == -1) {

        verificaMensagem.innerText = 'Senha inválida! deve ter pelo menos uma letra.'

    } else if (verificaSenha.value.search(/[\s]/) != -1) {
 
        verificaMensagem.innerText = 'Senha inválida! não deve ter espaço em branco'

    } else if (verificaSenha.value.length < 8 || verificaSenha.value.length > 10) {

        verificaMensagem.innerText = 'Senha inválida! deve ter entre 8 e 10 caracteres'

    } else {

        verificaMensagem.innerText = 'A senha está correta!'

    }

}

function atividade6() {

    const fahrenheit = document.getElementById('atv6-grau')
    const grausMensagem = document.getElementById('textarea6')
    let celsius = 0

    if (fahrenheit.value.search(/[a-z]/i) != -1) { 

        grausMensagem.innerHTML = 'Número inválido! não pode ter letras.'
        return
        
    } else if (fahrenheit.value == '') {

        alert('O campo de graus não foi preenchido!')
        fahrenheit.focus()
        grausMensagem.innerHTML = ''
        return

    } 

    celsius = ((fahrenheit.value - 32) * 5) / 9

    grausMensagem.innerHTML = `${celsius} graus Celsius`

}

function atividade7() {

    const a = document.getElementById('atv7-a')
    const b = document.getElementById('atv7-b')
    const c = document.getElementById('atv7-c')
    const baskharaMensagem = document.getElementById('textarea7')
    let x, x1, x2

    if (a.value.search(/[a-z]/i) != -1) {

        baskharaMensagem.innerText = 'Insira apenas números'
        a.focus()
        return

    } else if (b.value.search(/[a-z]/i) != -1) {

        baskharaMensagem.innerText = 'Insira apenas números'
        b.focus()
        return

    } else if (c.value.search(/[a-z]/i) != -1) {

        baskharaMensagem.innerText = 'Insira apenas números'
        c.focus()
        return
    }
    if (a.value == '') {

        alert('O campo A não foi preenchido!')
        a.focus()
        baskharaMensagem.innerHTML = ''
        return

    } else if (b.value == '') {

        alert('O campo B não foi preenchido!')
        b.focus()
        baskharaMensagem.innerHTML = ''
        return

    } else if (c.value == '') {

        alert('O campo C não foi preenchido!')
        c.focus()
        baskharaMensagem.innerHTML = ''
        return

    } 

    x = Math. sqrt((b.value ** 2) -4 * a.value * c.value)
    x1 = (-b.value + x) / 2 * a.value
    x2 = (-b.value - x) / 2 * a.value

    baskharaMensagem.innerHTML = `X1 = ${x1}\nX2 = ${x2}`

}

function atividade8() {

    const frase = document.getElementById('atv8-frase')
    const fraseMensagem = document.getElementById('textarea8')
    let vogal, espaco, mensagem

    if (frase.value == '') {

        alert('O campo da frase não foi preenchido')
        frase.focus()
        fraseMensagem.innerHTML = ''
        return

    } 

    if ((frase.value.search(/[aeiou]/gi)) != -1) {

        vogal = frase.value.match(/[aeiou]/gi)
        vogal = vogal.length

        mensagem = `Quantidade de vogais da frase: ${vogal}\n`

    } else {

        mensagem = "A frase não tem vogais\n"

    }

    if ((frase.value.search(/[\s]/) != -1)) {

        espaco = frase.value.match(/[\s]/gi)
        espaco = espaco.length

        mensagem += `Quantidade de espacos em branco da frase: ${espaco}`

    } else {

        mensagem += "A frase não tem espaço" 

    }

    fraseMensagem.innerHTML = mensagem
    
}


function atividade9() {

    const salarioFixo = document.getElementById('atv9-salario')
    const percComissao = document.getElementById('atv9-comissao')
    const quantidadeCarros = document.getElementById('atv9-carro')
    const valorCarros = document.getElementById('atv9-valor')
    const carroMensagem = document.getElementById('textarea9')
    let valorFinal, comissaoExtra = 0, valorComissao = '', valorTotalVenda

    if (salarioFixo.value == '') {

        alert('O campo de salário fixo não foi preenchido')
        salarioFixo.focus()
        carroMensagem.innerHTML = ''
        return
        
    } else if (percComissao.value == '') {

        alert('O campo de comissão não foi preenchido')
        percComissao.focus()
        carroMensagem.innerHTML = ''
        return

    } else if (quantidadeCarros.value == '') {

        alert('O campo de quantidade não foi preenchido')
        quantidadeCarros.focus()
        carroMensagem.innerHTML = ''
        return

    } else if (valorCarros.value == '') {

        alert('O campo de valor não foi preenchido')
        valorCarros.focus()
        carroMensagem.innerHTML = ''
        return

    }

    valorTotalVenda = valorCarros.value * quantidadeCarros.value
    valorComissao = (valorTotalVenda * percComissao.value) / 100

    if (valorCarros.value * quantidadeCarros.value >= 100000) {

        comissaoExtra = (valorTotalVenda * 7.5) / 100

    }

    valorFinal = valorComissao + comissaoExtra + parseInt(salarioFixo.value)

    carroMensagem.innerHTML = `Salário fixo: ${salarioFixo.value}\nComissão: ${valorComissao}\nComissão extra: ${comissaoExtra}\nSalário final: ${valorFinal}`
}

function atividade10() {

    const joioETrigo = ["joio", "trigo", "trigo", "joio", "trigo", "joio", "joio", "joio", "joio", "trigo", "trigo", "joio", "joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo", "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo", "joio", "trigo", "joio", "joio", "joio"]
    const mensagemJT = document.getElementById('textarea10')
    let joio = [], trigo = []

    for (const palavra of joioETrigo) {

        if (palavra == "joio") {
            
            joio.push(palavra)

        } else if (palavra == "trigo") {
            
            trigo.push(palavra)

        }
        
    }

    mensagemJT.innerHTML = `Quantidade de joio: ${joio.length}\nQuantidade de trigo: ${trigo.length}`

}

function atividade11() {

    const capitalInicial = document.getElementById('atv11-capital')
    const tempoMensal = document.getElementById('atv11-tempo')
    const juroMensal = document.getElementById('atv11-juros')
    const mensagemMontante = document.getElementById('textarea11')
    let montante
    
    if (capitalInicial.value == '') {

        alert('O campo de capital inicial não foi preenchido')
        capitalInicial.focus()
        mensagemMontante.innerHTML = ''
        return 
    
    } else if (tempoMensal.value == '') {

        alert('O campo de tempo não foi preenchido')
        tempoMensal.focus()
        mensagemMontante.innerHTML = ''
        return

    } else if (juroMensal.value == '') {

        alert('O campo de juros não foi preenchido')
        juroMensal.focus()
        mensagemMontante.innerHTML = ''
        return
    }

    montante = capitalInicial.value * ((1 + (juroMensal.value / 100)) ** tempoMensal.value) 
    
    mensagemMontante.innerHTML = `O montante será de: ${montante.toFixed(2)}`
}