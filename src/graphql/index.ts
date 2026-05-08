import { readFileSync } from "fs";
import { join } from "path";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";

import cartoonsResolver from "./resolvers/cartoons";
import peopleResolver from "./resolvers/people";
import employeeResolver from "./resolvers/employee";
import skillResolver from "./resolvers/skill";

const cartoonsSchema = readFileSync(
    join(__dirname, "./schemas/cartoons.graphql"),
    "utf8"
);

const peopleSchema = readFileSync(
    join(__dirname, "./schemas/people.graphql"),
    "utf8"
);

const employeeSchema = readFileSync(
    join(__dirname, "./schemas/employee.graphql"),
    "utf8"
);

const skillSchema = readFileSync(
    join(__dirname, "./schemas/skill.graphql"),
    "utf8"
);

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([
        cartoonsSchema,
        peopleSchema,
        employeeSchema,
        skillSchema
    ]),

    resolvers: [
        cartoonsResolver,
        peopleResolver,
        employeeResolver,
        skillResolver
    ]
});