import app from "./app";
import "dotenv/config"
import { sequelize } from "./db";

const PORT = process.env.PORT || 3001;

async function main() {
    await sequelize.sync({force: false});
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
  
main();
