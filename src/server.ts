import 'reflect-metadata';
import { app } from './app';
import { config } from './common/config';
import { connectionDB } from './helper/connectionDB';

const { PORT } = config;

(async () => {
  await connectionDB();
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
})();
