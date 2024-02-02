/* Verifica a conexão com o banco de dados */
let wsDBHealthCheck = require(__dirname + '../../services/wsDBHealthCheck');

/* GET TASKS */
let wsTaskList = require(__dirname + '../../services/task/wsTaskList');

/* GET PARAMS */
let wsParamsList = require(__dirname + '../../services/params/wsParamsList');

/* Declaração das Rotas disponíveis para utilização */
const routes = (router) => {
    /*########## Rotas GET ##########*/
    router.get("/", wsDBHealthCheck.get);
    
    /* GET TASKS ROTA */
    router.get("/tasks", wsTaskList.get);

    /* GET PARAMS ROTA */
    router.get("/params", wsParamsList.get);
}

module.exports = routes