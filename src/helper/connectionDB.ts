import 'reflect-metadata';
import { getConnection, createConnection } from 'typeorm';
import ormconfig from '../ormconfig';

const connectionDB = async () => {
  let connectionName;
  try {
    connectionName = getConnection();
  } catch (err) {
    console.log('Сonnection has not been established yet... need to wait');
  }
  try {
    if (connectionName) {
      if (!connectionName.isConnected) await connectionName.connect();
    } else {
      await createConnection(ormconfig);
      console.log(`Connection to DB to port`);
    }
  } catch (err) {
    console.log('Connection error', err);
    process.exit(1);
  }
};

export { connectionDB };
