/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSprint = /* GraphQL */ `
  mutation CreateSprint(
    $input: CreateSprintInput!
    $condition: ModelSprintConditionInput
  ) {
    createSprint(input: $input, condition: $condition) {
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
export const updateSprint = /* GraphQL */ `
  mutation UpdateSprint(
    $input: UpdateSprintInput!
    $condition: ModelSprintConditionInput
  ) {
    updateSprint(input: $input, condition: $condition) {
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
export const deleteSprint = /* GraphQL */ `
  mutation DeleteSprint(
    $input: DeleteSprintInput!
    $condition: ModelSprintConditionInput
  ) {
    deleteSprint(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
