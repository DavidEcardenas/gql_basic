import express, { Application } from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { schema } from "./graphql";
import MongoLib from "./mongo";

const app: Application = express();

app.use(cors());

const server = new ApolloServer({
    schema,

    introspection: true,

    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],

    context: async () => {
        return await new MongoLib().connect();
    }
});

async function startServer() {
    await server.start();

    server.applyMiddleware({ app });

    app.listen(
        process.env.PORT || 4000,
        () => {
            console.log(
                `🚀 Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`
            );
        }
    );
}

startServer();