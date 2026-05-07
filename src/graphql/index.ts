import { readFileSync } from "fs";
import { join } from "path";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";

import cartoonsResolver from "./resolvers/cartoons";
import peopleResolver from "./resolvers/people";

const cartoonsSchema = readFileSync(
    join(__dirname, "./schemas/cartoons.graphql"),
    "utf8"
);

const peopleSchema = readFileSync(
    join(__dirname, "./schemas/people.graphql"),
    "utf8"
);

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([
        cartoonsSchema,
        peopleSchema
    ]),
    resolvers: [
        cartoonsResolver,
        peopleResolver
    ]
});