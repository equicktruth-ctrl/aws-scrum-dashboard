/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSprint = /* GraphQL */ `
  query GetSprint($id: ID!) {
    getSprint(id: $id) {
      id
      name
      goal
      startDate
      endDate
      tasks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSprints = /* GraphQL */ `
  query ListSprints(
    $filter: ModelSprintFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSprints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        goal
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      assignee
      sprintId
      createdAt
      updatedAt
      sprintTasksId
      __typename
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        assignee
        sprintId
        createdAt
        updatedAt
        sprintTasksId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
