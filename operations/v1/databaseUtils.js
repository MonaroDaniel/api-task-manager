var oracledb = require('oracledb');

async function QueryOperation(sql, binds) {
    let connection;
    let ret;
    try {
        // Get a connection from the default pool
        connection = await oracledb.getConnection();
        const options = { outFormat: oracledb.OUT_FORMAT_OBJECT };
        const result = await connection.execute(sql, binds, options);
        ret = result.rows;
    } catch (err) {
        console.error(err);
        ret = {};
    } finally {
        if (connection) {
            try {
                // Put the connection back in the pool
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
        return ret;
    }
}

async function StoredProcedureOperation(sql, binds) {
    let connection;
    let ret;
    try {
        // Get a connection from the default pool
        connection = await oracledb.getConnection();
        const options = { autoCommit: true };
        await connection.execute(sql, binds, options);
        ret = true;
    } catch (err) {
        console.error(err);
        ret = false;
    } finally {
        if (connection) {
            try {
                // Put the connection back in the pool
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
        return ret;
    }
}

module.exports = { QueryOperation, StoredProcedureOperation }