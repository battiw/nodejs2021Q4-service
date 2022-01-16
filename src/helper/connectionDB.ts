import { getConnection, createConnection } from 'typeorm';
import config from '../ormconfig';

const connectionDB = async () => {
  let connection;
  try {
    connection = getConnection();
  } catch (err) {
    // add error handle
    console.log('Сonnection has not been established yet... need to wait');
  }

  try {
    if (connection) {
      if (!connection.isConnected) await connection.connect();
    } else {
      await createConnection(config);
    }
    console.log(`Connection to DB to port ${process.env['POSTGRES_PORT']}`);
  } catch (err) {
    console.log('Connection error', err);
    process.exit(1);
  }
};

export { connectionDB };
