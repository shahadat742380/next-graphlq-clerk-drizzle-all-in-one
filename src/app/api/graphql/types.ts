// ** import types from modules
import { userTypeDefs } from "./schema/users/types";

const baseTypeDefs = `#graphql
  type Query
  type Mutation
`;

export const typeDefs = [baseTypeDefs, userTypeDefs];
