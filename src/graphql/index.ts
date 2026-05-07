import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import gql from "graphql-tag";

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs
});