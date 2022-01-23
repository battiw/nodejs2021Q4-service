import { getConnection, createConnection, getRepository } from 'typeorm';
import config from '../ormconfig';
import { User } from '../entity/User';

const connectionDB = async () => {
  let connection;
  try {
    connection = getConnection();
  } catch (err) {
    console.log(`Сonnection has not been established yet... need to wait `);
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

  const usersRepository = getRepository(User);
  const newAdmin = new User();
  const newUser = usersRepository.create(newAdmin);
  const addedUser = usersRepository.save(newUser);
  console.log(addedUser);
};

export { connectionDB };
