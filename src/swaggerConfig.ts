export const swaggerConfig = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Items API",
            version: "1.0.0",
            description: "Example API"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
};