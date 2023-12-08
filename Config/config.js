import dotenv from "dotenv";
dotenv.config({ path: "Config/.env" });
export const { NODE_ENV, JWT_SECREAT, DATABASE_PROD_DB, DEBUG_MODE } =
  process.env;
