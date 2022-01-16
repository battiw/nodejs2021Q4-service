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
    console.log(`1`);
    if (connectionName) {
      console.log(`2`);
      if (!connectionName.isConnected) await connectionName.connect();
      console.log(`3`);
    } else {
      console.log(`4`);
      await createConnection(ormconfig);
      console.log(`Connection to DB to port`);
      console.log(`5`);
    }
  } catch (err) {
    console.log(`6`);
    console.log('Connection error', err);
    process.exit(1);
  }
  console.log(`7`);
};

export { connectionDB };
