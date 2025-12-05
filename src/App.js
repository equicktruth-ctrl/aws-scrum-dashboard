import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listSprints, listTasks } from './graphql/queries';
import { createSprint, createTask } from './graphql/mutations';
import logo from './logo.svg';
import './App.css';

const client = generateClient();

function App() {
  const [sprints, setSprints] = useState([]);
  const [newSprintName, setNewSprintName] = useState('');

  const [tasks, setTasks] = useState([]);
  const [selectedSprintId, setSelectedSprintId] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('TODO');

  useEffect(() => {
    async function fetchData() {
      try {
        const sprintsResult = await client.graphql({ query: listSprints });
        const sprintItems = sprintsResult.data?.listSprints?.items ?? [];
        setSprints(sprintItems);

        const tasksResult = await client.graphql({ query: listTasks });
        const taskItems = tasksResult.data?.listTasks?.items ?? [];
        setTasks(taskItems);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    }
    fetchData();
  }, []);

  async function handleCreateTask(e) {
    e.preventDefault();
    if (!newTaskTitle.trim() || !selectedSprintId) return;

    try {
      const result = await client.graphql({
        query: createTask,
        variables: {
          input: {
            title: newTaskTitle.trim(),
            status: newTaskStatus,        // "TODO" | "IN_PROGRESS" | "DONE"
            sprintId: selectedSprintId,
          },
        },
      });
      const created = result.data.createTask;
      setTasks((prev) => [...prev, created]);
      setNewTaskTitle('');
    } catch (err) {
      console.error('Error creating task', err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>AWS Scrum Dashboard – Sprints</p>

        <form onSubmit={handleCreateTask} style={{ marginTop: '1rem' }}>
          <select
            value={selectedSprintId}
            onChange={(e) => setSelectedSprintId(e.target.value)}
          >
            <option value="">Select sprint</option>
            {sprints.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="New task title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />

          <select
            value={newTaskStatus}
            onChange={(e) => setNewTaskStatus(e.target.value)}
          >
            <option value="TODO">Todo</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>

          <button type="submit">Add Task</button>
        </form>

        <ul>
          {sprints.map((sprint) => (
            <li key={sprint.id}>{sprint.name}</li>
          ))}
        </ul>
    <div className="board">
      <div className="column">
        <h2>Todo</h2>
        <ul>
          {tasks
            .filter((t) => t.status === 'TODO')
            .map((t) => (
              <li key={t.id}>{t.title}</li>
            ))}
        </ul>
      </div>

      <div className="column">
        <h2>In Progress</h2>
        <ul>
          {tasks
            .filter((t) => t.status === 'IN_PROGRESS')
            .map((t) => (
              <li key={t.id}>{t.title}</li>
            ))}
        </ul>
      </div>

      <div className="column">
        <h2>Done</h2>
        <ul>
          {tasks
            .filter((t) => t.status === 'DONE')
            .map((t) => (
              <li key={t.id}>{t.title}</li>
            ))}
        </ul>
      </div>
    </div>

      </header>
    </div>
  );
}

export default App;
