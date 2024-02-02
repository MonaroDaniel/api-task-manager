let DatabaseUtils = require("../../operations/v1/databaseUtils");
const {
    responseCodes,
} = require("../../operations/v1/dicionaryErrorsUtils");

let SQL = `SELECT A.ID AS "id",
                  A.NAME AS "name",
                  A.TYPE AS "type"
                         FROM VW_PARAMS A`

async function paramsList(req, res) {
    try {
        // Inicia consulta e retorna dados
        let results = await DatabaseUtils.QueryOperation(SQL, {});
        if (results.length > 0) {
            res.status(200).send(results)
        } else {
            res.status(404).send(await responseCodes("error", "ERR404"));
        }
    } catch (error) {
        console.error(`[${req.path}] ${error.message}`);
        res.status(500).send({ status_code: "ERR500", message: error.message });
    }
}

module.exports.get = paramsList;