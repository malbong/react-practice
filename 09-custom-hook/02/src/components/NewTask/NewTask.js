import React from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const url = 'https://react-post-35b9b-default-rtdb.firebaseio.com/tasks.json';
const options = {
  method: 'POST',
  body: JSON.stringify({ text: '' }),
  headers: {
    'Content-Type': 'application/json',
  },
};

const NewTask = (props) => {
  const [isLoading, error, getData] = useHttp();

  const setData = async (taskText) => {
    const data = await getData(url, {
      ...options,
      body: JSON.stringify({ text: taskText }),
    });

    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  return (
    <Section>
      <TaskForm onEnterTask={setData} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
