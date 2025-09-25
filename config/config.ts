import dotenv from "dotenv";
dotenv.config();

interface AppConfig {
  name: string | undefined;
  env: string | undefined;
  port: string | undefined;
  username: string | undefined;
}

export const getConfig = (): AppConfig => ({
  name: process.env.NAME,
  env: process.env.ENV,
  port: process.env.PORT,
  username: process.env.APP_USERNAME,
});

setInterval(() => {
  console.log("Config: ", getConfig());
}, 5000);
