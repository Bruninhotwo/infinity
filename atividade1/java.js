/*const multiplicar = (a,b) => a * b;
console.log(multiplicar(2,3));


const contarVogais = (texto) => {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }
    
    return contador;
};

const texto = "Feliz, Halloween";
const resultado = contarVogais(texto);
console.log(`Número de vogais: ${resultado}`);



function converterTemperatura(temperaturaCelsius, callback) {
    return callback(temperaturaCelsius);
}


function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}



const temperaturaEmFahrenheit = converterTemperatura(25, celsiusParaFahrenheit);
console.log(`25 graus Celsius em Fahrenheit: ${temperaturaEmFahrenheit}`);


const calcularCubo = (numero) => numero ** 3;

const executarCallback = (numero, callback) => {
    return callback(numero);
};


const resultado1 = executarCallback(3, calcularCubo);
console.log(`O número escolhido elevado ao cubo = ${resultado1}`);

const resultado2 = executarCallback(4, calcularCubo);
console.log(`O número escolhido elevado ao cubo = ${resultado2}`);*/

/*function criaSoma(numero1) {
    return function(numero2) {
        return numero1 + numero2;
    };
}


const soma5 = criaSoma(5);
const resultado = soma5(3); 
console.log(resultado);*/


 
function operacoesMatematicas(num1, num2, callback) {
    return callback(num1, num2);
}


const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

console.log(operacoesMatematicas(10, 5, soma));        
console.log(operacoesMatematicas(10, 5, subtracao));   
console.log(operacoesMatematicas(10, 5, multiplicacao)); 
console.log(operacoesMatematicas(10, 5, divisao));      


// Aplicativo 1 - função de autentificação, 2- aceita um nome de usuario + senha + 2 funções de callback como argumentos. 3-A função autentificarUsuario deve simular o processo simples.

const usuarios = {
    'usuario1': 'senha1',
    'usuario2': 'senha2',
    'usuario3': 'senha3'
};

const autenticarUsuario = (nomeUsuario, senha, onSuccess, onError) => {
    const autenticar = () => {
        return usuarios[nomeUsuario] === senha;
    };

    setTimeout(() => {
        autenticar() ? onSuccess(`Usuário ${nomeUsuario} autenticado com sucesso!`)
                     : onError('Nome de usuário ou senha incorretos.');
    }, 1000); 
};

// Exemplo de uso
autenticarUsuario(
    'usuario1',
    'senha2',
    mensagem => console.log(mensagem), // Callback de sucesso
    mensagem => console.error(mensagem)  // Callback de erro
);

