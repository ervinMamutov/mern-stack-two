import express from 'express';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3008;

app.use('/public', express.static(join(__dirname, '/public')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
