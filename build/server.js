"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./common/config");
const { PORT } = config_1.config;
app_1.app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
