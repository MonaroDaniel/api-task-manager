//Importa os dados do JSON para utilização
let json = require('../../package.json');

//Função para exibição do log - Titulo
function fc_consoleLogTitulo(title, text, maxQtd) {
    maxQtd = (maxQtd - 6) - (title.length);
    var strText = text.substring(0, maxQtd).padEnd(maxQtd, ' ');
    var retorno = `# ${title}: ${strText} #`;
    return retorno;
};

//Função para mostrar exibir titulo
async function fc_exibeTitulo() {
    var qtdLogCaracteres = 80;
    var strLogSeparador = "";
    strLogSeparador = strLogSeparador.padEnd(qtdLogCaracteres, "#");

    //Exibe na tela o start da execução.
    console.log(strLogSeparador);
    console.log(fc_consoleLogTitulo('Name', json.name, qtdLogCaracteres));
    console.log(fc_consoleLogTitulo('Version', json.version, qtdLogCaracteres));
    console.log(fc_consoleLogTitulo('Description', json.description, qtdLogCaracteres));
    console.log(fc_consoleLogTitulo('Started at', new Date().toLocaleString('pt-BR'), qtdLogCaracteres));
    console.log(strLogSeparador);
};

module.exports = { fc_exibeTitulo };