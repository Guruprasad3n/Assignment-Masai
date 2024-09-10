import React, { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import { Suspense, lazy } from "react";

const TaskList = lazy(() => import("./components/TaskList"));

const App = () => {
  useEffect(() => {
    console.log("Fetching tasks...");
    return () => {
      console.log("Cleaning up...");
    };
  }, []);

  return (
    <div >
      <h1>Task Manager</h1>
      <TaskForm />
      <Suspense fallback={<div>Loading tasks...</div>}>
        <TaskList />
      </Suspense>
    </div>
  );
};

export default App;
