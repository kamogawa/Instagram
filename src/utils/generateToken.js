import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import passport from "passport";
import "../passport";
import jwt from "jsonwebtoken";

const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);

export default generateToken;
