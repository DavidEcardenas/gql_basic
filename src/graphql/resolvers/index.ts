import { IResolvers } from "@graphql-tools/utils";
import { mergeResolvers } from "@graphql-tools/merge";

import cartoons from "./cartoons";
import people from "./people";
import employee from "./employee";

const resolvers: IResolvers = mergeResolvers([
    cartoons,
    people,
    employee
]);

export default resolvers;