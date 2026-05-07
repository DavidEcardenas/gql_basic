import express, { Application } from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const app: Application = express();

app.use(cors());

const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

async function startServer() {
    await server.start();

    server.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log(
            `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
        );
    });
}

startServer();