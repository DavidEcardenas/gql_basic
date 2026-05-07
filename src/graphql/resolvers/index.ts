import { IResolvers } from "@graphql-tools/utils";
import { mergeResolvers } from "@graphql-tools/merge";

import cartoons from "./cartoons";
import people from "./people";

const resolvers: IResolvers = mergeResolvers([
    cartoons,
    people
]);

export default resolvers;