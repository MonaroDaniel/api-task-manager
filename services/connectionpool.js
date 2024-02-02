const oracledb = require('oracledb');
const dbConfig = require('./dbconfig');

async function init() {
  try {
    await oracledb.createPool({
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString,
      poolMax: 5000,
      poolTimeout: 60,
      queueTimeout: 60000,
    });
    console.log('Connection pool started');

    process
    .once('SIGTERM', closePoolAndExit)
    .once('SIGINT',  closePoolAndExit);
  
  } catch (err) {
    console.error('init() error: ' + err.message);
  }
}

async function closePoolAndExit() {
  console.log('\nTerminating');
  try {
    await oracledb.getPool().close(10);
    console.log('Pool closed');
    process.exit(0);
  } catch(err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = {init,closePoolAndExit}    