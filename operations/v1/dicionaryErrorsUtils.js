let jsonResponse = require("./listResponseCode.json");

async function erros(errorCode) {
    let message = "";

    switch (errorCode) {
        //Erros em rotas de User Login
        case "UL0001":
            message = "Token inválido ou não informado.";
            break;
        case "UL0002":
            message = "Usuário e/ou Senha não informado(s).";
            break;
        case "UL0003":
            message = "Usuário sem permissão de acesso.";
            break;
        case "UL0004":
            message = "Usuário e/ou Senha inválidos.";
            break;

        //Erros em rotas de User Geral
        case "UG0001":
            message =
                "Não foi possível consultar informações com os dados informados.";
            break;

        //Erros em rotas de Device Geral
        case "DG0001":
            message =
                "Parâmetro id_company não informado e/ou informado incorretamente.";
            break;
        case "DG0002":
            message =
                "Parâmetro id_device não informado e/ou informado incorretamente.";
            break;
        case "DG0003":
            message =
                "Parâmetro id_brand não informado e/ou informado incorretamente.";
            break;
        case "DG0004":
            message =
                "Parâmetro id_model não informado e/ou informado incorretamente.";
            break;
        case "DG0005":
            message =
                "Parâmetro serial_number não informado e/ou informado incorretamente.";
            break;
        case "DG0006":
            message =
                "Parâmetro patrimony_number não informado e/ou informado incorretamente.";
            break;
        case "DG0007":
            message =
                "Parâmetro id_user não informado e/ou informado incorretamente.";
            break;
        case "DG0008":
            message =
                "Parâmetro id_reason não informado e/ou informado incorretamente.";
            break;
        case "DG0009":
            message =
                "Parâmetro id_maintenance não informado e/ou informado incorretamente.";
            break;

        //Erros em rotas de Device Usage
        case "DU0001":
            message =
                "Parâmetro id_employee não informado e/ou informado incorretamente.";
            break;
        case "DU0002":
            message =
                "Parâmetro id_usage não informado e/ou informado incorretamente.";
            break;
        //Erros em rotas de Device List

        //Erros em rotas de Employee
        case "EG0001":
            message =
                "Parâmetro id_company não informado e/ou informado incorretamente.";
            break;
        case "EG0002":
            message =
                "Parâmetro id_user não informado e/ou informado incorretamente.";
            break;
        case "EG0003":
            message =
                "Parâmetro barcode não informado e/ou informado incorretamente.";
            break;

        //Erros em rotas de Parametros
        case "PG0001":
            message =
                "Parâmetro id_company não informado e/ou informado incorretamente.";
            break;
        case "PG0002":
            message =
                "Parâmetro typeList não informado e/ou informado incorretamente.";
            break;
    }
    return message;
}

async function responseCodes(type, code) {
    try {
        return jsonResponse[type].filter((row) => row.status_code === code)[0];
    } catch (error) {
        return {
            status_code: "ERR000",
            message: "Erro não traduzido",
        };
    }
}

module.exports = { erros, responseCodes };
