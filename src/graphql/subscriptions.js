/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSprint = /* GraphQL */ `
  subscription OnCreateSprint($filter: ModelSubscriptionSprintFilterInput) {
    onCreateSprint(filter: $filter) {
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
export const onUpdateSprint = /* GraphQL */ `
  subscription OnUpdateSprint($filter: ModelSubscriptionSprintFilterInput) {
    onUpdateSprint(filter: $filter) {
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
export const onDeleteSprint = /* GraphQL */ `
  subscription OnDeleteSprint($filter: ModelSubscriptionSprintFilterInput) {
    onDeleteSprint(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
