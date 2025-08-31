import dotenv from "dotenv";
dotenv.config();

export const getConfig = () => {
  return {
    name: process.env.NAME,
    env: process.env.ENV,
    port: process.env.PORT,
    username: process.env.APP_USERNAME,
  };
};

export const config = () => {
  setInterval(() => {
    console.log("Config: ", getConfig());
  }, 5000);
};

config();
