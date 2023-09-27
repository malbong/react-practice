import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

const url = 'https://react-post-35b9b-default-rtdb.firebaseio.com//tasks.json';

function App() {
  const [isLoading, error, getData] = useHttp();
  const [tasks, setTasks] = useState([]);

  const setData = useCallback(async () => {
    const data = await getData(url);
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  }, [getData]);

  useEffect(() => {
    setData();
  }, [setData]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={setData}
      />
    </React.Fragment>
  );
}

export default App;
