import { useState, VFC } from 'react';
import { Task } from 'components/Task';
import V4Form from 'components/v4/V4Form';
import V4List from 'components/v4/V4List';

const V4Home: VFC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <h1>タスクリスト (v4)</h1>
      <V4Form tasks={tasks} setTasks={setTasks} />
      <V4List tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default V4Home;
