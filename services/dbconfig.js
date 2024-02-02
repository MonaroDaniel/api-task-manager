module.exports = {
    user: process.env.NODE_ORACLEDB_USER || "MASTER",
    password: process.env.NODE_ORACLEDB_PASSWORD || "adm",
    connectString:
        process.env.NODE_ORACLEDB_CONNECTIONSTRING ||
        "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(CONNECT_DATA =(SERVER = DEDICATED)(SERVICE_NAME = XEPDB1)))",
};