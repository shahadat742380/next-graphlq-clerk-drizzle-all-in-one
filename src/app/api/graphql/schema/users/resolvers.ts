import { NodePgDatabase } from "drizzle-orm/node-postgres";

// ** import custom scalar
import { GraphQLDate } from "@/graphql/scalar";

// ** import service
import { userService } from "./service";

interface Context {
  db: NodePgDatabase;
}


interface UserByIdArgs {
  id: number;
}

interface AddUserArgs {
  input: any;
}

interface UpdateUserArgs {
  id: number;
  input: any
}

interface DeleteUserArgs {
  id: number;
}

export const userResolvers = {
  Date: GraphQLDate,
  Query: {
    users: async (
      _: unknown,
      {
        offset = 0,
        limit = 10,
        search= ""
      }: { offset: number; limit: number; search?: string },
      { db }: { db: NodePgDatabase }
    ) => {
      const { userData, totalCount } = await userService.getUsers(
        db,
        offset,
        limit,
        search
      );
      return {
        userData,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
      };
    },
    user: (_: unknown, { id }: UserByIdArgs, { db }: Context) =>
      userService.getUserById(db, id),
  },
  Mutation: {
    addUser: (_: unknown, { input }: AddUserArgs, { db }: Context) =>
      userService.addUser(db, input),

    updateUser: (_: unknown, { input }: UpdateUserArgs, { db }: Context) =>
      userService.updateUser(db, input),

    deleteUser: (_: unknown, { id }: DeleteUserArgs, { db }: Context) =>
      userService.deleteUser(db, id),
  },
};
