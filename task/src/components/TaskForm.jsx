import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const taskRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask({ id: Date.now(), name: taskName }));
      setTaskName('');
      taskRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={handleChange}
        ref={taskRef}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;