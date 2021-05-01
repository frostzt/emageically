import { config } from "dotenv";

config({ path: `${__dirname}/config.env` });

import app from "./app";

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});
