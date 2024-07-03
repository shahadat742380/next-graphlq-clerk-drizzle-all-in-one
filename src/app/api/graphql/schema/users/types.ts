export const userTypeDefs = `#graphql

scalar Date

type User {
  id: Int!
  name: String!
  email: String!
  profile: String!
  created_at: Date!
  updated_at: Date!
}

type UserList {
  userData: [User]
  totalCount: Int
  totalPages: Int
}

input UserInput {
  name: String
  email: String
  profile: String
}


type UserData {
  user: User
}

input UpdateUserInput{
  id: Int!
  name: String
  email: String
  profile: String
}

type Query {
  users(offset: Int, limit: Int, search: String): UserList
  user(id: Int!): User
}

type Mutation {
  addUser(input: UserInput!): User
  updateUser(input: UpdateUserInput): updateUserResponse
  deleteUser(id: Int!): DeleteUserResponse
}

type updateUserResponse{
success: Boolean!
  message: String!
  data: UserData
}

type DeleteUserResponse {
  success: Boolean!
  message: String!
  data: UserData
}
`;
