# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker - [Download & Install Docker](https://docker.com).

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

- Installation for local work - [postgresSQL and pgAdmin4](https://www.postgresql.org/).

```
Please, if it is not difficult for you, insert this function in the user.memory.repository.ts file instead of the const createUser... function

const createUser = async (user: {
  id: string;
  name: string;
  login: string;
  password: string;
}) => {
  const usersRepository = getRepository(User);
  const newUser = usersRepository.create(user);
  const chekPasswordUser = await hashPassword(newUser.password);
  newUser.password = chekPasswordUser;
  const addedUser = usersRepository.save(newUser);
  return addedUser;
};

It was erroneously replaced with a function from the previous task. Thanks for understanding.
```

## Authentication and JWT

```
npm run start:generate
```

```
npm run start:migrate
```

```
npm run start:ts
```

```
npm run test:auth
```

## Starting the server using docker

## Running Docker Desktop

```
In the file .env hange POSTGRES_HOST=localhost to POSTGRES_HOST=
```

# container launch

docker-compose up

```
Docker contaner is ready to go
After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.
```

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

Run documentation

```
npm run docs
```

In the folder docs, run the file index.html

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Checking Logging and Handling Errors

```
npm start:ts (ts-node src/server.ts)
```

To check the server error, uncomment line 28 file app.ts and check by running tests (npm run test).

```
For check uncaughtException, uncomment line 79 file app.ts and run npm run start:ts
```

For check unhandledRejection, uncomment line 82 file app.ts and run npm run start:ts

```
The logs are located nodejs2021Q4-service\src\log\WinstonLog

```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```

npm run lint

```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

```

```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

```

```

```

```
