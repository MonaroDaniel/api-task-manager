var DatabaseUtils = require('../operations/v1/databaseUtils')

//Query
var SQL = `SELECT 1 "healthy" FROM DUAL`;

async function get(req, res, next)
{
    try
    {
        let results = await DatabaseUtils.QueryOperation(SQL,{});
        if (results) {
            if (results.length > 0) {
                let response = results;
                res.status(200).send(response);
            }
            else
                res.status(202).send({})
        }
    }
    catch(error)
    {   
        console.error(`[${req.path}] ${error.message}`);               
        res.status(501).send({error: error.message});
    }
}

module.exports.get = get;