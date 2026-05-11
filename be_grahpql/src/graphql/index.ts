import { readFileSync } from "fs";
import { join } from "path";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";

import cartoonsResolver from "./resolvers/cartoons";
import peopleResolver from "./resolvers/people";
import employeeResolver from "./resolvers/employee";
import skillResolver from "./resolvers/skill";
import PostResolver from "./resolvers/posts";
import userResolver from "./resolvers/user";

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

const postsSchema = readFileSync(
    join(__dirname, "./schemas/posts.graphql"),
    "utf8"
);

const skillSchema = readFileSync(
    join(__dirname, "./schemas/skill.graphql"),
    "utf8"
);


const usersSchema = readFileSync(
    join(__dirname, "./schemas/users.graphql"),
    "utf8"
);

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([
        cartoonsSchema,
        peopleSchema,
        employeeSchema,
        skillSchema,
        postsSchema,
        usersSchema
    ]),

    resolvers: [
        cartoonsResolver,
        peopleResolver,
        employeeResolver,
        skillResolver,
        PostResolver,
        userResolver
    ]
});