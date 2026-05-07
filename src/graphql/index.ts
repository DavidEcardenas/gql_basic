import { readFileSync } from "fs";
import { join } from "path";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers/resolverMap";

const rootSchema = readFileSync(
    join(__dirname, "./schemas/schema.graphql"),
    "utf8"
);

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [rootSchema],
    resolvers
});