import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
<<<<<<< HEAD
  NODE_ENV: process.env.NODE_ENV,
=======
  node_env:process.env.Node_Env,
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
};
