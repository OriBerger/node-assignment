import dotenv from "dotenv";
dotenv.config();

export const getConfig = () => ({
    name: process.env.NAME,
    env: process.env.ENV,
    port: process.env.PORT,
    username: process.env.APP_USERNAME,
});

export const config = () => {
  return setInterval(() => {
    console.log("Config: ", getConfig());
  }, 5000);
};

config();
