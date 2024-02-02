let DatabaseUtils = require("../../operations/v1/databaseUtils");
const {
    responseCodes,
} = require("../../operations/v1/dicionaryErrorsUtils");

let SQL = `SELECT *
                    FROM TABLE(FC_LIST_TASKS(PN_NAME       => :P_NAME,
                                        PN_PRIORITY   => :P_PRIORITY,
                                        PN_STATUS     => :P_STATUS,
                                        PN_DATE       => :P_DATE,
                                        PN_PAGE       => :P_PAGE,
                                        PN_TOTAL_PAGE => :P_TOTAL_PAGE))`

async function taskList(req, res) {
    try {
        // Inicia consulta e retorna dados
        let results = await DatabaseUtils.QueryOperation(SQL, {
            P_NAME: "%" + req.query.name + "%",
            P_PRIORITY: "%" + req.query.priority + "%",
            P_STATUS: "%" + req.query.status + "%",
            P_DATE: "%" + req.query.date + "%",
            P_PAGE: req.query.page,
            P_TOTAL_PAGE: req.query.total_page,
        });
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

module.exports.get = taskList;