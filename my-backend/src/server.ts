import app from './app';
import dotenv from 'dotenv';

dotenv.config(); // To load environment variables from .env

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
