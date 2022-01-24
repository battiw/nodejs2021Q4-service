/* eslint-disable import/newline-after-import */
import 'reflect-metadata';
// import { DeepPartial, getRepository } from 'typeorm';
import { app } from './app';
import { config } from './common/config';
import { connectionDB } from './helper/connectionDB';
// import { User } from './entity/User';
const { PORT } = config;

(async () => {
  await connectionDB();
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
})();
