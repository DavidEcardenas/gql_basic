import { gql, DocumentNode } from "@apollo/client";

export const GET_EMPLOYEES: DocumentNode = gql`
{
  getEmployees {
    _id
    name
  }
}
`;