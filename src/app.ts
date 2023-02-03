import Express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes/handler.routes";

// Swagger
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "swagger-jsdoc";
import { swaggerConfig } from "./swaggerConfig";

const app = Express();

app.use(cors());
app.use(morgan("dev"));
app.use(Express.json());

app.use("/api", router);
const specs = swaggerDocument(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs)); // http://localhost:3000/api-docs

export default app;