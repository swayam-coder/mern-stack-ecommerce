import Commerce from "@chec/commerce.js";
import dotenv from "dotenv";

dotenv.config();

export const commerce = new Commerce(process.env.REACT_APP_API_KEY, true);